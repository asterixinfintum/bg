import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            timeToRequestData: 6000
        }
    },
    computed: {
        ...mapState({
            cryptoassets: state => state.cryptoassets.cryptoassets
        }),
        assets() {
            return this.cryptoassets;
        }
    },
    methods: {
        ...mapActions('cryptoassets', ['getcryptoassets']),
        getCharactersBeforeUnderscore(str) {
            const parts = str.split('_');
            return parts[0];
        },
        removeUnderscore(str) {
            return str.replace(/_/g, '');
        }
    },
    mounted() {
        this.getcryptoassets();
    }
}