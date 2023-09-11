<template>
    <div>
        <div class="swap">
            <div class="content">
                <HeaderBox />

                <div class="content__body">
                    <div class="container">
                        <SideNav />

                        <div v-if="confirmTrade">
                            <PreviewTrade :contentObj="{
                                ownerId: client ? client._id : '',
                                currentAssetFrom: currentAssetFrom ? currentAssetFrom._id : '',
                                currentAssetTo: currentAssetTo ? currentAssetTo._id : '',
                                toCoin: currentAssetTo ? currentAssetTo.coin : '',
                                fromCoin: currentAssetFrom ? currentAssetFrom.coin : '',
                                transactionType,
                                fromInput,
                                toInput,
                                assetCategoryTo,
                                transactionFee,
                                walletCategory,
                                transactionTotal,
                                transactionDescription,
                                youPayUSD,
                                youGetUSD,
                                rate: currentAssetFrom && currentAssetTo ? compareAssetsPrices(currentAssetFrom.price, currentAssetTo.price) : ''
                            }" :toggleconfirmTrade="toggleconfirmTrade" />
                        </div>

                        <div class="popup" v-if="walletCategoriesOpen">
                            <div class="popup__body transactionstyle__body">
                                <div class="transactionstyle__subject">
                                    <div class="transactionstyle__subject--name">
                                        <h3>Select wallet to swap in</h3>
                                    </div>
                                    <div class="transactionstyle__subject--closebtn" @click="toggleWalletCat">
                                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"
                                            aria-hidden="true">
                                            <path fill="currentColor"
                                                d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                                <div class="transactionstyle__btnoptionsgrid">

                                    <div class="transactionstyle__btnoptionsgridsection" @click="selectWallet('fiat/spot')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-199zucj">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Fiat and Spot</div>
                                    </div>

                                    <div class="transactionstyle__btnoptionsgridsection" @click="selectWallet('margin')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-199zucj">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM20 4h-8l3.125 3.125L4.061 18.19l1.768 1.768L16.893 8.893 20 12V4zm0 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Margin</div>
                                    </div>

                                    <div class="transactionstyle__btnoptionsgridsection" @click="selectWallet('defi')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"
                                                    aria-hidden="true">
                                                    <g clip-path="url(#clip0_25_654)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M16.3467 13.8434C16.8135 13.6394 17.3574 13.8525 17.5614 14.3193C18.2584 15.9145 18.4299 17.69 18.0513 19.389C17.6726 21.0881 16.7633 22.6227 15.4549 23.7709C15.0894 24.0915 14.5379 24.0736 14.1941 23.7298L10.7254 20.2611C10.3651 19.9009 10.3651 19.3168 10.7254 18.9565C11.0857 18.5962 11.6698 18.5962 12.0301 18.9565L14.8461 21.7726C15.5352 20.9786 16.0198 20.0225 16.2504 18.9877C16.5439 17.6707 16.4109 16.2945 15.8707 15.0581C15.6667 14.5912 15.8798 14.0474 16.3467 13.8434Z"
                                                            fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M4.61097 5.94874C6.31005 5.57006 8.08553 5.74162 9.68066 6.43862C10.1475 6.64262 10.3606 7.18647 10.1566 7.65334C9.95263 8.1202 9.40878 8.3333 8.94192 8.1293C7.70551 7.58905 6.32931 7.45607 5.01234 7.74959C3.9775 7.98023 3.02138 8.46481 2.22744 9.15388L5.04351 11.9699C5.40378 12.3302 5.40378 12.9143 5.04351 13.2746C4.68324 13.6349 4.09914 13.6349 3.73887 13.2746L0.270202 9.80592C-0.0735815 9.46214 -0.0915507 8.91055 0.229129 8.54512C1.37731 7.23671 2.9119 6.32742 4.61097 5.94874Z"
                                                            fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M21.5071 0.0254028C21.8432 -0.0266898 22.1868 0.00158717 22.5099 0.107917C22.8329 0.214248 23.1261 0.395606 23.3656 0.637127C23.605 0.878648 23.7838 1.17346 23.8873 1.49741C23.9906 1.82071 24.016 2.16385 23.9614 2.49881C23.4101 5.96028 20.9815 13.801 10.9235 21.1056C10.5564 21.3722 10.0499 21.3323 9.72909 21.0114L9.64339 20.9257L8.57368 21.9955C8.50842 22.0607 8.43438 22.1152 8.35435 22.1577C7.97578 22.4578 7.50504 22.6233 7.01729 22.6233C6.44862 22.6233 5.90306 22.3983 5.49975 21.9974L5.49781 21.9955L2.00454 18.5022L2.0026 18.5003C1.60169 18.0969 1.37666 17.5514 1.37666 16.9827C1.37666 16.414 1.60169 15.8685 2.0026 15.4652L2.00454 15.4632L3.0927 14.3751L2.98856 14.2709C2.66872 13.9511 2.62795 13.4465 2.89227 13.0795C10.1777 2.96288 18.0853 0.589109 21.4985 0.0267867L21.5071 0.0254028ZM10.4722 19.1445C10.4308 19.0708 10.3791 19.0025 10.318 18.9419L5.05351 13.7143C5.02369 13.6847 4.99235 13.6575 4.95974 13.6328L4.85296 13.526C11.6712 4.40676 18.8482 2.33447 21.7927 1.84822C21.8398 1.84139 21.8878 1.84557 21.933 1.86045C21.9791 1.87564 22.021 1.90155 22.0552 1.93606C22.0894 1.97056 22.115 2.01268 22.1298 2.05895C22.1446 2.10523 22.1482 2.15436 22.1403 2.2023L22.1396 2.20662C21.6677 5.17316 19.5567 12.2986 10.4722 19.1445ZM4.39734 15.6797L3.31111 16.7659C3.31093 16.7661 3.3113 16.7657 3.31111 16.7659C3.25419 16.8235 3.22169 16.9017 3.22169 16.9827C3.22169 17.0637 3.25363 17.1414 3.31056 17.1989C3.31074 17.1991 3.31038 17.1988 3.31056 17.1989L6.8005 20.6889C6.80071 20.6891 6.80029 20.6887 6.8005 20.6889C6.85805 20.7458 6.93635 20.7783 7.01729 20.7783C7.09853 20.7783 7.17647 20.7462 7.23408 20.6889C7.28592 20.6374 7.34323 20.5926 7.40465 20.5552L8.33876 19.6211L4.39734 15.6797Z"
                                                            fill="currentColor"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Defi</div>
                                    </div>

                                    <div class="transactionstyle__btnoptionsgridsection" @click="selectWallet('bonus')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-199zucj">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm10.364 3.75H11.66v-7.5h5.203v1.7h-3.328v1.164h2.854v1.69h-2.854v1.246h3.328v1.7z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Earning</div>
                                    </div>

                                    <div class="transactionstyle__btnoptionsgridsection"
                                        @click="selectWallet('bot trading')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-199zucj">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M20.0002 9V4H15.0002L20.0002 9ZM4.00024 15V20H9.00024L4.00024 15ZM13.5387 13.5384C12.2804 14.7967 10.5589 15.3096 8.92307 15.0771C8.69052 13.4412 9.20343 11.7196 10.4618 10.4613C11.7201 9.20298 13.4415 8.69007 15.0774 8.92255C15.31 10.5585 14.7971 12.28 13.5387 13.5384ZM15.0774 8.92255C14.9174 7.79695 14.4045 6.71187 13.5387 5.84606C11.4145 3.72189 7.97057 3.72189 5.8464 5.84606C3.72223 7.97023 3.72223 11.4142 5.8464 13.5384C6.71226 14.4042 7.79741 14.9171 8.92307 15.0771C9.08307 16.2027 9.59598 17.2878 10.4618 18.1536C12.586 20.2778 16.0299 20.2778 18.1541 18.1536C20.2783 16.0294 20.2783 12.5855 18.1541 10.4613C17.2882 9.59543 16.2031 9.08252 15.0774 8.92255Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Bot Trading</div>
                                    </div>

                                    <div class="transactionstyle__btnoptionsgridsection"
                                        @click="selectWallet('tokenized stocks')">
                                        <div class="transactionstyle__btnoptionsgridsection--svg">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-1pj0ttb">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="transactionstyle__btnoptionsgridsection--text">Tokenized Stocks</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="popup" v-if="assetCategoriesOpen">
                            <div class="popup__body transactionstyle__body">
                                <div class="transactionstyle__subject">
                                    <div class="transactionstyle__subject--name">
                                        <h3>
                                            <span>Select asset to swap {{ swapDirection === 'from' ? 'from' : 'to' }}
                                                in</span>
                                            <span v-if="walletCategory === 'fiat/spot'">Spot Wallet</span>
                                            <span v-if="walletCategory === 'margin'">Margin Wallet</span>
                                            <span v-if="walletCategory === 'defi'">Defi Wallet</span>
                                            <span v-if="walletCategory === 'bonus'">Earning Wallet</span>
                                            <span v-if="walletCategory === 'tokenized stocks'">Tokenized Stocks
                                                Wallet</span>
                                            <span v-if="walletCategory === 'bot trading'">Bot Trading Wallet</span>
                                        </h3>
                                    </div>
                                    <div class="transactionstyle__subject--closebtn" @click="toggleCryptoCat">
                                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"
                                            aria-hidden="true">
                                            <path fill="currentColor"
                                                d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                                <div class="transactionstyle__selectassetcat">

                                    <div class="transactionstyle__selectassetcat--area"
                                        @click="setCurrentCategory('crypto')">
                                        <figure>
                                            <img src="https://assets.coincap.io/assets/icons/256/btc.png" />
                                        </figure>
                                        <span class="btn">
                                            <button class="btn">Crypto</button>
                                        </span>
                                    </div>

                                    <div class="transactionstyle__selectassetcat--area"
                                        @click="setCurrentCategory('inhousefiat')">
                                        <figure>
                                            <img src="@/assets/imgs/dollar-symbol.png" />
                                        </figure>
                                        <span class="btn">
                                            <button class="btn">Fiat</button>
                                        </span>
                                    </div>

                                    <div class="transactionstyle__selectassetcat--area"
                                        @click="setCurrentCategory('inhousetokenizedstocks')">
                                        <figure>
                                            <img src="https://assets.coincap.io/assets/icons/rune@2x.png" />
                                        </figure>
                                        <span class="btn">
                                            <button class="btn">Tokenized Stocks</button>
                                        </span>
                                    </div>

                                    <div class="transactionstyle__selectassetcat--area"
                                        @click="setCurrentCategory('inhousestocks')">
                                        <figure>
                                            <img src="https://assets.coincap.io/assets/icons/rune@2x.png" />
                                        </figure>
                                        <span class="btn">
                                            <button class="btn">Stocks</button>
                                        </span>
                                    </div>

                                </div>

                                <div class="transactionstyle__search">
                                    <div class="transactionstyle__search--body">
                                        <span>
                                            <svg focusable="false" width="1em" height="1em" fill="currentColor"
                                                aria-hidden="true" viewBox="0 0 16 16" data-icon="SearchOutlined"
                                                class="sc-aXZVg ktFCMi mx-icon iconfont iconsearch">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.93186 10.8786C9.02879 11.5806 7.89393 11.9987 6.66146 11.9987C3.71594 11.9987 1.32812 9.6109 1.32812 6.66536C1.32812 3.71984 3.71594 1.33203 6.66146 1.33203C9.60699 1.33203 11.9948 3.71984 11.9948 6.66536C11.9948 7.89783 11.5767 9.0327 10.8747 9.93576L14.4662 13.5273C14.7265 13.7876 14.7265 14.2098 14.4662 14.4701C14.2059 14.7304 13.7837 14.7304 13.5234 14.4701L9.93186 10.8786ZM10.6615 6.66536C10.6615 8.8745 8.87059 10.6654 6.66146 10.6654C4.45232 10.6654 2.66146 8.8745 2.66146 6.66536C2.66146 4.45622 4.45232 2.66536 6.66146 2.66536C8.87059 2.66536 10.6615 4.45622 10.6615 6.66536Z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Search for asset" v-model="searchInput" />
                                        </span>
                                    </div>
                                </div>

                                <div class="transactionstyle__listitemsassets">

                                    <div class="transactionstyle__listitemsasset"
                                        v-for="(cryptoasset, caindex) in paginatedList"
                                        @click="setCurrentAsset(cryptoasset)">
                                        <figure class="assetlist__area--assetlogo">
                                            <img :src="returnCryptoLogo(cryptoasset.coin)" />
                                        </figure>
                                        <div class="transactionstyle__listitemsasset--labels">
                                            <label class="name" v-if="cryptoasset.coin">{{ cryptoasset.name }}</label>
                                            <label class="chain">{{ cryptoasset.coin }}</label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="layout-stretch" v-if="cryptoassets && cryptoassets.length">
                            <PageIndicator :page_name="'Swap/Convert'" />

                            <div class="margin__main layout-padding">

                                <div class="swap__body">
                                    <h2 class="swap__body--h2">Swap/Convert</h2>

                                    <div class="swap__selectassets">

                                        <div class="swap__selectasset swap__box">
                                            <div class="swap__selectasset--direction">
                                                <span>From</span>
                                            </div>
                                            <div class="swap__selectasset--symbol" @click="setSwapDirection('from')">
                                                <figure class="assetlist__area--assetlogo">
                                                    <img
                                                        :src="currentAssetFrom ? returnCryptoLogo(currentAssetFrom.coin) : ''" />
                                                </figure>
                                                <div class="swap__selectasset--labels">
                                                    <span>
                                                        {{ currentAssetFrom ? currentAssetFrom.coin :
                                                            setandreturnFromAsset(paginatedList[0]).coin }}
                                                    </span>
                                                    <span v-if="currentAssetFrom && currentAssetFrom.networkList">
                                                        on
                                                        {{ currentAssetFrom ? currentAssetFrom.networkList[0].blockchain :
                                                            setandreturnFromAsset(paginatedList[0]).networkList[0].blockchain }}
                                                    </span>

                                                    <span
                                                        v-if="currentAssetFrom && !currentAssetFrom.networkList && currentAssetFrom.chain">
                                                        on
                                                        {{ currentAssetFrom.chain }}
                                                    </span>

                                                    <span
                                                        v-if="currentAssetFrom && !currentAssetFrom.networkList && !currentAssetFrom.chain">

                                                    </span>

                                                    <span>{{ assetCategoryFrom }}</span>
                                                </div>
                                            </div>

                                            <div class="swap__selectasset--categories">
                                                <button class="btn category-open" @click="toggleWalletCat">
                                                    <span>Wallet:</span>
                                                    <label>
                                                        <span v-if="walletCategory === 'fiat/spot'">Spot Wallet</span>
                                                        <span v-if="walletCategory === 'margin'">Margin</span>
                                                        <span v-if="walletCategory === 'defi'">Defi</span>
                                                        <span v-if="walletCategory === 'bonus'">Earning</span>
                                                        <span v-if="walletCategory === 'tokenized stocks'">Tokenized
                                                            Stocks</span>
                                                        <span v-if="walletCategory === 'bot trading'">Bot Trading</span>
                                                        <span>
                                                            <svg viewBox="0 0 24 24" focusable="false"
                                                                class="chakra-icon css-onkibi" aria-hidden="true">
                                                                <path fill="currentColor"
                                                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </button>
                                            </div>
                                        </div>

                                        <span class="swap__selectassets--arrow">
                                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"
                                                aria-hidden="true">
                                                <path fill="currentColor"
                                                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                            </svg>
                                        </span>

                                        <div class="swap__selectasset swap__box">
                                            <div class="swap__selectasset--direction">
                                                <span>To</span>
                                            </div>
                                            <div class="swap__selectasset--symbol" @click="setSwapDirection('to')">
                                                <figure class="assetlist__area--assetlogo">
                                                    <img
                                                        :src="currentAssetTo ? returnCryptoLogo(currentAssetTo.coin) : ''" />
                                                </figure>
                                                <div class="swap__selectasset--labels">
                                                    <span>
                                                        {{ currentAssetTo ? currentAssetTo.coin :
                                                            setandreturnToAsset(paginatedList[1]).coin }}
                                                    </span>

                                                    <span v-if="currentAssetTo && currentAssetTo.networkList">
                                                        on
                                                        {{ currentAssetTo ? currentAssetTo.networkList[0].blockchain :
                                                            setandreturnFromAsset(paginatedList[0]).networkList[0].blockchain }}
                                                    </span>

                                                    <span
                                                        v-if="currentAssetTo && !currentAssetTo.networkList && currentAssetTo.chain">
                                                        on
                                                        {{ currentAssetTo.chain }}
                                                    </span>

                                                    <span
                                                        v-if="currentAssetTo && !currentAssetTo.networkList && !currentAssetTo.chain">

                                                    </span>

                                                    <span>{{ assetCategoryTo }}</span>
                                                </div>
                                            </div>

                                            <div class="swap__selectasset--categories">
                                                <button class="btn category-open">
                                                    <span>Wallet:</span>
                                                    <label>
                                                        <span v-if="walletCategory === 'fiat/spot'">Spot Wallet</span>
                                                        <span v-if="walletCategory === 'margin'">Margin</span>
                                                        <span v-if="walletCategory === 'defi'">Defi</span>
                                                        <span v-if="walletCategory === 'bonus'">Earning</span>
                                                        <span v-if="walletCategory === 'tokenized stocks'">Tokenized
                                                            Stocks</span>
                                                        <span v-if="walletCategory === 'bot trading'">Bot Trading</span>
                                                        <!--<span>
                                                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                                        </span>-->
                                                    </label>
                                                </button>
                                            </div>
                                        </div>

                                        <span class="flex-place-holder"></span>

                                    </div>


                                    <div class="swap__box">

                                        <div class="swap__convertarea">
                                            <div class="swap__convertarea--action">
                                                <p>You Pay</p>
                                            </div>

                                            <div class="swap__convertarea--convertion">
                                                <p>≈ ${{ youPayUSD }}</p>
                                            </div>
                                        </div>

                                        <div class="swap__boxassetarea">
                                            <figure class="assetlist__area--assetlogo">
                                                <img
                                                    :src="currentAssetFrom ? returnCryptoLogo(currentAssetFrom.coin) : ''" />
                                            </figure>
                                            <div class="swap__boxassetarea--inputarea">
                                                <input placeholder="0" v-model="fromInput" @input="validateNumberInputFrom"
                                                    :class="{ inputError }" />
                                                <span></span>
                                            </div>
                                        </div>

                                        <div class="swap__clientbalancearea">
                                            <div class="swap__clientbalancearea--sect dim">
                                                <span class="walletbalance-label">Wallet Balance:</span>
                                                <span class="walletbalance">{{ fromAssetBalance }} (${{
                                                    fromAssetBalanceInUSD }}) {{ currentAssetFrom.coin }}</span>
                                            </div>

                                            <div class="swap__clientbalancearea--sect">
                                                <span class="max" @click="setfromInputToMax">Max</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="swap__box">

                                        <div class="swap__convertarea">
                                            <div class="swap__convertarea--action">
                                                <p>You Get</p>
                                            </div>

                                            <div class="swap__convertarea--convertion">
                                                <p>≈ ${{ youGetUSD }}</p>
                                            </div>
                                        </div>

                                        <div class="swap__boxassetarea">
                                            <figure class="assetlist__area--assetlogo">
                                                <img :src="currentAssetTo ? returnCryptoLogo(currentAssetTo.coin) : ''" />
                                            </figure>
                                            <div class="swap__boxassetarea--inputarea">
                                                <input placeholder="0" v-model="toInput" @input="validateNumberInputTo"
                                                    :class="{ inputError }" />
                                                <span></span>
                                            </div>
                                        </div>

                                        <div class="swap__clientbalancearea">
                                            <div class="swap__clientbalancearea--sect dim">
                                                <span class="walletbalance-label">Wallet Balance:</span>
                                                <span class="walletbalance">{{ toAssetBalance }} (${{ toAssetBalanceInUSD
                                                }}) {{ currentAssetTo.coin }}</span>
                                            </div>

                                            <div class="swap__clientbalancearea--sect">
                                                <!--<span class="max">Max</span>-->
                                            </div>
                                        </div>

                                    </div>

                                    <div class="swap__box transparent">

                                        <div class="swap__expectedamount">

                                            <div class="swap__expectedamount--area">
                                                <div class="swap__expectedamount--areasec">
                                                    <span class="svg">
                                                        <svg viewBox="0 0 24 24" focusable="false"
                                                            class="chakra-icon css-13izzit">
                                                            <path fill="currentColor"
                                                                d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span>1 {{ currentAssetFrom.coin }} = {{
                                                        compareAssetsPrices(currentAssetFrom.price, currentAssetTo.price) }}
                                                        {{ currentAssetTo.coin }}</span>
                                                </div>

                                                <div class="swap__expectedamount--areasec">
                                                    <span class="expected">Expected Amount</span>
                                                </div>
                                            </div>

                                            <div class="swap__expectedamount--area flex-end-column">
                                                <div class="swap__expectedamount--areasec">
                                                    <span class="svg">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 512 512" height="1em" width="1em"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        ${{ transactionFee }}
                                                    </span>
                                                </div>

                                                <div class="swap__expectedamount--areasec">
                                                    <span>
                                                        {{ toInput }} {{ currentAssetTo.coin }}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="swap__btns">
                                        <button class="swap__btns--btn btn colored-btn dim" v-if="!enablePreviewBtn">Preview
                                            Trade</button>
                                        <button class="swap__btns--btn btn colored-btn" v-if="enablePreviewBtn"
                                            @click="previewTrade">Preview Trade</button>
                                    </div>

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
import swapMixin from '@/mixins/swap';
import cryptologosMixin from '@/mixins/cryptologos';

