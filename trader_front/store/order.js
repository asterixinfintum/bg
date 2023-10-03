import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    orders: [],
    order: null,
    autotrades: [],
    trades: [],
    autotradestrategies: []
});

export const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data;
    },
    SET_ORDER(state, data) {
        state.order = data;
    },
    SET_AUTOTRADES(state, data) {
        state.autotrades = data;
    },
    SET_AUTOTRADESTRATEGIES(state, data) {
        state.autotradestrategies = data;
    },
    SET_TRADES(state, data) {
        state.trades = data;
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
    async getorders({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/orders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }).then(response => response.json())
                    .then(data => {
                        const { orders } = data;
                        commit('SET_ORDERS', orders)
                        resolve(orders);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {
                console.log(error, 'error here')
            }
        })
    },
    async getautotrades({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/autotrades`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }).then(response => response.json())
                    .then(data => {
                        const { autotrades } = data;

                        commit('SET_AUTOTRADES', autotrades);
                        resolve(autotrades);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {

            }
        })
    },
    async gettrades({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/trades`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }).then(response => response.json())
                    .then(data => {
                        const { executedtrades } = data;

                        console.log(executedtrades)

                        commit('SET_TRADES', executedtrades);
                        resolve(executedtrades);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            } catch (error) {

            }
        })
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
    async createMktOrder({ commit }, order) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/order/market`, {
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
                reject(error);
            }
        });
    },
    async createLmtOrder({ commit }, order) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/order`, {
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
                reject(error);
            }
        });
    },
    createStpLmtOrder({ commit }, order) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/order`, {
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
                reject(error);
            }
        });
    }
}