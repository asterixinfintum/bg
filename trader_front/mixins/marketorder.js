export default {
    methods: {
        marketorder({ side }) {
            {
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
            }
        }
    }
}