import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            client: state => state.auth.client,
            client_token: state => state.auth.client_token,
            wallets: state => state.wallet.wallets,
            cryptoassets: state => state.cryptoassets.cryptoassets,
            inhouseassets: state => state.inhouseassets.items,
            inhouseasset: state => state.inhouseassets.item
        }),
        balance() {
            const { balances, wallettype, sumBalanceInWallet } = this;

            if (balances && balances.length && wallettype) {
                const balanceitem = balances.filter(balanceitem => balanceitem.wallet === wallettype)[0];

                const { assetDetails } = balanceitem;
                
                return sumBalanceInWallet(assetDetails);
            }
            
            return 0;
        },
        balanceInBTC() {
            const { balances, wallettype, sumBalanceInWalletinBTC } = this;

            if (balances && balances.length && wallettype) {
                const balanceitem = balances.filter(balanceitem => balanceitem.wallet === wallettype)[0];

                const { assetDetails } = balanceitem;
                
                return sumBalanceInWalletinBTC(assetDetails);
            }
            
            return 0;
        },
        balances() {
            const { wallets } = this;
            const balances = [];

            if (wallets && wallets.length) {
                wallets.forEach(wallet => {
                    const { 
                        returnCryptoAssetDetails,
                        returnAssetBalanceInBTC,
                        returnDollarValue 
                    } = this;
                    const { assets } = wallet;
                    
                    if (assets && assets.length) {
                        const assetDetails = [];

                        assets.forEach(asset => {
                            const { balanceinWallet } = asset;
                            const { price } = returnCryptoAssetDetails(asset.assetdb_id);

                            const assetDetail = {
                                base: asset,
                                detail: returnCryptoAssetDetails(asset.assetdb_id),
                                balanceInDollars: returnDollarValue(balanceinWallet, price),
                                balanceInBTC: returnAssetBalanceInBTC(price, balanceinWallet)
                            }

                            return assetDetails.push(assetDetail)
                        });

                        const balance = {
                            wallet: wallet.wallettype,
                            assetDetails
                        }

                        balances.push(balance);
                    } else {
                        const balance = {
                            wallet: wallet.wallettype,
                            assetDetails: [],
                        }

                        balances.push(balance)
                    }
                });

                return balances;
            }

            return [];
        },
        wallet() {
            const { wallettype } = this;
            const wallets = this.wallets;

            if (wallets.length && wallettype) {
                const wallet = wallets.filter(walletitem => walletitem.wallettype === wallettype)[0]
                return wallet
            }

            return 'not a wallet';
        },
        assetsOwned() {
            const { balances, wallettype, cryptoassets } = this;
            
            if (balances.length && cryptoassets.length && wallettype) {
                const balance = balances.find(balance => balance.wallet === wallettype);
                const { assetDetails } = balance;

                const assetsOwned = cryptoassets.filter(
                    cryptoasset => assetDetails.find(assetDetail => assetDetail.base.assetdb_id === cryptoasset._id)
                );
            
                return assetsOwned;
            }

            return [];
        }
    },
    methods: {
        returnwallet(wallettype) {
            const wallets = this.wallets;

            if (wallets.length && wallettype) {
                const wallet = wallets.filter(walletitem => walletitem.wallettype === wallettype)[0]
                return wallet
            }
            
            return null;
        },
        returnBalanceSum(wallettype) {
            const { balances, sumBalanceInWallet, sumBalanceInWalletinBTC } = this;
            const balance = balances.find(balance => balance.wallet === wallettype);

            if (balances.length && balance) {
                const { assetDetails } = balance;
                const usdBalance = sumBalanceInWallet(assetDetails);
                const btcBalance = sumBalanceInWalletinBTC(assetDetails);

                return {
                    usdBalance,
                    btcBalance
                }
            } else {
                return {
                    usdBalance: 0.000000000,
                    usdBalance: 0.000000000
                }
            }
        },
        sumBalanceInWallet(assetDetails) {
            let total = 0;
            
            assetDetails.forEach((assetDetail) => {
              // Parse the balanceinWallet as a float and convert it to fixed-point decimal with 8 decimal places.
              const balanceInDollars = parseFloat(assetDetail.balanceInDollars);
              // If parsing fails, balanceInWallet will be NaN, so skip the invalid value.
              if (!isNaN(balanceInDollars)) {
                // Convert the float to fixed-point decimal with 8 decimal places to preserve precision.
                const fixedDecimal = balanceInDollars.toFixed(20);
                // Convert the fixed-point decimal back to a float before adding it to the total.
                total += parseFloat(fixedDecimal);
              }
            });
          
            // Convert the total back to fixed-point decimal with 8 decimal places before returning.
            return total.toFixed(8);
          },
          sumBalanceInWalletinBTC(assetDetails) {
            let total = 0;
            
            assetDetails.forEach((assetDetail) => {
              // Parse the balanceinWallet as a float and convert it to fixed-point decimal with 8 decimal places.
              const balanceInBTC = parseFloat(assetDetail.balanceInBTC);
              // If parsing fails, balanceInWallet will be NaN, so skip the invalid value.
              if (!isNaN(balanceInBTC)) {
                // Convert the float to fixed-point decimal with 8 decimal places to preserve precision.
                const fixedDecimal = balanceInBTC.toFixed(20);
                // Convert the fixed-point decimal back to a float before adding it to the total.
                total += parseFloat(fixedDecimal);
              }
            });
          
            // Convert the total back to fixed-point decimal with 8 decimal places before returning.
            return total.toFixed(8);
          },
          returnCryptoAssetDetails(assetid) {
            const cryptoassets = this.cryptoassets;
            const cryptoasset = cryptoassets.filter(cryptoasset => cryptoasset._id === assetid)[0]

            return cryptoasset;
          },
          returnAssetBalanceOBJ(asset) {
            const { balances, wallettype } = this;

            if (balances.length) {
                const balance = balances.filter(balance => balance.wallet === wallettype)[0];
                const assetDetails = balance.assetDetails;
                const assetDetail = assetDetails.find(assetDetail => assetDetail.detail._id === asset._id);

                if (!assetDetail) {
                    return null
                }

                if (assetDetail === undefined) {
                    return null
                }

                if (assetDetail !== undefined && assetDetail) {
                    return assetDetail;
                }
            }
          },
          returnAssetBalanceInBTC(priceOfAssetInUSD, balanceOfAsset) {
            const cryptoassets = this.cryptoassets;
            const cryptoassetBTC = cryptoassets.filter(
                cryptoasset => cryptoasset.coin === 'BTC' && cryptoasset.name === "Bitcoin")[0];
            const priceOfBTCInUSD = cryptoassetBTC.price;
            
            const numberOfBitcoin = (balanceOfAsset * parseFloat(priceOfAssetInUSD)) / parseFloat(priceOfBTCInUSD);
            return `${parseFloat(numberOfBitcoin).toFixed(20)}`;
          },
          returnDollarValue(valueToConvertFromAssetBalance, valueToConvertFromAssetInDollarsPerUnit) {
            // Calculate the equivalent dollar value of valueToConvertFrom asset based on balance and value in dollars per 1 unit.
            const dollarValue = parseFloat(valueToConvertFromAssetBalance) * parseFloat(valueToConvertFromAssetInDollarsPerUnit);
          
            return dollarValue;
          },
          convert(fromId, toId) {
            const { cryptoassets } = this;
            console.log(cryptoassets);

            const fromAsset = cryptoassets.forEach(cryptoasset => cryptoasset._id === fromId);
            const toAsset = cryptoassets.forEach(cryptoasset => cryptoasset._id === toId);

            console.log(fromAsset, toAsset, 'test')
          }
    }
}