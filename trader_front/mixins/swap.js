import { mapActions, mapState, mapMutations } from 'vuex';

import walletMixin from './wallet';
import TransactionpopupMixin from './transactionpopup';
import listMixin from '@/mixins/list';

export default {
    data() {
        return {
            fromInput: '',
            toInput: '',
            walletCategory: "fiat/spot",
            walletCategoriesOpen: false,
            assetCategoriesOpen: false,
            currentAssetFrom: null,
            currentAssetTo: null,
            swapDirection: 'from',
            assetCategoryFrom: 'crypto',
            assetCategoryTo: 'crypto',
            fromAssetBalance: 0, 
            toAssetBalance: 0,
            fromAssetBalanceInUSD: 0, 
            toAssetBalanceInUSD: 0,
            transactionFee: 0,
            transactionTotal: 0,
            inputError: false,
            transactionType: 'conversion'
        }
    },
    mixins: [walletMixin, TransactionpopupMixin, listMixin],
    computed: {
        transactionDescription() {
            const { fromInput, toInput, currentAssetFrom, currentAssetTo, walletCategory } = this;
            
            if (currentAssetFrom && currentAssetTo && !isNaN(parseFloat(fromInput))) {
                const description = `converted ${parseFloat(fromInput)} ${currentAssetFrom._id} to ${parseFloat(toInput)} ${currentAssetTo._id} in ${walletCategory} wallet`;

                return description
            }

            return '';
        },
        youPayUSD() {
            const { currentAssetFrom, fromInput } = this;
            
            if (currentAssetFrom && !isNaN(parseFloat(fromInput))) {
                const priceOfAssetFrom = parseFloat(currentAssetFrom.price);

                if (this.fromInput) {
                    const priceOfAssetFromPerUnitInfromInput = parseFloat(fromInput) * priceOfAssetFrom;
                    return (priceOfAssetFromPerUnitInfromInput).toFixed(6)
                }
            }

            return 0;
        },
        youGetUSD() {
            const { currentAssetTo } = this;

            if (currentAssetTo) {
                const priceOfAssetTo = parseFloat(currentAssetTo.price);

                if (this.toInput) {
                    return (this.toInput * priceOfAssetTo).toFixed(6)
                }
            }

            return 0;
        },
        enablePreviewBtn() {
            const { fromInput, toInput, inputError } = this;

            if (!isNaN(parseFloat(fromInput)) && !isNaN(parseFloat(toInput))) {

                if (parseFloat(fromInput) > 0 && parseFloat(fromInput) > 0 && !inputError) {
                    return true
                }
            }

            return false;
        }
    },
    watch: {
        balances(newValue, oldValue) {
            if (newValue.length) {
                this.getAssetsBalancesInWallet();
            }
        },
        fromInput() {
            const { getAssetsRate, checkBalanceOfAssetinWallet } = this;

            getAssetsRate();
            checkBalanceOfAssetinWallet();
        },
        toInput() {

        },
        walletCategory() {
            this.getAssetsBalancesInWallet();
        }
    },
    methods: {
        toggleWalletCat() {
            this.walletCategoriesOpen ? this.walletCategoriesOpen = false : this.walletCategoriesOpen = true
        },
        toggleCryptoCat() {
            this.assetCategoriesOpen ? this.assetCategoriesOpen = false : this.assetCategoriesOpen = true
        },
        getAssetsBalancesInWallet() {
            const { balances, walletCategory, currentAssetFrom, currentAssetTo } = this;

            const wallet = balances.filter(balance => balance.wallet === walletCategory)[0];
            
            const { assetDetails } = wallet;

            const fromAssetBalance = assetDetails.find(assetDetail => assetDetail.base.assetdb_id === currentAssetFrom._id );
            const toAssetBalance = assetDetails.find(assetDetail => assetDetail.base.assetdb_id === currentAssetTo._id );

            this.fromAssetBalance = fromAssetBalance ? fromAssetBalance.base.balanceinWallet : 0;
            this.toAssetBalance = toAssetBalance ? toAssetBalance.base.balanceinWallet : 0;
            this.fromAssetBalanceInUSD = fromAssetBalance ? fromAssetBalance.balanceInDollars : 0;
            this.toAssetBalanceInUSD = toAssetBalance ? toAssetBalance.balanceInDollars : 0;
        },
        setCurrentAsset(asset) {
            const { toggleCryptoCat, getAssetsBalancesInWallet, clearInput, setAssetCategory } = this;

            if (this.swapDirection === 'from') {
                this.currentAssetFrom = asset
            }

            if (this.swapDirection === 'to') {
                this.currentAssetTo = asset
            }

            if (asset.assetType) {
                const { assetType } = asset;
                setAssetCategory(assetType);
            } else {
                setAssetCategory('crypto');
            }

            toggleCryptoCat();
            getAssetsBalancesInWallet();
            clearInput();
        },
        setandreturnFromAsset(asset) {
            this.currentAssetFrom = asset;
            return this.currentAssetFrom;
        },
        setandreturnToAsset(asset) {
            this.currentAssetTo = asset;
            return this.currentAssetTo;
        },
        setSwapDirection(direction) {
            this.swapDirection = direction;
            this.assetCategoriesOpen = true;
        },
        selectWallet(wallet) {
            const { toggleWalletCat } = this;
            this.walletCategory = wallet;
            toggleWalletCat();
        },
        setAssetCategory(category) {
            if (this.swapDirection === 'from') {
                this.assetCategoryFrom = category
            }

            if (this.swapDirection === 'to') {
                this.assetCategoryTo = category
            }
        },
        getAssetsRate() {
            const { currentAssetFrom, currentAssetTo, fromInput } = this;

            if (!isNaN(parseFloat(fromInput))) {
                const priceOfAssetFrom = parseFloat(currentAssetFrom.price);
                const priceOfAssetTo = parseFloat(currentAssetTo.price);
                const priceOfAssetFromPerUnitInfromInput = parseFloat(fromInput) * priceOfAssetFrom;
                const unitsOfAssetTo = (priceOfAssetFromPerUnitInfromInput/priceOfAssetTo);
                this.toInput = unitsOfAssetTo;
            } else {
                this.toInput = 0;
            }       
        },
        compareAssetsPrices(price0fAssetA, price0fAssetB) {
            return parseFloat(price0fAssetA) / parseFloat(price0fAssetB)
        },
        checkBalanceOfAssetinWallet() {
            const { fromAssetBalanceInUSD, client, calculatePercentage, youPayUSD } = this;
            const { transactionFeePercentage } = client;

            const transactionFee = calculatePercentage(youPayUSD, transactionFeePercentage);
            const transactionTotal = parseFloat(transactionFee) + parseFloat(youPayUSD);

            this.transactionFee = transactionFee.toFixed(20);
            this.transactionTotal = transactionTotal.toFixed(20);

            if (fromAssetBalanceInUSD <= transactionTotal) {
                this.inputError = true;
            }

            if (fromAssetBalanceInUSD > transactionTotal) {
                this.inputError = false;
            }
        },
        calculatePercentage(input, percentage) {
            return input * (percentage / 100);
        },
        setfromInputToMax() {
            const { fromAssetBalance } = this;

            this.fromInput = fromAssetBalance;

            const { client, calculatePercentage, youPayUSD } = this;
            const { transactionFeePercentage } = client;

            const transactionFee = calculatePercentage(youPayUSD, transactionFeePercentage);
            const transactionTotal = parseFloat(transactionFee) + parseFloat(youPayUSD);

            this.transactionFee = transactionFee.toFixed(20);
            this.transactionTotal = transactionTotal.toFixed(20);

            const finalAmount = this.transactionTotal - this.transactionFee
            this.fromInput = finalAmount;
        },
        previewTrade() {
            this.toggleconfirmTrade();
        }
    }
}