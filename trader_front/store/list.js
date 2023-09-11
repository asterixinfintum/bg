export const state = () => ({
    originalList: [],
    paginatedList: [],
    //originalInhouseAssets: [],
    //paginatedOriginalInhouseAssets: [],
});

export const mutations = {
    SET_PAGINATEDLIST(state, data) {
        state.paginatedList = data;
    },
    SET_ORIGINALLIST(state, data) {
        state.originalList = data;
    }
}

export const actions = {
    async search({ commit, state }, searchTerm) {
        const { originalList } = state;

        if (searchTerm.length) {
            const filtered = originalList.filter(item => item.coin.trim().toLowerCase().includes(searchTerm) || item.name.trim().toLowerCase().includes(searchTerm))
            commit('SET_PAGINATEDLIST', filtered);
        } 
        
        if (!searchTerm.length) {
            commit('SET_PAGINATEDLIST', originalList);
        }
    }
}