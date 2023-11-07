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
            transactionType: 'conversion',

            youpayval: 0,
            yougetval: 0
        }
    },
    mixins: [walletMixin, TransactionpopupMixin, listMixin],
    mounted() {
        this.selectWallet('fiat/spot')
    },
    computed: {
        ...mapState({
            allpairs: state => state.trade.allpairs,
            cryptopairs: state => state.trade.cryptopairs,
            stockpairs: state => state.trade.stockpairs,
            commoditiespairs: state => state.trade.commoditiespairs,
        }),
        transactionDescription() {
            const { fromInput, toInput, currentAssetFrom, currentAssetTo, walletCategory } = this;

            if (currentAssetFrom && currentAssetTo && !isNaN(parseFloat(fromInput))) {
                const description = `converted ${parseFloat(fromInput)} ${currentAssetFrom._id} to ${parseFloat(toInput)} ${currentAssetTo._id} in ${walletCategory} wallet`;

                return description
            }

            return '';
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
        fromInput() {
            const { youPayUSD, currentAssetTo, calculatePercentage } = this;
            this.youpayval = youPayUSD();
            this.toInput = youPayUSD() / parseFloat(currentAssetTo.price);
            this.yougetval = parseFloat(this.toInput) * parseFloat(currentAssetTo.price);
            this.transactionFee = calculatePercentage(this.yougetval, 5);
            this.inputError = false;
        },
        currentAssetFrom() {
            this.fromInput = '';
            this.toInput = '';
            this.inputError = false;
        },
        currentAssetTo() {
            this.fromInput = '';
            this.toInput = '';
            this.inputError = false;
        },
        walletCategory() { }
    },
    methods: {
        ...mapActions('trade', ['getallpairs']),
        youPayUSD() {
            const { currentAssetFrom, fromInput } = this;

            if (fromInput.length && currentAssetFrom) {
                const fromInpt = parseFloat(fromInput);

                if (fromInpt) {
                    const currasspric = parseFloat(currentAssetFrom.price);

                    return (fromInpt * currasspric).toFixed(6)
                }
            }

            return 0;
        },
        youGetUSD() {
            const { currentAssetTo, toInput } = this;

            if (toInput.length && currentAssetTo) {
                const toInpt = parseFloat(toInput);

                if (toInpt) {
                    const currasspric = parseFloat(currentAssetTo.price);
                    return (toInpt * currasspric).toFixed(6)
                }
            }

            return 0;
        },
        toggleWalletCat() {
            this.walletCategoriesOpen ? this.walletCategoriesOpen = false : this.walletCategoriesOpen = true
        },
        toggleCryptoCat() {
            this.assetCategoriesOpen ? this.assetCategoriesOpen = false : this.assetCategoriesOpen = true
        },
        setCurrentAsset(asset) {
            const { toggleCryptoCat, clearInput, setAssetCategory } = this;

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
            this.$router.push({ path: '/swap', query: { wallet } })
            this.walletCategory = wallet;
            this.walletCategoriesOpen = false
        },
        setAssetCategory(category) {
            if (this.swapDirection === 'from') {
                this.assetCategoryFrom = category
            }

            if (this.swapDirection === 'to') {
                this.assetCategoryTo = category
            }
        },
        compareAssetsPrices(price0fAssetA, price0fAssetB) {
            return parseFloat(price0fAssetA) / parseFloat(price0fAssetB)
        },
        checkBlcOfAsstinWllt() {
            const { assetblcUSD, currentAssetFrom, youpayval } = this;

            if (currentAssetFrom) {
                if (assetblcUSD(currentAssetFrom) > youpayval && youpayval !== 0) {
                    this.toggleconfirmTrade();
                } else {
                    this.inputError = true;
                }
            } else {
                return this.inputError = true;
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
            const { checkBlcOfAsstinWllt } = this;
            checkBlcOfAsstinWllt();
        }
    }
}