export default {
    mixins: [swapMixin, cryptologosMixin],
    methods: {
        validateNumberInputFrom() {
            const { customSplitByDot, removePeriodAndCommas } = this;
            const formattedNumber = this.fromInput.replace(/[^1234567890.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            const characters = removePeriodAndCommas(customSplitByDot(formattedNumber));

            return this.fromInput = characters;
        },
        validateNumberInputTo() {
            const { customSplitByDot, removePeriodAndCommas } = this;
            const formattedNumber = this.toInput.replace(/[^1234567890.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            const characters = removePeriodAndCommas(customSplitByDot(formattedNumber));

            return this.toInput = characters;
        },
        removeCommasAfterDot(inputString) {
            const withoutCommasAfterDot = inputString.replace(/(\.\d*)/g, (match) => match.replace(/,/g, ''));
            return withoutCommasAfterDot;
        },
        customSplitByDot(inputString) {
            const dotIndex = inputString.indexOf('.');
            if (dotIndex !== -1) {
                const firstPart = inputString.slice(0, dotIndex + 1);
                const secondPart = inputString.slice(dotIndex + 1);
                return [firstPart, secondPart];
            } else {
                return [inputString, '']; // If there's no dot, return the whole string in the first part and an empty string in the second part.
            }
        },
        removePeriodAndCommas(array) {
            const withoutPeriodAndCommas = array.map((str, index) => {
                if (index === 1) {
                    return str.replace(/[.,]/g, '');
                }

                return str;
            });

            return withoutPeriodAndCommas.join('');
        }
    },
    computed: {
        convertedFrom() {
            return `0.00`
        }
    },
}
</script>

<style lang="scss" scoped>
.swap {

    &__body {
        background: $defipopup-body;
        padding: #{scaleValue(20)};
        margin: 0 auto;
        border-radius: #{scaleValue(6)};
        border: $border;
        width: #{scaleValue(600)};

        &--h2 {
            font-size: #{scaleValue(15)};
            font-weight: 500;
            margin-bottom: #{scaleValue(25)};
        }
    }

    &__box {
        border-radius: #{scaleValue(6)};
        border: $border;
        background: rgba($light-black, .7);
        padding: #{scaleValue(15)};
        transition: all .4s ease;
        position: relative;

        &:not(:last-child) {
            margin-bottom: #{scaleValue(10)};
        }

        &.transparent {
            background: transparent;
        }

        &:hover {
            background: rgba($light-black, .9);
        }
    }

    &__selectassets {
        display: flex;
        justify-content: space-between;
        position: relative;

        &--arrow {
            position: absolute;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: #{scaleValue(30)};
            width: #{scaleValue(30)};
            top: #{scaleValue(34)};
            left: #{scaleValue(265)};
            z-index: 2;
            background: rgba($light-black, 1);
            border: $border;


            & svg {
                height: #{scaleValue(15)};
                width: #{scaleValue(15)};
            }
        }
    }

    &__selectasset {
        display: flex;
        flex-direction: column;
        width: #{scaleValue(275)};
        cursor: pointer;

        &--direction {
            font-size: #{scaleValue(13)};
            margin-bottom: #{scaleValue(10)};
        }

        &--symbol {
            display: flex;
            align-items: center;

            & figure {
                height: #{scaleValue(30)};
                width: #{scaleValue(30)};
                overflow: hidden;
                border-radius: 100%;
                margin-right: #{scaleValue(10)};

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
        }

        &--labels {
            position: relative;
            display: flex;
            flex-direction: column;
            font-size: #{scaleValue(15)};

            & span {

                &:nth-child(2) {
                    font-size: #{scaleValue(13)};
                    opacity: .5;
                    margin-top: #{scaleValue(2)}
                }

                &:nth-child(3) {
                    position: absolute;
                    top: #{scaleValue(15)};
                    right: #{scaleValue(-70)};
                    text-transform: uppercase;
                    font-size: #{scaleValue(8)};
                    font-weight: 700;
                    background: rgba($bitcoin-orange, .8);
                    color: $black;
                    border-radius: 3rem;
                    padding: #{scaleValue(5)};
                }
            }
        }

        &--categories {
            width: 100%;
            margin-top: #{scaleValue(10)};
            padding-top: #{scaleValue(10)};
            border-top: $border;

            //background: red;
            cursor: pointer;

            & button {
                font-size: #{scaleValue(13)};
                padding: #{scaleValue(10)} 0;
                cursor: pointer;
                color: $white;

                border-radius: 0;
                width: 100%;
                text-align: left;
                display: flex;
                align-items: center;

                &.category-open {
                    justify-content: space-between;

                    & label {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        color: $landing-green;
                        font-weight: 600;

                        & span {
                            opacity: .6;
                            font-size: #{scaleValue(12)};
                            margin-right: #{scaleValue(5)};

                            & svg {
                                height: #{scaleValue(12)};
                                width: #{scaleValue(12)};
                            }
                        }
                    }
                }

                &.category {
                    opacity: 1;
                    padding: #{scaleValue(15)};
                    transition: all .4s ease;
                    background: $light-black;

                    &:not(:last-child) {
                        border-bottom: $border;
                    }

                    &:hover {
                        border-color: $primary-color;
                    }
                }
            }
        }

        &--categoriesbody {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: 0;
            left: 0;

            border-radius: #{scaleValue(6)};
            border: $border;
            background: rgba($light-black, 1);
            z-index: 2;

            width: #{scaleValue(275)};
            overflow-x: hidden;
            overflow-y: scroll;
            height: #{scaleValue(200)};
        }
    }

    &__convertarea {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--action {
            font-size: #{scaleValue(13)};
        }

        &--convertion {
            font-size: #{scaleValue(12.5)};
            font-weight: 400;
            opacity: .5;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }


    &__boxassetarea {
        display: flex;
        align-items: center;
        margin-top: #{scaleValue(10)};

        &--logo {
            height: #{scaleValue(30)};
            width: #{scaleValue(30)};
            overflow: hidden;
            border-radius: 100%;

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &--amount {
            font-size: #{scaleValue(20)};
            position: relative;
            z-index: 2;
        }

        &--inputarea {
            margin-left: #{scaleValue(10)};

            & input {
                height: #{scaleValue(35)};
                width: #{scaleValue(470)};
                border: none;
                outline: none;
                background: transparent;
                font-size: #{scaleValue(19)};
                color: $white;
                position: relative;
                z-index: 2;

                &~span::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: #{scaleValue(558)};
                    height: #{scaleValue(116)};
                    border: $border;
                    border-width: #{scaleValue(1.3)};
                    border-color: transparent;
                    transition: all .4s ease;
                    border-radius: #{scaleValue(6)};
                    z-index: 1;
                }

                &.inputError+span::after {
                    border-color: $warning-red;
                }

                &::placeholder {
                    color: $white;
                }

                &:focus+span::after {
                    border-color: $primary-color;
                }

                &.inputError:focus+span::after {
                    border-color: $warning-red;
                }
            }
        }
    }

    &__clientbalancearea {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: #{scaleValue(10)};
        font-size: #{scaleValue(13)};

        &--sect {


            & span {

                &.max {
                    border-radius: 3rem;
                    font-size: #{scaleValue(11)};
                    background: rgba($light-black, .9);
                    padding: #{scaleValue(6)} #{scaleValue(13)};
                    text-align: center;
                    cursor: pointer;
                    margin-left: #{scaleValue(6)};
                    position: relative;
                    z-index: 2;
                }
            }
        }
    }

    &__expectedamount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: #{scaleValue(13.5)};

        &--area {
            display: flex;
            flex-direction: column;
        }

        &--areasec {
            display: flex;
            align-items: center;

            & span {
                display: flex;
                align-items: center;
                margin-bottom: #{scaleValue(11)};

                &.svg {
                    margin-right: #{scaleValue(5)};
                }

                &.expected {
                    opacity: .6;
                }

                & svg {
                    height: #{scaleValue(14)};
                    width: #{scaleValue(14)};
                }
            }
        }
    }

    &__detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: #{scaleValue(13)};
        margin-bottom: #{scaleValue(10)};

        &.top-border {
            border-top: $border;
            padding-top: #{scaleValue(14)};
        }

        &--area {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:nth-child(1) {
                opacity: .6;
            }

            & span {

                &.svg {
                    margin-left: #{scaleValue(5)};

                    & svg {
                        height: #{scaleValue(10)};
                        width: #{scaleValue(10)};
                    }
                }
            }
        }
    }

    &__btns {
        width: 100%;
        margin-top: #{scaleValue(22)};

        & button {
            width: 100%;
            font-size: #{scaleValue(16)};
            padding: #{scaleValue(12)} #{scaleValue(14)};

            &.dim {
                opacity: .6;
            }

        }
    }
}
</style>