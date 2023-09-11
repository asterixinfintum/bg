import fetch from 'node-fetch';

import Wallet from '../models/wallet';

async function getBitcoinBalances() {
    let tracker = 0;
    let timerId;

    try {
        const wallets = await Wallet.find();
        const walletBatches = splitArray(wallets);

        const iterateOverWalletBatches = async () => {
            await callNode(walletBatches[tracker]);
            tracker += 1;

            if (tracker === walletBatches.length) {
                callClearInterval();
            }
        };

        timerId = setInterval(iterateOverWalletBatches, 5000);

        function callClearInterval() {
            clearInterval(timerId);
        }

    } catch (error) {
        console.log(error)
    }
}

function splitArray(arr) {
    const chunkSize = 10;
    const chunks = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks;
}

function getFirstNItems(arr, n) {
    return arr.slice(0, n);
}

async function callNode(walletBatch) {
    walletBatch.forEach(async ({ address, walletType, confirmedTransactions, ownerId, assetIdInTraderDB }) => {
        const base_url = `${process.env.BITNODE}/${process.env.BITNODEK}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "method": "bb_getaddress",
                "params": [
                    `${address}`,
                    {
                        "page": 1,
                        "size": 1000,
                        "fromHeight": 0,
                        "details": "txids"
                    }
                ]
            })
        }

        await fetch(base_url, options)
            .then(response => response.json())
            .then(async (responsedata) => {
                const { result } = responsedata;
                const { totalReceived, txids, unconfirmedTxs, txs } = result;

                if (txids && assetIdInTraderDB) {

                    txids.forEach(txid => {
                        fetch(base_url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                method: "getrawtransaction",
                                params: [
                                    `${txid}`,
                                    2
                                ]
                            })
                        }).then(response => response.json())
                            .then((txiddata) => {
                                const { confirmations, vout } = txiddata.result;

                                if (confirmations > 10 && !confirmedTransactions.includes(txid)) {
                                    const { scriptPubKey, value } = vout[0];

                                    if (scriptPubKey.address === address) {

                                        const deposit = {
                                            ownerId,
                                            assetId: assetIdInTraderDB,
                                            balanceAmount: value,
                                            swapOrConvertFrom: "none",
                                            swapOrConvertTo: "none",
                                            assetInteractedWith: "none",
                                            assetType: "crypto",
                                            transactionType: {
                                                type: "deposit",
                                                toWallet: walletType,
                                                fromAsset: "",
                                                toAsset: ""
                                            },
                                            transactionDescription: `deposited ${value} ${assetIdInTraderDB} in ${walletType} wallet`,
                                            currentWallet: `${assetIdInTraderDB}`,
                                            cryptoAddressInteractedWith: `${address}`,
                                            cryptoAddressNetwork: "Bitcoin"
                                        }

                                        fetch(`${process.env.TRADERAPIURL}/deposit`, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(deposit)
                                        })
                                            .then(depresponse => depresponse.json())
                                            .then((depdata) => {
                                                console.log(depdata);
                                                const confirmedTrxs = [txid]

                                                Wallet.updateOne(
                                                    { ownerId },
                                                    {
                                                        confirmedTransactions: [...new Set(confirmedTrxs), ...confirmedTransactions],
                                                        txs
                                                    });
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            })
                                    }
                                }
                            })
                    })
                }
            })
            .catch(error => console.log('error', error));
    });
}

export default getBitcoinBalances;