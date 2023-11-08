import { mapActions, mapState, mapMutations } from 'vuex';
import walletMixin from '@/mixins/wallet';

export default {
    data() {
        return {
            searchInput: '',
            pageSize: 20,
            currentPage: 1,
            currentAssetcategory: 'crypto'
        }
    },
    mixins: [walletMixin],
    mounted() {
        this.getwallets();
    },
    computed: {
        ...mapState({
            assets: state => state.list.assets,
            originalList: state => state.list.originalList,
            paginatedList: state => state.list.paginatedList,
            inhouseassets: state => state.inhouseassets.items,
            inhouseasset: state => state.inhouseassets.item
        }),
        numberOfPages() {
            const { pageSize, paginatedList } = this;
            return Math.ceil(paginatedList.length / pageSize);
        },
        listByPages() {
            const { pageSize, paginatedList } = this;
            const result = [];

            for (let i = 0; i < paginatedList.length; i += pageSize) {
                result.push(paginatedList.slice(i, i + pageSize));
            }

            return result;
        },
    },
    methods: {
        ...mapActions('list', ['search']),
        ...mapMutations('list', ['SET_PAGINATEDLIST', 'SET_ORIGINALLIST']),
        ...mapActions('wallet', ['getwallets']),
        setCurrentPage(page) {
            const { scrollToTop } = this;
            this.currentPage = page;
            scrollToTop();
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        incrPage() {
            const { currentPage, listByPages, scrollToTop } = this;

            if (currentPage >= 1 && listByPages.length && currentPage < listByPages.length) {
                const pageVal = currentPage;
                const pageIncr = pageVal + 1;
                this.currentPage = pageIncr;

                scrollToTop();
            }
        },
        reduPage() {
            const { currentPage, listByPages, scrollToTop } = this;

            if (currentPage > 1 && listByPages.length) {
                const pageVal = currentPage;
                const pageRedu = pageVal - 1;
                this.currentPage = pageRedu;

                scrollToTop();
            }
        },
        clearInput() {
            this.searchInput = '';
        },
        limitTextLength(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            } else {
                return text.substring(0, maxLength) + '...';
            }
        },
        setCurrentCategory(category) {
            const { assets, assetsOwned, wallet, mergeUnique } = this;
            this.currentAssetcategory = category;
            let assetsOwnedFilter;
            let assetsFilter;
            let final = []
            let unique = []

            if (assetsOwned.length && assets.length) {
                assetsFilter = assets.filter(asset => asset.assetType.toLowerCase() === this.currentAssetcategory);
                assetsOwnedFilter = assetsFilter.filter(asset => {
                    let foundasset = assetsOwned.find(assetowned => assetowned.symbol === asset.symbol);

                    if (foundasset) {
                        return foundasset
                    }
                });

                unique = mergeUnique(assetsFilter, assetsOwnedFilter, `_id`);

                final = [...assetsOwnedFilter, ...assetsFilter];
                unique = mergeUnique(final, `_id`);

                this.SET_PAGINATEDLIST(unique);
                this.SET_ORIGINALLIST(unique);


            } else if (!assetsOwned.length && assets.length) {
                assetsFilter = assets.filter(asset => asset.assetType.toLowerCase() === this.currentAssetcategory);
                this.SET_PAGINATEDLIST(assetsFilter);
                this.SET_ORIGINALLIST(assetsFilter)
            }
        },
        mergeUnique(arr, attributeName) {
            const combinedArray = [...arr];
            const seen = new Map();

            const uniqueArray = combinedArray.filter(item => {
                const attributeValue = item[attributeName];
                if (seen.has(attributeValue)) {
                    return false;
                }
                seen.set(attributeValue, true);
                return true;
            });

            return uniqueArray;
        },
        assetblc(asset) {
            const { assetsOwned } = this;

            if (asset && assetsOwned.length) {
                const found = assetsOwned.find(assetowned => assetowned.symbol === asset.symbol);

                if (found) {
                    return found.blc.balance;
                }
            }

            return `0.00000000`
        },
        assetblcUSD(asset) {
            const { assetblc } = this;

            if (parseFloat(assetblc(asset)) !== 0 && parseFloat(asset.price) !== 0) {
                return (parseFloat(assetblc(asset)) * parseFloat(asset.price))
            }

            return `0.00000000`
        },
        assetblcBTC(asset) {
            const { assetblcUSD, assets } = this;

            const btc = assets.find(asst => asst.coin === 'BTC');
            const btcprice = parseFloat(btc.price);
            const assetblc = parseFloat(assetblcUSD(asset));
            const assetpriceBTC = (assetblc / btcprice);

            if (assetpriceBTC !== 0) {
                return assetpriceBTC;
            }

            return `0.00000000`
        },
        retrnblcs(wallettype) {
            const { wallets, assets } = this;
            const blcs = []

            if (wallets.length && assets.length) {
                const wallet = wallets.find(wallet => wallet.walletType === wallettype);
                const ownedAssets = wallet.blcs

                const btc = assets.find(asst => asst.coin === 'BTC');
                const btcprice = parseFloat(btc.price);

                ownedAssets.forEach(ownedasset => {
                    blcs.push({
                        balance: ownedasset.blc.balance,
                        price: ownedasset.asset.price,
                        usdblc: function usdblc() {
                            return (this.balance * this.price)
                        },
                        btcblc: function () {
                            return (this.usdblc() / btcprice)
                        }
                    });
                });

                return blcs;
            }
        },
        totalBlcUSD(wallettype) {
            const { wallets, assets, retrnblcs } = this;

            if (wallets.length && assets.length) {
                const usdblcs = retrnblcs(wallettype).map(blc => blc.usdblc());
                const total = usdblcs.reduce((acc, current) => acc + current, 0);
                return parseFloat(total)
            }

            return `0.00000000`
        },
        totalBlcBTC(wallettype) {
            const { wallets, assets, retrnblcs } = this;

            if (wallets.length && assets.length) {
                const btcblcs = retrnblcs(wallettype).map(blc => blc.btcblc());
                const total = btcblcs.reduce((acc, current) => acc + current, 0);
                return parseFloat(total)
            }

            return `0.00000000`
        }
    },
    watch: {
        async assets(newval, oldval) {
            this.setCurrentCategory('crypto');
        },
        assetsOwned(newval, oldval) {
            const { setCurrentCategory, currentAssetcategory } = this;

            setCurrentCategory(currentAssetcategory);
        },
        paginatedList() {
            this.currentPage = 1;
        },
        searchInput(newval, oldval) {
            const searchTerm = newval.trim().toLowerCase();
            this.search(searchTerm);
        }
    }
}