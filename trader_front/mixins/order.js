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
        'margin',
        'currentpair'
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
            assets: state => state.list.assets,
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
            const { assets } = this;

            const priceOfUsdt = assets.find(asset => asset.coin === 'USDT');
            return priceOfUsdt.price;
        },
        assetOnRightSideOfOrderPair() {
            const { assets, currentpair } = this;

            if (assets.length) {
                const assetOnRightSideOfOrderPair = assets.filter(asset => asset.coin.toLowerCase() === currentpair.right.toLowerCase())[0];
                return assetOnRightSideOfOrderPair;
            }

            return {}
        },
        buyTotal() {
            const { buy_quantity, asset_price } = this;
            return buy_quantity * asset_price;
        },
        sellTotal() {
            const { sell_quantity, asset_price } = this;
            return sell_quantity * asset_price;
        },
        buyTotalLimit() {
            const { buy_quantity, asset_price_buy } = this;
            return buy_quantity * asset_price_buy;
        },
        sellTotalLimit() {
            const { sell_quantity, asset_price_sell } = this;
            return sell_quantity * asset_price_sell;
        },
        autotradingtotal() {
            const { asset_price, buy_quantity } = this;
            return asset_price * buy_quantity;
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
            const { autoTrade, asset, assetOnRightSideOfOrderPair, toDecimal, assetblc, tradeCapitalLimit } = this;

            if (autoTrade === 'true') {
                if (assetblc(asset)) {
                    const balance = assetblc(asset).blc;
                    const balanceInUsd = assetblc(asset).usdblc;

                    if (balanceInUsd > tradeCapitalLimit) {
                        const percQuant = toDecimal(parseInt(newValue));

                        this.buy_quantity = balance * percQuant;
                    }
                }
            } else {
                if (assetblc(assetOnRightSideOfOrderPair)) {
                    const balance = assetblc(assetOnRightSideOfOrderPair).blc;
                    const balanceInUsd = assetblc(assetOnRightSideOfOrderPair).usdblc;

                    if (balanceInUsd > tradeCapitalLimit) {
                        const percQuant = toDecimal(parseInt(newValue));

                        this.buy_quantity = balance * percQuant;
                    }
                }
            }
        },
        sliderSellValue(newValue, oldValue) {
            const { asset, toDecimal, assetblc, tradeCapitalLimit } = this;

            if (assetblc(asset)) {
                const balance = assetblc(asset).blc;
                const balanceInUsd = assetblc(asset).usdblc;

                if (balanceInUsd > tradeCapitalLimit) {
                    const percQuant = toDecimal(parseInt(newValue));

                    this.sell_quantity = balance * percQuant;
                }
            }
        }
    },
    methods: {
        ...mapMutations('order', ['SET_AUTOTRADESTRATEGIES']),
        ...mapActions('order', [
            'createMktOrder',
            'createLmtOrder',
            'createStpLmtOrder',
            'createAutoTrade'
        ]),
        ...mapActions('wallet', ['getwallets']),
        ...mapActions('order', ['getorders', 'getautotrades', 'gettrades']),
        toDecimal(num) {
            if (num >= 1 && num <= 100) {
                return num / 100;
            }
        },
        refreshpage() {
            this.getorders();
            this.gettrades();
            this.getautotrades();

            this.getwallets();
            this.$forceUpdate()
        },
        assetblc(asst) {
            const { wallets, wallettype } = this;

            if (wallets.length) {
                const wallet = wallets.find(wallet => wallet.walletType === wallettype);
                const walletblcs = wallet.blcs;

                const assetblc = walletblcs.filter(walletblc => {
                    if (asst._id === walletblc.assetid) {
                        return {
                            blc: walletblc.blc.balance,
                            usdblc: (parseFloat(walletblc.blc.balance) * parseFloat(walletblc.asset.price))
                        }
                    }
                });

                if (assetblc.length) {
                    const blcdtls = {
                        blc: assetblc[0].blc.balance,
                        usdblc: (parseFloat(assetblc[0].blc.balance) * parseFloat(assetblc[0].asset.price))
                    }

                    return blcdtls;
                } else {
                    return {
                        blc: '0',
                        usdblc: '0'
                    }
                }
            } else {
                return {
                    blc: '0',
                    usdblc: '0'
                }
            }
        },
        showautotdset() {
            const {
                togglestrategiesState,
                asset,
                currentpair,
                buy_quantity,
                assetblc
            } = this;

            if (currentpair) {
                if (buy_quantity) {
                    if (assetblc(asset)) {
                        if (assetblc(asset).usdblc > (buy_quantity * asset.price)) {
                            togglestrategiesState();
                        } else {
                            this.errorMessage = `Not enough ${asset.coin} to open trade`;
                        }
                    } else {
                        this.errorMessage = `Not enough ${asset.coin} to open trade`;
                    }
                } else {
                    this.errorMessage = 'Specify an amount to fund this trade';
                }
            }
        },
        automatictrade() {
            const {
                buy_quantity,
                currentpair,
                wallettype,
                wallets,
                asset,
                assetOnRightSideOfOrderPair,
                autotradestrategies,
                buyTotal,
                balances,
                createAutoTrade
            } = this;

            const tradingPair = `${asset.symbol}/${assetOnRightSideOfOrderPair.symbol}`;
            const assetId = asset._id;
            const assetType = asset.assetType;

            if (currentpair) {
                if (buy_quantity) {
                    const quantity = parseFloat(buy_quantity);
                    const initialTotal = buyTotal;
                    const wallet = wallets.find(wallet => wallet.walletType === wallettype);
                    const { assetblcs } = wallet;
                    const assetblc = assetblcs.find(assetblc => assetblc.assetid === assetId);

                    if (assetblc) {
                        const orderTemp = {
                            tradingPair,
                            assetId,
                            assetType,
                            wallet: wallet._id,
                            quantity,
                            initialTotal,
                            walletassetid: assetblc._id,
                            autotradestrategies
                        };

                        this.togglestrategiesState();
                        createAutoTrade(orderTemp)
                            .then(() => {
                                this.loading = false;
                                this.successMessage = 'Automatic trade executed';
                                this.refreshpage();
                            })
                            .catch(error => {
                                this.loading = false;
                                this.errorMessage = 'An error occured no funds were used'
                            })
                    }
                } else {
                    this.errorMessage = 'Specify an amount to fund this trade';
                }
            }
        },
        stoplimitorder({ side }) {
            const {
                buy_quantity,
                sell_quantity,
                buyTotalLimit,
                sellTotalLimit,
                asset,
                assetOnRightSideOfOrderPair,
                wallettype,
                currentpair,
                triggerpricebuy,
                triggerpricesell,
                asset_price_buy,
                asset_price_sell,
                assetblc,
                createStpLmtOrder
            } = this;

            const tradingPair = `${asset.symbol}/${assetOnRightSideOfOrderPair.symbol}`;
            const assetId = asset._id;
            const assetType = asset.assetType;
            const type = 'limit';
            const wallet = wallettype;
            const oppstasstId = assetOnRightSideOfOrderPair._id;
            let orderAmount;
            let price;
            let triggerPrice;

            if (currentpair) {
                const orderTemp = {
                    tradingPair,
                    assetId,
                    oppstasstId,
                    assetType,
                    type,
                    side,
                    wallet
                };

                if (side === 'buy') {
                    const quantity = parseFloat(buy_quantity);
                    triggerPrice = parseFloat(triggerpricebuy);
                    orderAmount = parseFloat(buyTotalLimit);
                    price = parseFloat(asset_price_buy);

                    if (quantity && triggerPrice) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            triggerPrice,
                            orderAmount,
                            price
                        }

                        if (assetblc(assetOnRightSideOfOrderPair)) {
                            if (assetblc(assetOnRightSideOfOrderPair).usdblc) {
                                if (assetblc(assetOnRightSideOfOrderPair).usdblc > orderAmount) {
                                    createStpLmtOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Buy stop limit order created';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        });
                                } else {
                                    this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a buy quantity and a trigger price for this order'
                    }
                }

                if (side === 'sell') {
                    const quantity = parseFloat(sell_quantity);
                    triggerPrice = parseFloat(triggerpricesell);
                    orderAmount = parseFloat(sellTotalLimit);
                    price = parseFloat(asset_price_sell);

                    if (quantity && triggerPrice) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            triggerPrice,
                            orderAmount,
                            price
                        }

                        if (assetblc(asset)) {
                            if (assetblc(asset).usdblc) {
                                if (assetblc(asset).usdblc > orderAmount) {
                                    createStpLmtOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Sell stop limit order created';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        });
                                } else {
                                    this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a buy quantity and a trigger price for this order'
                    }
                }
            }
        },
        limitorder({ side }) {
            const {
                buy_quantity,
                sell_quantity,
                buyTotalLimit,
                sellTotalLimit,
                asset,
                assetOnRightSideOfOrderPair,
                wallettype,
                currentpair,
                asset_price_buy,
                asset_price_sell,
                assetblc,
                createLmtOrder
            } = this;

            const tradingPair = `${asset.symbol}/${assetOnRightSideOfOrderPair.symbol}`;
            const assetId = asset._id;
            const assetType = asset.assetType;
            const type = 'limit';
            const wallet = wallettype;
            const oppstasstId = assetOnRightSideOfOrderPair._id;
            let price;
            let orderAmount;

            if (currentpair) {
                const orderTemp = {
                    tradingPair,
                    assetId,
                    oppstasstId,
                    assetType,
                    type,
                    side,
                    wallet
                };

                if (side === 'buy') {
                    const quantity = parseFloat(buy_quantity);
                    orderAmount = parseFloat(buyTotalLimit);
                    price = parseFloat(asset_price_buy);

                    if (quantity) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            orderAmount,
                            price
                        }

                        if (assetblc(assetOnRightSideOfOrderPair)) {
                            if (assetblc(assetOnRightSideOfOrderPair).usdblc) {
                                if (assetblc(assetOnRightSideOfOrderPair).usdblc > orderAmount) {
                                    console.log(order);
                                    createLmtOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Buy limit order created';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        });
                                } else {
                                    this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a buy quantity'
                    }

                }

                if (side === 'sell') {
                    const quantity = parseFloat(sell_quantity);
                    orderAmount = parseFloat(sellTotalLimit);
                    price = parseFloat(asset_price_sell);

                    if (quantity) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            orderAmount,
                            price
                        }

                        if (assetblc(asset)) {
                            if (assetblc(asset).usdblc) {
                                if (assetblc(asset).usdblc > orderAmount) {
                                    createLmtOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Sell limit order created';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        });
                                } else {
                                    this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a sell quantity'
                    }
                }
            }
        },
        marketorder({ side }) {
            const {
                asset_price,
                buy_quantity,
                sell_quantity,
                buyTotal,
                sellTotal,
                asset,
                assetOnRightSideOfOrderPair,
                wallettype,
                currentpair,
                wallets,
                assetblc,
                createMktOrder
            } = this;

            const tradingPair = `${asset.symbol}/${assetOnRightSideOfOrderPair.symbol}`;
            const assetId = asset._id;
            const oppstasstId = assetOnRightSideOfOrderPair._id;
            const assetType = asset.assetType;
            const type = 'market';
            const price = parseFloat(asset_price);
            const wllt = wallets.find(wallet => wallet.walletType === wallettype);
            const wallet = wllt._id;
            let orderAmount;

            if (currentpair) {
                const orderTemp = {
                    tradingPair,
                    assetId,
                    oppstasstId,
                    assetType,
                    type,
                    side,
                    price,
                    wallet
                };

                if (side === 'buy') {
                    const quantity = parseFloat(buy_quantity);
                    orderAmount = parseFloat(buyTotal)

                    if (quantity) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            orderAmount,
                        }

                        if (assetblc(assetOnRightSideOfOrderPair)) {
                            if (assetblc(assetOnRightSideOfOrderPair).usdblc) {
                                if (assetblc(assetOnRightSideOfOrderPair).usdblc > orderAmount) {
                                    createMktOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Buy market order executed';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        })
                                } else {
                                    this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${assetOnRightSideOfOrderPair.coin} to buy ${asset.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a buy quantity'
                    }

                }

                if (side === 'sell') {
                    const quantity = parseFloat(sell_quantity);
                    orderAmount = parseFloat(sellTotal)

                    if (quantity) {
                        const order = {
                            ...orderTemp,
                            quantity,
                            orderAmount,
                        }

                        if (assetblc(asset)) {
                            if (assetblc(asset).usdblc) {
                                if (assetblc(asset).usdblc > orderAmount) {
                                    createMktOrder(order)
                                        .then(() => {
                                            this.successMessage = 'Sell market order executed';
                                            this.refreshpage();
                                        }).catch(() => {
                                            this.errorMessage = 'There was an error no funds lost pls try again';
                                        });
                                } else {
                                    this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                                }
                            } else {
                                this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                            }
                        } else {
                            this.errorMessage = `Not enough ${asset.coin} to sell for ${assetOnRightSideOfOrderPair.coin}`;
                        }
                    } else {
                        this.errorMessage = 'Specify a sell quantity'
                    }
                }
            }
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