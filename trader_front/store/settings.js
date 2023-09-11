import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const actions = {
    updateEmail({ commit }, email ) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjktoken');

            try {
                const response = await fetch(`${BASE_URL}/settings/email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Assuming the token needs to be in this format. Adjust if needed.
                    },
                    body: JSON.stringify({ email })
                });

                const data = await response.json();

                if (response.ok) {
                    // If you want to commit a mutation, do it here
                    // commit('YOUR_MUTATION_NAME', data);
                    resolve(data);
                } else {
                    reject(data);
                }

            } catch (error) {
                console.error('Error updating email:', error);
                reject(error);
            }
        });
    },
    updatePhoneNumber({ commit }, phonenumber ) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjktoken');

            try {
                const response = await fetch(`${BASE_URL}/settings/phonenumber`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Assuming the token needs to be in this format. Adjust if needed.
                    },
                    body: JSON.stringify({ phonenumber })
                });

                const data = await response.json();

                if (response.ok) {
                    // If you want to commit a mutation, do it here
                    // commit('YOUR_MUTATION_NAME', data);
                    resolve(data);
                } else {
                    reject(data);
                }

            } catch (error) {
                console.error('Error updating phone number:', error);
                reject(error);
            }
        });
    }
}