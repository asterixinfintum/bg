import { mapActions, mapState, mapMutations } from 'vuex';

import tradeMixin from '@/mixins/trade';
import generalutilities from '@/mixins/generalutilities';
import walletMixin from './wallet';

export default {
    props: [
        'asset',
        'orderType',
        'fundaccount_popup_toggle',
        'openFundAccountPopup',
        'margin'
    ],
    mixins: [tradeMixin, generalutilities, walletMixin],
    data() {
        return {
            tradingPair: '',
            type: '',
            side: '',
            quantity: 0,
            buy_quantity: null,
            sell_quantity: null,
            price: 0,
            timeInForce: '',
            expiresAt: null,
            status: '',
            stopLossPrice: null,
            takeProfitPrice: null,
            trailingStopDistance: null,
            scaleOutQuantity: null,
            orderAmount: 0,
            filled: 0,
            cancelAll: false,
            triggerConditions: [],
            sellError: false,
            buyError: false,
            optimalPrice: 'Optimal price',
            triggerpricebuy: '',
            triggerpricesell: '',
            orderDetailsOpen: false,
            order: {},
            submittingOrder: false,
            strategiesOpen: false,
            tradeCapitalLimit: 100,
            autoTradeDetails: {},
            errorMessage: null,
            successMessage: null,
            loading: false
        }
    },
    computed: {
        ...mapState({
            cryptoassets: state => state.cryptoassets.cryptoassets,
            autotradestrategies: state => state.order.autotradestrategies
        }),
        autoTrade() {
            const autotrade = this.$route.query.autotrader;

            return autotrade;
        },
        wallettype() {
            const wallettype = this.$route.query.wallet;
            if (wallettype === 'margin') {
                return 'margin'
            }
            if (wallettype === 'spot') {
                return 'fiat/spot'
            }
        },
        currentTradingWallet() {
            return this.$route.query.wallet;
        },
        priceOfUsdt() {
            const { cryptoassets } = this;

            const priceOfUsdt = cryptoassets.find(cryptoasset => cryptoasset.coin === 'USDT');
            return priceOfUsdt.price;
        },
        assetOnRightSideOfOrderPair() {
            const { cryptoassets } = this;
            const assetOnRightSideOfOrderPair = cryptoassets.find(cryptoasset => cryptoasset.coin === 'USDT');

            return assetOnRightSideOfOrderPair;
        },
        buyTotal() {
            const { buy_quantity, asset_price } = this;
            return buy_quantity * asset_price;
        },
        sellTotal() {
            const { sell_quantity, asset_price } = this;
            return sell_quantity * asset_price;
        }
    },
    watch: {
        buy_quantity() {
            this.buyError = false;
        },
        sell_quantity() {
            this.sellError = false;
        },
        sliderBuyValue(newValue, oldValue) {
            const { autoTrade, asset, assetOnRightSideOfOrderPair, toDecimal, returnAssetBalanceOBJ, tradeCapitalLimit } = this;

            if (autoTrade === 'true') {
                if (returnAssetBalanceOBJ(asset)) {
                    const balance = returnAssetBalanceOBJ(asset).base.balanceinWallet;
                    const balanceInUsd = returnAssetBalanceOBJ(asset).balanceInDollars;

                    if (balanceInUsd > tradeCapitalLimit) {
                        const percQuant = toDecimal(parseInt(newValue));

                        this.buy_quantity = balance * percQuant;
                    }
                }
            } else {
                if (returnAssetBalanceOBJ(assetOnRightSideOfOrderPair)) {
                    const balance = returnAssetBalanceOBJ(assetOnRightSideOfOrderPair).base.balanceinWallet;
                    const balanceInUsd = returnAssetBalanceOBJ(assetOnRightSideOfOrderPair).balanceInDollars;

                    if (balanceInUsd > tradeCapitalLimit) {
                        const percQuant = toDecimal(parseInt(newValue));

                        this.buy_quantity = balance * percQuant;
                    }
                }
            }
        },
        sliderSellValue(newValue, oldValue) {
            const { asset, toDecimal, returnAssetBalanceOBJ, tradeCapitalLimit } = this;

            if (returnAssetBalanceOBJ(asset)) {
                const balance = returnAssetBalanceOBJ(asset).base.balanceinWallet;

                if (balance > tradeCapitalLimit) {
                    const percQuant = toDecimal(parseInt(newValue));

                    this.sell_quantity = balance * percQuant;
                }
            }
        }
    },
    methods: {
        ...mapMutations('order', ['SET_AUTOTRADESTRATEGIES']),
        ...mapActions('order', ['createOrder']),
        ...mapActions('order', ['createAutoTrade']),
        toDecimal(num) {
            if (num >= 1 && num <= 100) {
                return num / 100;
            }
        },
        showAutoTradeSettings() {
            const { wallettype, margin, orderType, asset, returnAssetBalanceOBJ, tradeCapitalLimit } = this;
            const {
                asset_price,
                buyTotal,
                buy_quantity,
                togglestrategiesState
            } = this;

            if (returnAssetBalanceOBJ(asset)) {
                if (returnAssetBalanceOBJ(asset).balanceInDollars) {
                    if (returnAssetBalanceOBJ(asset).balanceInDollars > tradeCapitalLimit) {

                        if (buy_quantity === null || (asset_price * buy_quantity) < tradeCapitalLimit) {
                            return this.errorMessage = `trades must start with at least $${tradeCapitalLimit} in your ${wallettype} wallet`;
                        }

                        const autoTradeDetails = {
                            wallettype,
                            orderType,
                            assetPriceAtCreation: asset_price,
                            quantityAtCreation: buy_quantity,
                            capital: buyTotal,
                            assetBalanceUSD: returnAssetBalanceOBJ(asset).balanceInDollars,
                            assetBalance: returnAssetBalanceOBJ(asset).base.balanceinWallet,
                            assetId: asset._id
                        }

                        if (wallettype === 'margin') {
                            autoTradeDetails.margin = margin
                        }


                        this.autoTradeDetails = autoTradeDetails
                        togglestrategiesState();

                    } else {
                        return this.errorMessage = `you must have more than $${tradeCapitalLimit} available in your ${wallettype} wallet to autotrade`
                    }
                } else {
                    return this.errorMessage = `you must have more than $${tradeCapitalLimit} available in your ${wallettype} wallet to autotrade`;
                }


            } else {
                return this.errorMessage = `you must have more than $${tradeCapitalLimit} available in your ${wallettype} wallet to autotrade`;
            }
        },
        openAutoTrade() {
            const { createAutoTrade, autoTradeDetails, autotradestrategies } = this;
            this.loading = true;
            createAutoTrade({...autoTradeDetails, ...{ autotradestrategies }})
                .then(() => {
                    this.strategiesOpen = false;
                    this.loading = false;
                    this.successMessage = 'auto trade opened';

                })
                .catch(err => {
                    alert('error')
                })
        },
        togglestrategiesState() {
            this.strategiesOpen ? this.strategiesOpen = false : this.strategiesOpen = true;
        },
        closeError() {
            this.errorMessage = null
        },
        closeSuccess() {
            this.successMessage = null;
        },

        checkInputs(side) {
            const {
                triggerpricebuy,
                buy_quantity,
                asset_price_buy,
                optimalPrice,

            } = this;
        },
        toggleorderDetailsOpen(side) {
            if (side === 'buy') {
                this.triggerbuyAssetMarket(side);
            }

            if (side === 'sell') {
                this.triggersellAssetMarket(side)
            }

            //this.checkInputs();
        },
        getRandomMillisecs() {
            return Math.floor(Math.random() * 114000) + 6000;
        },
        toggleSliderPercentage(percentage, assetBalance, side) {
            const { asset } = this;
            const amount = (assetBalance * percentage);
            const quantity = amount / asset.price;

            return {
                amount,
                quantity
            }
        }
    }
}