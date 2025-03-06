<template>
    <div>
        <div class="admindashboard">
            <h1>Admin Dashboard</h1>
            <div v-if="loading">Loading...</div>
            <div v-else>
                <div v-if="registrants.length === 0">No registrants found.</div>
                <div v-else>
                    <div v-for="registrant in registrants" :key="registrant._id" class="registrant-card">
                        <h2>{{ registrant.email }}</h2>

                        <!-- Clickable Fields -->
                        <div v-for="(field, key) in editableFields" :key="key" class="admindashboard__useritem">
                            <p @click="toggleEdit(registrant._id, key)">
                                <strong>{{ field.label }}:</strong>
                                <span v-if="!registrant.editing || registrant.editing !== key">
                                    {{ registrant[key] }}
                                </span>
                                <input v-if="registrant.editing && registrant.editing === key"
                                    v-model="registrant[`${key}Edit`]" @blur="saveEdit(registrant._id, key)"
                                    @keyup.enter="saveEdit(registrant._id, key)" type="text"
                                    :ref="`input-${registrant._id}-${key}`" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/mixins/api";
//`${this.url}/admin/users`

export default {
    data() {
        return {
            registrants: [], // Array to store registrant data
            loading: true, // Loading state
            error: null, // Error state
            editableFields: {
                btcAddress: { label: 'BTC Address' },
                bvxtBalance: { label: 'BVXT Balance' },
                lockedBvxtBalance: { label: 'Locked BVXT Balance' },
                govxAvailableBalance: { label: 'GOVX Available Balance' },
                govxLockedBalance: { label: 'GOVX Locked Balance' },
                utilxAvailableBalance: { label: 'UTILX Available Balance' },
                utilxLockedBalance: { label: 'UTILX Locked Balance' },
                tokenHolderRewards: { label: 'Token Holder Rewards' },
                stakingEarnings: { label: 'Staking Earnings' },
                referralBonuses: { label: 'Referral Bonuses' },
            },
        };
    },
    mixins: [api],
    //`${this.url}/admin/users`
    async mounted() {
        try {
            // Fetch the JWT token from local storage or wherever it's stored
            const token = localStorage.getItem('authToken'); // Adjust this based on your token storage

            if (!token) {
                this.error = 'No token found. Please log in.';
                this.loading = false;
                return;
            }

            // Fetch registrant data from the server
            const response = await fetch(`${this.url}/admin/users`, {
                headers: {
                    'Authorization': token, // Include the JWT token in the request
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch registrants');
            }

            const data = await response.json();
            this.registrants = data.data.map(registrant => ({
                ...registrant,
                editing: null, // Track which field is being edited
                btcAddressEdit: registrant.btcAddress,
                bvxtBalanceEdit: registrant.bvxtBalance,
                lockedBvxtBalanceEdit: registrant.lockedBvxtBalance,
                govxAvailableBalanceEdit: registrant.govxAvailableBalance,
                govxLockedBalanceEdit: registrant.govxLockedBalance,
                utilxAvailableBalanceEdit: registrant.utilxAvailableBalance,
                utilxLockedBalanceEdit: registrant.utilxLockedBalance,
                tokenHolderRewardsEdit: registrant.tokenHolderRewards,
                stakingEarningsEdit: registrant.stakingEarnings,
                referralBonusesEdit: registrant.referralBonuses,
            }));
        } catch (error) {
            this.error = error.message || 'An error occurred while fetching registrants.';
        } finally {
            this.loading = false;
        }
    },
    methods: {
        toggleEdit(registrantId, field) {
            this.registrants = this.registrants.map(registrant => {
                if (registrant._id === registrantId) {
                    registrant.editing = registrant.editing === field ? null : field;
                }
                return registrant;
            });

            this.$nextTick(() => {
                if (this.$refs[`input-${registrantId}-${field}`]) {
                    const input = this.$refs[`input-${registrantId}-${field}`][0];
                    input.focus(); // Focus the input
                    input.select(); // Select the text in the input
                }
            });
        },
        async saveEdit(registrantId, field) {
            const registrant = this.registrants.find(r => r._id === registrantId);
            if (!registrant) return;

            const newValue = registrant[`${field}Edit`]; // Get the edited value

            // Update the local state
            this.registrants = this.registrants.map(r => {
                if (r._id === registrantId) {
                    return { ...r, [field]: newValue, editing: null };
                }
                return r;
            });

            // Send the update to the server
            await this.updateRegistrant(registrantId, field, newValue);
        },
        async updateRegistrant(registrantId, field, value) {
            try {
                const token = localStorage.getItem('authToken'); // Get the JWT token
                if (!token) {
                    throw new Error('No token found. Please log in.');
                }

                const response = await fetch(`${this.url}/admin/users/${registrantId}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ [field]: value }), // Send the field and new value
                });

                if (!response.ok) {
                    throw new Error('Failed to update registrant');
                }

                const data = await response.json();
                //console.log('Registrant updated successfully:', data);

                // Optionally, update the local state with the response data
                this.registrants = this.registrants.map(registrant => {
                    if (registrant._id === registrantId) {
                        return { ...registrant, [field]: value };
                    }
                    return registrant;
                });
            } catch (error) {
                console.error('Error updating registrant:', error);
                this.error = error.message || 'An error occurred while updating the registrant.';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.admindashboard {
    padding: 20px;
    font-family: Arial, sans-serif;

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .registrant-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;


        h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        p {
            margin: 5px 0;
            font-size: 14px;
        }
    }

    &__useritem {
        padding: .2rem;
        cursor: pointer;
        transition: all .5s ease;

        &:hover {
            background: $neon-green;
        }
    }
}
</style>