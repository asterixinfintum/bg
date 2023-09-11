<template>
    <div class="spottradearea__inputsections">


        <!--<div class="popup" v-if="orderDetailsOpen">
            <div class="popup__body transactionstyle__body">
                <div class="transactionstyle__subject">
                    <div class="transactionstyle__subject--name">
                        <h3>Order Details</h3>
                    </div>
                    <div class="transactionstyle__subject--closebtn" @click="toggleorderDetailsOpen">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true">
                            <path fill="currentColor"
                                d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div class="transactionstyle__container">
                    <div class="previewtrade__content">
                        <div class="previewtrade__contentarea">

                            <div class="previewtrade__contentitem">
                                <div class="previewtrade__contentitemleft">Trading Pair</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        {{ order.tradingPair }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem">
                                <div class="previewtrade__contentitemleft">Order type</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        {{ order.type }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem">
                                <div class="previewtrade__contentitemleft">Side</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        {{ order.side }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem">
                                <div class="previewtrade__contentitemleft">Quantity</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        {{ order.quantity }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem">
                                <div class="previewtrade__contentitemleft">Price</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        {{ order.type === 'market' ? 'Optimal price' : `$${order.price}` }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem" v-if="orderType === 'limit' || orderType === 'stop limit'">
                                <div class="previewtrade__contentitemleft">Limit</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        ${{ side === 'buy' ? asset_price_buy : asset_price_sell }}
                                    </div>
                                </div>
                            </div>

                            <div class="previewtrade__contentitem" v-if="orderType === 'stop limit'">
                                <div class="previewtrade__contentitemleft">Trigger price</div>

                                <div class="previewtrade__contentitemright">
                                    <div class="previewtrade__contentitemright--top">
                                        ${{ side === 'buy' ? triggerpricebuy : triggerpricesell }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="transactionstyle__btn">
                    <button class="btn colored-btn padded-btn dim" v-if="submittingOrder">
                        <span class="loader-button"></span>
                    </button>
                    <button class="btn colored-btn padded-btn" v-if="!submittingOrder" @click="createMarketOrder">Complete order</button>
                </div>
            </div>
        </div>-->

        <div v-if="strategiesOpen">
            <AutoTradeSettings />
        </div>

        <div class="spottradearea__inputsection">
            <div class="spottradearea__balance">
                <span class="spottradearea__balance--label">Avbl</span><span class="spottradearea__balance--value">{{ returnAssetBalanceOBJ(assetOnRightSideOfOrderPair) ? limitTextLength(`${returnAssetBalanceOBJ(assetOnRightSideOfOrderPair).base.balanceinWallet}`, 10) : 0.00 }} {{ assetOnRightSideOfOrderPair.coin }}</span>
                <span class="spottradearea__balance--value opacity-dim">{{ returnAssetBalanceOBJ(assetOnRightSideOfOrderPair) ? limitTextLength(`($${returnAssetBalanceOBJ(assetOnRightSideOfOrderPair).balanceInDollars})`, 10) : `$0.00` }}</span>
                <span class="spottradearea__balance--svg" @click="fundaccount_popup_toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" cursor="pointer"
                        class="css-12oo3on">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z"
                            fill=""></path>
                    </svg>
                </span>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'stop limit'">
                <input class="spottradearea__inputsection--input" placeholder="Trigger price" type="number"
                    v-model="triggerpricebuy" />
                <span class="spottradearea__inputsection--placeholder">Trigger price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'stop limit'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="number" v-model="asset_price_buy" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'limit'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="number" v-model="asset_price_buy" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea market-optimal" v-if="orderType === 'market'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="text" v-model="optimalPrice" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" :class="{
                error: buyError
            }">
                <input class="spottradearea__inputsection--input" placeholder="Amount" type="number"
                    v-model="buy_quantity" />
                <span class="spottradearea__inputsection--placeholder">Quantity</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">{{ asset.coin }}</span>
                </div>
            </div>

            <div class="spottradearea__sliderarea">

                <div class="spottradearea__sliderbody">
                    <div class="spottradearea__slidercontainer">
                        <div class="spottradearea__slider">
                            <div class="spottradearea__slidertrack buy" :style="{ width: buyTrackWidth + '%' }"></div>
                            <div class="spottradearea__sliderthumb" :style="{ left: buyThumbPosition + '%' }"></div>
                        </div>
                        <input type="range" min="0" max="100" v-model="sliderBuyValue" class="spottradearea__sliderinput">
                    </div>
                    <p class="spottradearea__slidervalue buy">{{ sliderBuyValue }}%</p>
                </div>

            </div>

            <div class="spottradearea__inputsection--inputarea">
                <input class="spottradearea__inputsection--input" placeholder="Amount" type="number" v-model="buyTotal" />
                <span class="spottradearea__inputsection--placeholder">Total</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType === 'market' && autoTrade === 'true'">
                <button class="btn" @click="openAutoTradeSettings('buy')">Open Autotrade for {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType !== 'market' && autoTrade === 'true'">
                <button class="btn" @click="openAutoTradeSettings('buy')">Open Autotrade for {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType === 'market' && autoTrade !== 'true'">
                <button class="btn" @click="toggleorderDetailsOpen('buy')">Buy {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType !== 'market' && autoTrade !== 'true'">
                <button class="btn" @click="toggleorderDetailsOpen('buy')">Buy {{ asset.coin }}</button>
            </div>
        </div>

        <div class="spottradearea__inputsection">
            <div class="spottradearea__balance">
                <span class="spottradearea__balance--label">Avbl</span>
                <span class="spottradearea__balance--value">{{ returnAssetBalanceOBJ(asset) ? limitTextLength(`${returnAssetBalanceOBJ(asset).base.balanceinWallet}`, 10) : 0.00 }} {{ asset.coin }}</span>
                <span class="spottradearea__balance--value opacity-dim">{{ returnAssetBalanceOBJ(asset) ? limitTextLength(`($${returnAssetBalanceOBJ(asset).balanceInDollars})`, 10) : `$0.00` }}</span>
                <span class="spottradearea__balance--svg" @click="fundaccount_popup_toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" cursor="pointer"
                        class="css-12oo3on">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z"
                            fill=""></path>
                    </svg>
                </span>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'stop limit'">
                <input class="spottradearea__inputsection--input" placeholder="Trigger price" type="number"
                    v-model="triggerpricesell" />
                <span class="spottradearea__inputsection--placeholder">Trigger price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'stop limit'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="number" v-model="asset_price_sell" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" v-if="orderType === 'limit'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="number" v-model="asset_price_sell" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea market-optimal" v-if="orderType === 'market'">
                <input class="spottradearea__inputsection--input" placeholder="Price" type="text" v-model="optimalPrice" />
                <span class="spottradearea__inputsection--placeholder">Price</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__inputsection--inputarea" :class="{
                error: sellError
            }">
                <input class="spottradearea__inputsection--input" placeholder="Amount" type="number"
                    v-model="sell_quantity" />
                <span class="spottradearea__inputsection--placeholder">Quantity</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">{{ asset.coin }}</span>
                </div>
            </div>

            <div class="spottradearea__sliderarea">

                <div class="spottradearea__sliderbody">
                    <div class="spottradearea__slidercontainer">
                        <div class="spottradearea__slider">
                            <div class="spottradearea__slidertrack sell" :style="{ width: sellTrackWidth + '%' }"></div>
                            <div class="spottradearea__sliderthumb" :style="{ left: sellThumbPosition + '%' }"></div>
                        </div>
                        <input type="range" min="0" max="100" v-model="sliderSellValue"
                            class="spottradearea__sliderinput sell">
                    </div>
                    <p class="spottradearea__slidervalue sell">{{ sliderSellValue }}%</p>
                </div>

            </div>

            <div class="spottradearea__inputsection--inputarea">
                <input class="spottradearea__inputsection--input" placeholder="Amount" type="number" v-model="sellTotal" />
                <span class="spottradearea__inputsection--placeholder">Total</span>
                <div class="spottradearea__inputsection--labels">
                    <span class="spottradearea__inputsection--symbol">USDT</span>
                </div>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType === 'market' && autoTrade === 'true'">
                <button class="btn sell" @click="toggleorderDetailsOpen('sell')">Open Autotrade for {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType === 'market' && autoTrade !== 'true'">
                <button class="btn sell" @click="toggleorderDetailsOpen('sell')">Sell {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType !== 'market' && autoTrade === 'true'">
                <button class="btn sell" @click="toggleorderDetailsOpen('sell')">Open Autotrade for {{ asset.coin }}</button>
            </div>

            <div class="spottradearea__buybtn" v-if="orderType !== 'market' && autoTrade !== 'true'">
                <button class="btn sell" @click="toggleorderDetailsOpen('sell')">Sell {{ asset.coin }}</button>
            </div>

        </div>

    </div>
</template>

<script>
import orderMixin from '@/mixins/order';

export default {
    mixins: [orderMixin],
}

</script>