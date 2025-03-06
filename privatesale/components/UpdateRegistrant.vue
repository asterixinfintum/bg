<template>
    <div>
        <h1>Update Registrant</h1>
        <form @submit.prevent="updateRegistrant">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="registrant.email" required />
            </div>

            <div>
                <label for="btcAddress">BTC Address:</label>
                <input type="text" id="btcAddress" v-model="registrant.btcAddress" />
            </div>

            <div>
                <label for="bvxtBalance">BVXT Balance:</label>
                <input type="number" id="bvxtBalance" v-model="registrant.bvxtBalance" />
            </div>

            <div>
                <label for="lockedBvxtBalance">Locked BVXT Balance:</label>
                <input type="number" id="lockedBvxtBalance" v-model="registrant.lockedBvxtBalance" />
            </div>

            <div>
                <label for="govxAvailableBalance">GOVX Available Balance:</label>
                <input type="number" id="govxAvailableBalance" v-model="registrant.govxAvailableBalance" />
            </div>

            <div>
                <label for="govxLockedBalance">GOVX Locked Balance:</label>
                <input type="number" id="govxLockedBalance" v-model="registrant.govxLockedBalance" />
            </div>

            <div>
                <label for="utilxAvailableBalance">UTILX Available Balance:</label>
                <input type="number" id="utilxAvailableBalance" v-model="registrant.utilxAvailableBalance" />
            </div>

            <div>
                <label for="utilxLockedBalance">UTILX Locked Balance:</label>
                <input type="number" id="utilxLockedBalance" v-model="registrant.utilxLockedBalance" />
            </div>

            <div>
                <label for="tokenHolderRewards">Token Holder Rewards:</label>
                <input type="number" id="tokenHolderRewards" v-model="registrant.tokenHolderRewards" />
            </div>

            <div>
                <label for="stakingEarnings">Staking Earnings:</label>
                <input type="number" id="stakingEarnings" v-model="registrant.stakingEarnings" />
            </div>

            <div>
                <label for="referralBonuses">Referral Bonuses:</label>
                <input type="number" id="referralBonuses" v-model="registrant.referralBonuses" />
            </div>

            <button type="submit">Update Registrant</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registrant: {
                email: '',
                btcAddress: '',
                bvxtBalance: 0,
                lockedBvxtBalance: 0,
                govxAvailableBalance: 0,
                govxLockedBalance: 0,
                utilxAvailableBalance: 0,
                utilxLockedBalance: 0,
                tokenHolderRewards: 0,
                stakingEarnings: 0,
                referralBonuses: 0,
            },
        };
    },
    methods: {
        async updateRegistrant() {
            try {
                // Assuming you have an API endpoint to update the registrant
                const response = await fetch('/api/registrants/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.registrant),
                });

                if (response.ok) {
                    alert('Registrant updated successfully!');
                } else {
                    alert('Failed to update registrant.');
                }
            } catch (error) {
                console.error('Error updating registrant:', error);
                alert('An error occurred while updating the registrant.');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40rem;
    margin: 0 auto;

    div {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 5px;
    }

    input {
        padding: 8px;
        font-size: 16px;
    }

    button {
        padding: 10px;
        background-color: #42b983;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;

        &:hover {
            background-color: #369f6e;
        }
    }
}
</style>