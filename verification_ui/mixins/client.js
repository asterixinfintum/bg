import { mapActions, mapState, mapMutations } from 'vuex';
import BASE_VARS from '@/store/base_vars';

const { BASE_URL } = BASE_VARS;

export default {
    computed: {
        ...mapState({
          client: state => state.auth.client,
          client_token: state => state.auth.client_token
        })
    },     
    methods: {
        ...mapActions('auth', ['getCurrentUser', 'logout']),
        getTokenFromURL() {
            const url = window.location.href;
            const urlParams = new URLSearchParams(url.substring(url.indexOf('?')));
            return urlParams.get('token');
        }
    },
    mounted() {
        const keyToken = this.getTokenFromURL();
        this.getCurrentUser(keyToken);
    }
}