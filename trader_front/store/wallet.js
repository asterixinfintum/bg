import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    wallettypes: [],
    wallets: [],
    balances: []
});

export const mutations = {
    SET_WALLETTYPES(state, data) {
        state.wallettypes = data;
    },
    SET_WALLETS(state, data) {
        state.wallets = data;
    }
}

export const actions = {

    async getwallets({ commit }) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjktoken');

            fetch(`${BASE_URL}/wallets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    const { wllts } = data;
                    commit('SET_WALLETS', wllts);
                    resolve(data)
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                })
        });
    },




    /*async withdraw({ commit }, withdrawal) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/client/withdraw`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(withdrawal)
                }).then(response => response.json())
                    .then(data => {
                        commit('SET_WALLETTYPES', user_wallets);
                        resolve(data)
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    })
            } catch (error) {
                reject(error)
            }
        })
    },
    async getwallettypes({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/client/wallets`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const { user_wallets } = data;
                        commit('SET_WALLETTYPES', user_wallets);
                        resolve(user_wallets)
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    })
            } catch (error) {

            }
        });
    },
    async getwalletassets({ commit }, wallet_id) {
        return new Promise((resolve, reject) => {
            //req.query http://example.com/api/users?name=John&age=30
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/client/walletassets?wallet=${wallet_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const { walletAssets } = data;
                        resolve(walletAssets);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    })
            } catch (error) {
                console.log(error);
            }
        })
    }*/
}