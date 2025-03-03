
export const state = () => ({
    userIdentifier: null,
    priceFeedAbi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "aggregatorAddress", "type": "address" }], "name": "getChainlinkDataFeedLatestAnswer", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }],
    priceFeedAddress: '0x0a14F2fD1BB14d94ceE0b889Bf59CCbfA1E2826d',
    paymentContractAbi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[],"name":"entryFeeETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getEtherBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receivePayment","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"}],"name":"setEntryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    paymentContractAddress: '0x9b451d5b12c3ddAeb96f11c1e2cB06767b4754b7',
});

export const actions = {
    setUserIdentifier({ commit }, identifier) {
        commit('SET_USER_IDENTIFIER', identifier);
    },

    clearUserIdentifier({ commit }) {
        commit('CLEAR_USER_IDENTIFIER');
    },
};

export const getters = {
    getUserIdentifier: (state) => state.userIdentifier,
};

export const mutations = {
    SET_USER_IDENTIFIER(state, identifier) {
        state.userIdentifier = identifier;
    },

    CLEAR_USER_IDENTIFIER(state) {
        state.userIdentifier = null;
    },
};