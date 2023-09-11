import { mapActions, mapState, mapMutations } from 'vuex';
import BASE_VARS from '@/store/base_vars';

const { BASE_URL } = BASE_VARS;

export default {
    data() {
        return {
            depositCardOpen: false
        }
    },
    computed: {
        ...mapState({
          client: state => state.auth.client,
          client_token: state => state.auth.client_token,
          wallettypes: state => state.wallet.wallettypes,
          userbtcwallet: state => state.bitcoinapi.btcaddress
        })
    },  
    methods: {
        ...mapMutations('auth', ['SET_CLIENT', 'SET_CLIENT_TOKEN']),
        ...mapMutations('wallet', ['SET_WALLETS']),
        ...mapActions('wallet', ['getwallettypes', 'getwalletassets']),
        ...mapActions('bitcoinapi', ['getBtcWallet']),
        getCurrentUser() {
            const token = localStorage.getItem('873__jh6bdjktoken');

            try {
                fetch(`${BASE_URL}/getclient`, {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    const { token, userData } = data;
                    this.SET_CLIENT(userData);
                    this.SET_CLIENT_TOKEN(token);

                    const { getBtcWallet } = this;
                    getBtcWallet({ ownerId: userData._id, walletType: 'fiat/spot' });
                    getBtcWallet({ ownerId: userData._id, walletType: 'margin' });

                    this.getwallettypes()
                        .then(async (user_wallets) => {
                            const userWallets = user_wallets;
                            const promisesArray = [];

                            userWallets.forEach(userwallet => {
                                const promise = this.getwalletassets(userwallet._id);
                                promisesArray.push(promise);
                            });

                            try {
                                const walletAssets = await Promise.all(promisesArray);
                                const wallets = [];

                                walletAssets.forEach((walletassetarr, index) => {
                                    if (walletassetarr.length) {
                                        const assets = walletassetarr;
                                        const wallet = this.wallettypes[index];

                                        const walletItem = {
                                            wallettype: wallet.walletType,
                                            assets,
                                            wallet
                                        }

                                        wallets.push(walletItem);
                                    } else {
                                        const assets = [];
                                        const wallet = this.wallettypes[index];

                                        const walletItem = {
                                            wallettype: wallet.walletType,
                                            assets,
                                            wallet
                                        }

                                        wallets.push(walletItem);
                                    }
                                });
                                
                                this.SET_WALLETS(wallets);
                            } catch (error) {
                                console.log(error);
                                throw error
                            }
                        })
                })
                .catch(error => {
                    console.log('Error:', error);
                });
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getCurrentUser();
    }
}