<template>
    <div>
        <div class="fiatandspot">
            <div class="content">
                <HeaderBox />

                <div class="content__body">
                    <div class="container">
                        <SideNav />

                        <div class="layout-stretch">
                            <PageIndicator :page_name="'Fiat and Spot'" :showdepositbtn="true" :showwithdrawbtn="true"/>

                            <div class="fiatandspot__main layout-padding">
                                <div class="balancearea row">

                                    <div class="balancearea__section main">
                                        <div class="balancearea__primarylabel">
                                            <h3 class="balancearea__primarylabel--h3">Estimated Balance</h3>
                                            <span class="balancearea__primarylabel--eyesvg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="eye css-16vuvx8"><path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.555 6.31L1 12l5.555 5.69a7.572 7.572 0 0010.89 0L23 12l-5.555-5.69a7.572 7.572 0 00-10.89 0zM17 12a5 5 0 11-10 0 5 5 0 0110 0z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>

                                        <div class="balancearea__primarybalance">
                                            <p class="balancearea__primarybalance--btcvalue">{{ balanceInBTC ? balanceInBTC : 0 }} BTC</p>
                                            <span class="balancearea__primarybalance--equals">≈</span>
                                            <p class="balancearea__primarybalance--usdvalue">${{ balance ? balance : 0 }}</p>
                                        </div>
                                    </div>

                                    <div class="balancearea__section secondary">
                                        <div class="balancearea__secondarybalance">
                                            <h3 class="balancearea__secondarybalance--h3">Spot balance</h3>
                                            <div class="balancearea__secondarybalance--btcvalue">0.00000000 BTC</div>
                                            <div class="balancearea__secondarybalance--usdvalue">≈ $0.00000000</div>
                                        </div>
                                    </div>

                                    <div class="balancearea__section secondary">
                                        <div class="balancearea__secondarybalance">
                                            <h3 class="balancearea__secondarybalance--h3">Fiat balance</h3>
                                            <div class="balancearea__secondarybalance--btcvalue">0.00000000 BTC</div>
                                            <div class="balancearea__secondarybalance--usdvalue">≈ $0.00000000</div>
                                        </div>
                                    </div>

                                </div>

                                <AssetSearch />

                                <div class="assetlistheader">
                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Asset</label>
                                        <div class="assetlistheader__item--arrows">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1c0zcq0"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Asset balance</label>
                                        <div class="assetlistheader__item--arrows">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1c0zcq0"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Balance in USD</label>
                                        <div class="assetlistheader__item--arrows">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1c0zcq0"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Balance in BTC</label>
                                        <div class="assetlistheader__item--arrows">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1c0zcq0"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Available</label>
                                        <div class="assetlistheader__item--arrows">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1c0zcq0"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="assetlistheader__item fiatandspot">
                                        <label class="assetlistheader__item--label">Action</label>
                                    </div>
                                </div>

                                <div class="assetlist">
                                    <div class="assetlist__item fiatandspot" 
                                        v-for="cryptoasset in listByPages[currentPage-1]">

                                        <div class="assetlist__area fiatandspot">
                                            <figure class="assetlist__area--assetlogo">
                                                <img :src="returnCryptoLogo(cryptoasset.coin)"/>
                                            </figure>
                                            <div class="assetlist__area--asset">
                                                <span class="assetlist__area--assetsymbol">{{ cryptoasset.coin }}</span>
                                                <span class="assetlist__area--assetname">{{ limitTextLength(cryptoasset.name, 9) }}</span>
                                            </div>
                                        </div>

                                        <div class="assetlist__area fiatandspot number-value">
                                            <p>
                                                {{
                                                    returnAssetBalanceOBJ(cryptoasset) ? 
                                                    limitTextLength(`${returnAssetBalanceOBJ(cryptoasset).base.balanceinWallet}`, 10) :
                                                     `0.00000000`
                                                }}
                                            </p>
                                        </div>

                                        <div class="assetlist__area fiatandspot number-value">
                                            <p>
                                                {{
                                                    returnAssetBalanceOBJ(cryptoasset) ? 
                                                    limitTextLength(`${returnAssetBalanceOBJ(cryptoasset).balanceInDollars}`, 10) :
                                                     `0.00000000`
                                                }}
                                            </p>
                                        </div>

                                        <div class="assetlist__area fiatandspot number-value">
                                            <p>
                                                {{
                                                    returnAssetBalanceOBJ(cryptoasset) ? 
                                                    limitTextLength(`${returnAssetBalanceOBJ(cryptoasset).balanceInBTC}`, 10) :
                                                     `0.00000000`
                                                }}
                                            </p>
                                        </div>

                                        <div class="assetlist__area fiatandspot number-value">
                                            <p>
                                                {{
                                                    returnAssetBalanceOBJ(cryptoasset) ? 
                                                    limitTextLength(`${returnAssetBalanceOBJ(cryptoasset).base.balanceinWallet}`, 10) :
                                                     `0.00000000`
                                                }}
                                            </p>
                                        </div>


                                        <div class="assetlist__area fiatandspot assetlist__areabtns">
                                            <!--<button class="btn color-primary">Buy</button>-->
                                            <!--<button class="btn color-primary">Sell</button>-->
                                            <!--<button class="btn color-primary">Deposit</button>-->
                                            <button class="btn color-primary" @click.stop="$router.push('/swap')">Swap/Convert</button>
                                            <button class="btn color-primary" @click.stop="navigateToTradePage(`trade?autotrader=false&wallet=spot`, cryptoasset._id)">Trade</button>
                                            <button class="btn color-primary" @click.stop="navigateToTradePage(`trade?autotrader=true&wallet=spot`, cryptoasset._id)">AlgoTrade</button>
                                            <!--<button class="btn color-primary">Earn</button>-->
                                        </div>
                                    </div>
                                </div>

                                <div class="assetlist__navigation">
                                    <span @click="reduPage" class="assetlist__navigation--prev" :class="{
                                        visible: currentPage > 1,
                                        notvisible: currentPage === 1
                                    }">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-3kwgah"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z" fill="currentColor"></path></svg>
                                    </span>
                                    <span v-if="currentPage >= 5" @click="setCurrentPage(1)">1</span>
                                    <span v-if="currentPage >= 5">...</span>
                                    <span 
                                        v-for="(arrItem, index) in listByPages" 
                                        @click="setCurrentPage((index + 1))"
                                        :class="{ 
                                            current: currentPage === (index + 1),
                                            notvisible: (index + 1) > (currentPage + 4) || (index + 1) < (currentPage - 3)
                                        }">{{ index + 1 }}</span>
                                    <span v-if="listByPages.length >= 6 && currentPage <= listByPages.length - 5">...</span>
                                    <span 
                                        v-if="listByPages.length >= 6 && currentPage <= listByPages.length - 5"
                                        @click="setCurrentPage(listByPages.length)">{{ listByPages.length }}</span>
                                    <span @click="incrPage" class="assetlist__navigation--next" :class="{
                                        visible: currentPage >= 1,
                                        notvisible: currentPage === listByPages.length
                                    }">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-3kwgah"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cryptoassetsMixin from '@/mixins/cryptoassets';
import generalutilities from '@/mixins/generalutilities';
import listMixin from '@/mixins/list';
import cryptologosMixin from '@/mixins/cryptologos';

export default {
    data() {
        return {
            wallettype: "fiat/spot"
        }
    },
    mixins: [cryptoassetsMixin, generalutilities, listMixin, cryptologosMixin]
}
</script>