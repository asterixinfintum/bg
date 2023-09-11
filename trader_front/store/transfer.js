import BASE_VARS from './base_vars';

const { BASE_URL } = BASE_VARS;

export const actions = {
    async executeTransfer({ commit }, transfer) {
        return new Promise((resolve, reject) => {
            try {
                const token = localStorage.getItem('873__jh6bdjktoken');

                console.log(transfer)

                fetch(`${BASE_URL}/transfer`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(transfer)
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
        });
    }
}