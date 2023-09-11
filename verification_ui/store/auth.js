import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    client: null,
    client_token: null
});

export const mutations = {
    SET_CLIENT(state, data) {
        state.client = data;
    },
    SET_CLIENT_TOKEN(state, data) {
        state.client_token = data
    }
}

export const actions = {
    async getCurrentUser({ commit }, keyToken) {
      try {
        fetch(`${BASE_URL}/getclientbykeytoken`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${keyToken}`
          }
        })
        .then(response => response.json())
        .then(data => {
          commit('SET_CLIENT_TOKEN', data.token);
          commit('SET_CLIENT', data.userData);
        })
        .catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
      }
    },
    async logout({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');
                
                fetch(`${BASE_URL}/logout`, {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Response from protected route:', data);
                    commit('SET_CLIENT_TOKEN', null);
                    commit('SET_CLIENT', null);

                    localStorage.removeItem('873__jh6bdjktoken');
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
            } catch {

            }
        });
    }
}
