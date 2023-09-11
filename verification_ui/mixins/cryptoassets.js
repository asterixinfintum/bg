import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState({
            cryptoassets: state => state.cryptoassets.cryptoassets,
            cryptoassetsprices: state => state.cryptoassets.cryptoassetsprices,
            cryptoassetstickers: state => state.cryptoassets.cryptoassetstickers,
        }),
        assetslist_crypto() {
            if (this.cryptoassets.length) {
                const cryptoassets = this.cryptoassets;
                const cryptoassetsprices = this.cryptoassetsprices;
                const cryptoassetstickers = this.cryptoassetstickers;

                return this.generate_assetslist_crypto(cryptoassets, cryptoassetsprices, cryptoassetstickers);
            }

            return []
        }
    },
    methods: {
        ...mapActions('cryptoassets', [
            'getcryptoassets', 
            'getcryptoassetsprices', 
            'getcryptoassetstickers']),
        generate_assetslist_crypto(cryptoassets, cryptoassetsprices, cryptoassetstickers) {
            const assetslist_crypto = [];

            for (let cryptoassets_obj of cryptoassets) {
                const { data, _id } = cryptoassets_obj;
                const { coin } = data;

                const cryptoassetsprice = cryptoassetsprices.filter(item => this.getCharactersBeforeUnderscore(item.data.symbol) === coin);
                const cryptoassetsticker = cryptoassetstickers.filter(item => this.getCharactersBeforeUnderscore(item.data.symbol) === coin);
                
                if (cryptoassetsprice[0] !== undefined && cryptoassetsticker[0] !== undefined) {
                    data.cryptoassetsprice_data = cryptoassetsprice[0].data;
                    data.cryptoassetsticker_data = cryptoassetsticker[0].data;
                    data.assetdb_id = _id;

                    assetslist_crypto.push(data);
                }
            }

            return assetslist_crypto;
        },
        getCharactersBeforeUnderscore(str) {
            const parts = str.split('_');
            return parts[0];
        },
        removeUnderscore(str) {
            return str.replace(/_/g, '');
        }
    },
    mounted() {
        if (!this.cryptoassets.length) {
            this.getcryptoassets();
            this.getcryptoassetsprices();
            this.getcryptoassetstickers();
        }
    }
}