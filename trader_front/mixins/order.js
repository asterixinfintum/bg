import { mapActions, mapState, mapMutations } from 'vuex';

import tradeMixin from '@/mixins/trade';
import generalutilities from '@/mixins/generalutilities';

export default {
    props: [
        'asset',
        'orderType',
        'wallettype',
        'fundaccount_popup_toggle',
        'openFundAccountPopup',
        'margin'
    ],
    mixins: [tradeMixin, generalutilities],
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

            strategiesOpen: true,
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
        walletTradingFrom() {
            return this.$route.query.wallet;
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
        },
    },
    watch: {
        buy_quantity() {
            this.buyError = false;
        },
        sell_quantity() {
            this.sellError = false;
        },
        sliderBuyValue(newValue, oldValue) {
            const {
                toggleSliderPercentage,
                assetOnRightSideOfOrderPair,
                returnAssetBalanceOBJ,
                asset_price_buy
            } = this;

            const assetOnRightSideOfOrderPairBalance = returnAssetBalanceOBJ(assetOnRightSideOfOrderPair) ? returnAssetBalanceOBJ(assetOnRightSideOfOrderPair).balanceInDollars : 0;
            const percentage = (newValue / 100);

            if (assetOnRightSideOfOrderPairBalance >= (asset_price_buy * 2)) {
                const sliderResult = toggleSliderPercentage(percentage, assetOnRightSideOfOrderPairBalance, 'buy');

                this.buy_quantity = sliderResult.quantity;
                this.buyTotal - sliderResult.amount;
            }
        },
        sliderSellValue(newValue, oldValue) {
            const {
                toggleSliderPercentage,
                asset,
                returnAssetBalanceOBJ,
                openFundAccountPopup,
                asset_price_sell
            } = this;

            const assetOnLeftSideOfOrderPairBalance = returnAssetBalanceOBJ(asset) ? returnAssetBalanceOBJ(asset).balanceInDollars : 0;
            const percentage = (newValue / 100);

            if (assetOnLeftSideOfOrderPairBalance === 0 || assetOnLeftSideOfOrderPairBalance < (asset_price_sell * 2)) {
                return openFundAccountPopup();
            }

            if (assetOnLeftSideOfOrderPairBalance >= (asset_price_sell * 2)) {
                const sliderResult = toggleSliderPercentage(percentage, assetOnLeftSideOfOrderPairBalance, 'sell');

                this.sell_quantity = sliderResult.quantity;
                this.sellTotal - sliderResult.amount;
            }
        }
    },
    methods: {
        ...mapMutations('order', ['SET_AUTOTRADESTRATEGIES']),
        ...mapActions('order', ['createOrder']),
        openAutoTradeSettings(side) {
            const { 
                asset,
                assetOnRightSideOfOrderPair,
                orderType, 
                buy_quantity, 
                asset_price_buy, 
                buyTotal 
            } = this;

            if (buy_quantity === null || buyTotal === 0) {
                this.buyError = true
            } else {
                if (orderType === 'market') {
                    const order = {
                        tradingPair: `${asset.coin}/${assetOnRightSideOfOrderPair.coin}`,
                        price: asset_price_buy,
                        quantity: buy_quantity,
                        side,
                        total: buyTotal,
                        autoTrade: true,
                        type: orderType
                    }
                }
            }
        },




        toggleorderDetailsOpen(side) {
            if (side === 'buy') {
                this.triggerbuyAssetMarket(side);
            }

            if (side === 'sell') {
                this.triggersellAssetMarket(side)
            }

            this.checkInputs();
        },













        togglestrategiesState() {
            this.strategiesOpen ? this.strategiesOpen = false : this.strategiesOpen = true;
        },

        checkInputs() {
            if (this.order.quantity) {
                return this.orderDetailsOpen ? this.orderDetailsOpen = false : this.orderDetailsOpen = true;
            } else {
                alert('incomplete details')
            }
        },
        getRandomMillisecs() {
            return Math.floor(Math.random() * 114000) + 6000;
        },
        triggerbuyAssetMarket(side) {
            const { buy_quantity, asset, assetOnRightSideOfOrderPair, orderType, asset_price_buy, triggerpricebuy, walletTradingFrom, getRandomMillisecs } = this;

            const order = {
                tradingPair: `${asset.coin}/${assetOnRightSideOfOrderPair.coin}`,
                type: orderType,
                side,
                quantity: buy_quantity,
                price: asset.price,
                limitPrice: orderType === 'limit' ? asset_price_buy : false,
                triggerPrice: orderType === 'stop limit' ? triggerpricebuy : false,
                executeIn: getRandomMillisecs(),
                wallet: walletTradingFrom
            };

            console.log(this.$route)

            this.order = order;
        },
        triggersellAssetMarket(side) {
            const { sell_quantity, asset, assetOnRightSideOfOrderPair, orderType, asset_price_sell, triggerpricesell, walletTradingFrom, getRandomMillisecs } = this;

            const order = {
                tradingPair: `${asset.coin}/${assetOnRightSideOfOrderPair.coin}`,
                type: orderType,
                side,
                quantity: sell_quantity,
                price: asset.price,
                limitPrice: orderType === 'limit' ? asset_price_sell : false,
                triggerPrice: orderType === 'stop limit' ? triggerpricesell : false,
                executeIn: getRandomMillisecs(),
                wallet: walletTradingFrom
            };

            this.order = order;
        },
        createMarketOrder() {
            const { createOrder, order } = this;
            this.submittingOrder = true;
            createOrder(order)
                .then(() => {
                    this.submittingOrder = false;
                    window.location.reload();
                })
                .catch(err => {
                    console.log(error)
                })
        },
        triggerSellOrder() {
            const { sell_quantity, asset, reserveCurrency, orderType } = this;

            const order = {
                tradingPair: `${asset.coin}/${reserveCurrency}`,
                type: orderType,
                side: 'sell',
                quantity: sell_quantity,
                price: asset.price
            }

            if (!sell_quantity) {
                this.sellError = true;
                return;
            }

            if (sell_quantity) {
                console.log(order)
            }
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