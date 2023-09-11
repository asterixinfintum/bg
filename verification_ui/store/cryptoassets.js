import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    cryptoassets: [],
    cryptoassetsprices: [],
    cryptoassetstickers: [],
    sellorders: [],
    buyorders: []
});

export const mutations = {
    SET_CRYPTOASSETS(state, data) {
        state.cryptoassets = data;
    },
    SET_CRYPTOASSETSPRICES(state, data) {
        state.cryptoassetsprices = data;
    },
    SET_CRYPTOASSETSTICKERS(state, data) {
        state.cryptoassetstickers = data;
    },
    SET_SELLORDERS(state, data) {
        state.sellorders = data;
    },
    SET_BUYORDERS(state, data) {
        state.buyorders = data;
    },
}

export const actions = {
    async getcryptoassets({ commit }) {
        try {
            fetch(`${BASE_URL}/cryptoAssets`)
                .then(response => response.json())
                .then(data => {
                    commit('SET_CRYPTOASSETS', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log(error)
        }
    },
    async getcryptoassetsprices({ commit }) {
        try {
            fetch(`${BASE_URL}/cryptoassetsprices`)
                .then(response => response.json())
                .then(data => {
                    commit('SET_CRYPTOASSETSPRICES', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log(error)
        }
    },
    async getcryptoassetstickers({ commit }) {
        try {
            fetch(`${BASE_URL}/cryptoassetstickers`)
                .then(response => response.json())
                .then(data => {
                    commit('SET_CRYPTOASSETSTICKERS', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log(error)
        }
    }
}