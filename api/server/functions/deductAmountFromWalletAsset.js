import Wallet from '../models/wallet';
import AssetBalance from '../models/assetBalance';
import WalletAsset from '../models/walletAsset';

async function deductAmountFromWalletAsset(ownerId, walletType, assetdb_id, amount) {
    
    return new Promise(async (resolve, reject) => {
        try {
            const wallet = await Wallet.find({ ownerId, walletType });
            const walletId = wallet[0]._id;
            const walletAssets = await WalletAsset.find({ ownerId, walletId, assetdb_id });
            const walletAsset = walletAssets[0];

            const balanceHistory = walletAsset.balanceHistory;
            const balanceInWallet = walletAsset.balanceinWallet;

            const newBalanceInWallet = balanceInWallet - amount;
            const newBalanceHistory = {
                balance: newBalanceInWallet,
                transactionType: "autotrade creation"
            }

            WalletAsset.findOneAndUpdate({ _id: walletAsset._id }, {
                balanceinWallet: newBalanceInWallet,
                balanceHistory: [...balanceHistory, ...[newBalanceHistory]]
            }, { new: true }, (err, updatedwalletasset) => {
                resolve(updatedwalletasset);
            });
        } catch (error) {
            reject(error);
        }
    });
}

export default deductAmountFromWalletAsset