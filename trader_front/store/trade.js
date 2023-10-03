import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    assetpairs: [],
    cryptopairs: [],
    stockpairs: [],
    commoditiespairs: [],
    allpairs: [],
});

export const mutations = {
    SET_ASSETPAIRS(state, data) {
        state.assetpairs = data
    },
    SET_CRYPTOPAIRS(state, data) {
        state.cryptopairs = data;
    },
    SET_STOCKPAIRS(state, data) {
        state.stockpairs = data;
    },
    SET_COMMODITIESPAIRS(state, data) {
        state.commoditiespairs = data;
    },
    SET_ALLPAIRS(state, data) {
        state.allpairs = data;
    }
}

export const actions = {
    async getassetpairs({ commit }, { assetid, assettype }) {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/pairs?assetid=${assetid}&assettype=${assettype}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    const { ctds } = data;
                    commit('SET_ASSETPAIRS', ctds);
                    resolve(ctds)
                }).catch(error => {
                    console.log(error);
                    reject(error)
                })
        });
    },
    async getpairsbytype({ commit }, { assettype }) {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/pairs?assettype=${assettype}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    const { ctds } = data;

                    if (assettype === 'stock') {
                        commit('SET_STOCKPAIRS', ctds);
                    }

                    if (assettype === 'crypto') {
                        commit('SET_CRYPTOPAIRS', ctds);
                    }

                    if (assettype === 'commodity') {
                        commit('SET_COMMODITIESPAIRS', ctds);
                    }

                    resolve(ctds)
                }).catch(error => {
                    console.log(error);
                    reject(error)
                })
        });
    },
    async getallpairs({ commit }) {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/pairs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    const { ctds } = data;
                    commit('SET_ALLPAIRS', ctds)
                    resolve(ctds);
                })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    }
}