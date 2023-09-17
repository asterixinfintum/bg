import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    items: [],
    item: null,
    autotradestrategies: []
});

export const mutations = {
    SET_ORDERS(state, data) {
        state.items = data;
    },
    SET_ORDER(state, data) {
        state.item = data;
    },
    SET_AUTOTRADESTRATEGIES(state, data) {
        state.autotradestrategies = data;
    },
    SET_AUTOTRADESTRATEGIESARRAY(state, data) {
        state.autotradestrategies = data;
    }
}

export const actions = {
    addAutoTradeStrategy({ commit, state }, subStrategyData) {
        const { autotradestrategies } = state;

        const strategies = autotradestrategies;
        const filter = strategies.filter(strat => strat.substrategy !== subStrategyData.substrategy);
        const update = [...[subStrategyData], ...filter];
        commit('SET_AUTOTRADESTRATEGIES', update);
    },
    removeStrategy({ commit }, filter) {
        commit('SET_AUTOTRADESTRATEGIESARRAY', filter);
    },
    async createAutoTrade({ commit }, autoTrade) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/createautotrade`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(autoTrade)
                })
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {
                console.log(error);
            }
        });
    },
    async createTrade({ commit }, trade) {
        return new Promise((resolve, reject) => {

        });
    },
    /*async createOrder({ commit }, order) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/createorder`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(order)
                })
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {
                console.log(error);
            }
        });
    },
    async getOrders({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/getorders`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const { orders } = data
                        commit('SET_ORDERS', orders);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {
                console.log(error);
            }
        });
    }*/
}