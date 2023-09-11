import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const actions = {
    async executeConversion({ commit }, conversion) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                fetch(`${BASE_URL}/convert`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(conversion)
                })
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                })
            } catch (error) {
                console.log(error);
            }
        })
    }
}