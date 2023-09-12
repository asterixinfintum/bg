import BASE_VARS from './base_vars';

const { BTC_SERVER } = BASE_VARS;

export const state = () => ({
    btcaddresses: [],
});

export const mutations = {
    SET_BTCADDRESSES(state, data) {
        state.btcaddresses = [...state.btcaddresses, data];
    }
}

export const actions = {
    async newBtcwallet({ commit }, { ownerId, walletType, assetIdInTraderDB }) {
        try {
            return fetch(`${BTC_SERVER}/newwallet?ownerId=${ownerId}&walletType=${walletType}&assetIdInTraderDB=${assetIdInTraderDB}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    const { userwallet } = data;
                    commit('SET_BTCADDRESSES', userwallet);
                    return userwallet;
                })
        } catch (error) {
            console.log(error);
        }
    },
    async getBtcWallet({ commit }, { ownerId, walletType }) {
        try {
            fetch(`${BTC_SERVER}/getwallet?ownerId=${ownerId}&walletType=${walletType}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    const { userwallet } = data;
                    commit('SET_BTCADDRESSES', userwallet);
                })
        } catch (error) {
            console.log(error)
        }
    }
}