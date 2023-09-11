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
    ADD_AUTOTRADESTRATEGIES(state, data) {
        state.autotradestrategies.push(data)
    },
    UPDATE_AUTOTRADESTRATEGIES(state, { itemIndex }) {
        state.autotradestrategies.splice(itemIndex, 1);
    }
}

export const actions = {
    addAutoTradeStrategy({ commit, state }, subStrategyData) {
        const sub = subStrategyData.substrategy;

        const itemIndex = state.autotradestrategies.findIndex(
            item => item.substrategy === sub
        );

        if (itemIndex >= 0) {
            commit('UPDATE_AUTOTRADESTRATEGIES', itemIndex)
        }
        
        commit('ADD_AUTOTRADESTRATEGIES', subStrategyData);

    },
    async createOrder({ commit }, order) {
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
    }
}