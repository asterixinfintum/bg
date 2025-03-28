
export const state = () => ({
    userIdentifier: null,
    userEmail: null,
    userDetails: {},
    userBVXtBalance: 0,
    priceFeedAbi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "aggregatorAddress", "type": "address" }], "name": "getChainlinkDataFeedLatestAnswer", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }],
    priceFeedAddress: '0x0a14F2fD1BB14d94ceE0b889Bf59CCbfA1E2826d',
    paymentContractAbi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [], "name": "ReentrancyGuardReentrantCall", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "BxtvBalanceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "PrivateSaleEntry", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "bxtvBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "entryFeeETH", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getBxtvBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getEtherBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "privateSaleEntry", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newFee", "type": "uint256" }], "name": "setEntryFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
    paymentContractAddress: '0xC2540c39C294E30B58750CB5cBaa9521e117478e',
});

// Actions
export const actions = {
    // Set the entire userDetails object
    setUserDetails({ commit }, userDetails) {
        commit('SET_USER_DETAILS', userDetails);
    },

    // Clear the entire userDetails object
    clearUserDetails({ commit }) {
        commit('CLEAR_USER_DETAILS');
    },

    // Update specific fields in userDetails
    setUserIdentifier({ commit }, identifier) {
        commit('SET_USER_IDENTIFIER', identifier);
    },

    setUserEmail({ commit }, email) {
        commit('SET_USER_EMAIL', email);
    },

    setUserBVXtBalance({ commit }, balance) {
        commit('SET_USER_BVXT_BALANCE', balance);
    },
};

// Getters
export const getters = {
    // Get the entire userDetails object
    getUserDetails: (state) => state.userDetails,

    // Get specific fields from userDetails
    getUserIdentifier: (state) => state.userDetails.identifier,
    getUserEmail: (state) => state.userDetails.email,
    getUserBVXtBalance: (state) => state.userDetails.bvxtBalance,
};

// Mutations
export const mutations = {
    // Set the entire userDetails object
    SET_USER_DETAILS(state, userDetails) {
        state.userDetails = { ...state.userDetails, ...userDetails };
    },

    // Clear the entire userDetails object
    CLEAR_USER_DETAILS(state) {
        state.userDetails = {
            identifier: null,
            email: null,
            bvxtBalance: 0,
        };
    },

    // Update specific fields in userDetails
    SET_USER_IDENTIFIER(state, identifier) {
       // console.log('editing useridentifier mutation', identifier)
        state.userIdentifier = identifier;
    },

    SET_USER_EMAIL(state, email) {
        state.email = email;
    },

    SET_USER_BVXT_BALANCE(state, balance) {
        state.userDetails.bvxtBalance = balance;
    },
};