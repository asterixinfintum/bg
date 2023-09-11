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
    computed: {
        ...mapState({
            cryptoassets: state => state.cryptoassets.cryptoassets,
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
        }
    },
    methods: {
        ...mapActions('list', ['search']),
        ...mapActions('inhouseassets', ['getinhouseassets']),
        ...mapMutations('list', ['SET_PAGINATEDLIST', 'SET_ORIGINALLIST']),
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
            this.currentAssetcategory = category;
        }
    },
    watch: {
        cryptoassets(newval, oldval) {
            this.SET_PAGINATEDLIST(newval);
            this.SET_ORIGINALLIST(newval);
        },
        currentAssetcategory(newval, oldval) {
            if (newval === 'crypto') {
                this.SET_PAGINATEDLIST(this.cryptoassets);
                this.SET_ORIGINALLIST(this.cryptoassets);
            }

            if (newval === 'inhousetokenizedstocks') {
                const inhouseassets = this.inhouseassets.filter(inhouseasset => inhouseasset.assetType === 'tokenized stock');
                this.SET_PAGINATEDLIST(inhouseassets);
                this.SET_ORIGINALLIST(inhouseassets);
            }

            if (newval === 'inhousefiat') {
                const inhouseassets = this.inhouseassets.filter(inhouseasset => inhouseasset.assetType === 'fiat');
                this.SET_PAGINATEDLIST(inhouseassets);
                this.SET_ORIGINALLIST(inhouseassets);
            }

            if (newval === 'inhousestocks') {
                const inhouseassets = this.inhouseassets.filter(inhouseasset => inhouseasset.assetType === 'stock');
                this.SET_PAGINATEDLIST(inhouseassets);
                this.SET_ORIGINALLIST(inhouseassets);
            }
        },
        assetsOwned(newval, oldval) {
            const { originalList } = this;
            const assetsOwned = newval;
            const finallist = []

            if (assetsOwned.length && originalList.length) {
                originalList.forEach(item => {
                    if (!assetsOwned.find(asset => asset._id === item._id)) {
                        finallist.push(item);
                    }
                });

                const list = [...assetsOwned, ...finallist];
                this.SET_PAGINATEDLIST(list);
                this.SET_ORIGINALLIST(list);
            }
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