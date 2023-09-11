import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const state = () => ({
    client: null,
    client_token: null,
    key_token: null
});

export const mutations = {
    SET_CLIENT(state, data) {
        state.client = data;
    },
    SET_CLIENT_TOKEN(state, data) {
        state.client_token = data
    },
    SET_KEY_TOKEN(state, data) {
      state.key_token = data
    }
}

export const actions = {
    async signup({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            try {
                fetch(`${BASE_URL}/register`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                  })
                    .then(response => response.json())
                    .then(data => {
                      commit('SET_CLIENT_TOKEN', data.token);
                      commit('SET_CLIENT', data.userData);

                      localStorage.setItem('873__jh6bdjktoken', data.token);

                      resolve(data)
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      commit('SET_CLIENT_TOKEN', null)
                      reject(error)
                    });
            } catch (error) {
                console.log('error here:', error);
                commit('SET_CLIENT_TOKEN', null);
                commit('SET_CLIENT', null);
                reject(error)
            }
        });
    },
    async login({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            try {
                fetch(`${BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                  })
                  .then(response => response.json())
                  .then(data => {
                    commit('SET_CLIENT_TOKEN', data.token);
                    commit('SET_CLIENT', data.userData);

                    localStorage.setItem('873__jh6bdjktoken', data.token);
                    resolve(data)
                  })
            } catch(error) {
                console.log('error here:', error);
                commit('SET_CLIENT_TOKEN', null);
                commit('SET_CLIENT', null);
                reject(error)
            }
        });
    },
    async generateKeyToken({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          const token = localStorage.getItem('873__jh6bdjktoken');
          
          fetch(`${BASE_URL}/generatekeytoken`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            resolve(data.keytoken)
            commit('SET_KEY_TOKEN', data.keytoken);
          })
          .catch(error => {
            console.log(error)
          })
  
        } catch (error) {
          console.log(error)
        }
      })
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
                    resolve('logged out')
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
            } catch(error) {
              console.log(error)
            }
        });
    }
}
