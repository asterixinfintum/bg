import AssetBalance from '../models/assetBalance';
import Wallet from '../models/wallet';

async function createAssetBalanceAutoTrade(walletasset, capital) {
    try {
        const wallet = await Wallet.find({ ownerId: walletasset.ownerId, _id: walletasset.walletId });
        const walletType = wallet[0].walletType
        const assetBl = {
            ownerId: walletasset.ownerId,
            assetId: walletasset.assetdb_id,
            balanceAmount: walletasset.balanceinWallet,
            swapOrConvertFrom: "none",
            swapOrConvertTo: "none",
            assetInteractedWith: "none",
            assetType: walletasset.assetType,
            transactionType: {
                type: "autotrade creation",
                toWallet: walletType,
                fromAsset: "",
                toAsset: ""
            },
            transactionDescription: `autotrade creation with ${capital} of ${walletasset.assetdb_id} in ${walletType} wallet`,
            currentWallet: walletType,
            cryptoAddressInteractedWith: "",
            cryptoAddressNetwork: "In House"
        }

        const assetBalance = new AssetBalance(assetBl);

        return assetBalance.save()
    } catch (error) {
        console.log(error);
    }
}

export default createAssetBalanceAutoTrade;