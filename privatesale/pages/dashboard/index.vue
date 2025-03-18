<template>
    <div>
        <div class="dashboard">
            <div class="dashboard__content">
                <Header />
                <div v-if="notavailable">
                    <NotAvailable :close="toggleNotAvail" />
                </div>


                <div class="dashboard__banner">
                    <div class="dashboard__banner--left">
                        <h2>Private Sale Liquidity Launch Soon</h2>
                        <h3>$10,000 balance liqidity pool whitelist still open</h3>
                        <h4>Get involved</h4>
                    </div>

                    <div class="dashboard__banner--right">
                        <div class="landing__timercontent">
                            <div class="landing__timercontent--header">
                                <span>Private sale ends in:</span>
                            </div>

                            <div class="landing__timerblocks">
                                <TimerBlock :timePoint="'day'" />

                                <div class="landing__timerblock--demarc">
                                    <span></span>
                                    <span></span>
                                </div>

                                <TimerBlock :interval="3600000" :timePoint="'hours'" />

                                <div class="landing__timerblock--demarc">
                                    <span></span>
                                    <span></span>
                                </div>

                                <TimerBlock :interval="60000" :timePoint="'minutes'" />

                                <div class="landing__timerblock--demarc">
                                    <span></span>
                                    <span></span>
                                </div>

                                <TimerBlock :interval="1000" :timePoint="'seconds'" />
                            </div>
                        </div>
                    </div>
                </div>


                <div class="dashboard__contentgrid">
                    <div class="dashboard__left">
                        <div class="dashboard__section">
                            <div class="dashboard__balances">
                                <div class="dashboard__header">
                                    <h2>Token Balances</h2>
                                </div>

                                <div class="dashboard__grid">
                                    <div v-for="(card, index) in balanceCards" :key="index"
                                        class="dashboard__balance dashboard__card">
                                        <div class="dashboard__balance--top">
                                            <div class="dashboard__balance--symbol">
                                                <figure class="dashboard__logofig">
                                                    <img src="/imgs/bvx-logo.png" alt="" />
                                                </figure>
                                                <span class="name">{{ card.name }}</span>
                                            </div>

                                            <div class="dashboard__balance--action">
                                                <span class="action-label" @click="card.clickMethod">{{ card.action
                                                }}</span>
                                                <span class="action">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2"
                                                        viewBox="0 0 24 24" stroke-linecap="round"
                                                        stroke-linejoin="round" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                                        <polyline points="7 7 17 7 17 17"></polyline>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="dashboard__balance--bottom">
                                            <div v-for="(balance, i) in card.balance" :key="i"
                                                class="dashboard__balance--figure">
                                                <span class="balance-label">{{ balance.label }}</span>
                                                <span class="balance-value">${{ balance.label === "BVXt Balance" ?
                                                    userDetails.bvxtBalance : 0 }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dashboard__section">
                            <div class="dashboard__balances">
                                <div class="dashboard__header">
                                    <h2>Rewards</h2>
                                </div>

                                <div class="dashboard__grid">
                                    <div v-for="(reward, index) in rewards" :key="index"
                                        class="dashboard__rewrd dashboard__card">
                                        <div class="dashboard__rewrd--top">
                                            <figure class="dashboard__logofig">
                                                <img :src="reward.image" :alt="reward.label" />
                                            </figure>
                                            <span class="reward-label">{{ reward.label }}</span>
                                        </div>

                                        <div class="dashboard__balance--bottom">
                                            <div class="dashboard__balance--figure">
                                                <span class="balance-label"></span>
                                                <span class="balance-value">{{ reward.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dashboard__right">
                        <div class="launchpagebuy">
                            <div class="launchpagebuy__content">
                                <div v-if="userDetails.btcAddress">
                                    <div>
                                        <div class="dashboard__btc">
                                            <span class="dashboard__btc--address">{{ userDetails.btcAddress }}</span>

                                            <button class="dashboard__btc--copybtn" @click="copyAddress">{{
                                                copyAddressLabel }}</button>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="isIdentifierEmail" class="or-label">
                                    <span>Or</span>
                                </div>

                                <div>
                                    <AssetSwap />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import smartcontracts from "@/mixins/smartcontracts";
import api from "@/mixins/api";

export default {
    mixins: [smartcontracts, api],
    computed: {

    },
    methods: {
        toggleNotAvail() {
            this.notavailable = !this.notavailable
        }
    },
    data() {
        return {
            notavailable: false,
            balanceCards: [
                {
                    symbol: "BVXt",
                    name: "BVXt",
                    tier: "Tier 1", // Private sale token
                    balance: [
                        { label: "BVXt Balance", value: 0 },
                        { label: "Locked Balance", value: 0 },
                    ],
                    action: "Purchase DGXt",
                    clickMethod: () => {

                    }
                },
                {
                    symbol: "GOVX",
                    name: "Governance Token",
                    tier: "Tier 2", // Governance token
                    balance: [
                        { label: "Available Balance", value: 0 },
                        { label: "Locked Balance", value: 0 }
                    ],
                    action: "Stake GOVX",
                    clickMethod: () => {
                        this.toggleNotAvail();
                    }// Governance tokens are often staked for voting rights
                },
                {
                    symbol: "UTILX",
                    name: "Utility Token",
                    tier: "Tier 3", // Utility token
                    balance: [
                        { label: "Available Balance", value: 0 },
                        { label: "Locked Balance", value: 0 }
                    ],
                    action: "Use UTILX",
                    clickMethod: () => {
                        this.toggleNotAvail();
                    } // Utility tokens are used for protocol features
                }
            ],
            rewards: [
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Token Holder Rewards",
                    value: "$0",
                    status: "Pending" // Added to indicate reward status
                },
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Staking Earnings",
                    value: "$0",
                    status: "Claimable" // Added to indicate reward status
                },
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Referral Bonuses",
                    value: "$0",
                    status: "Claimed" // Added to indicate reward status
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    //background: $black-opacity;
    min-height: 100vh;

    &__content {
        padding: 3rem;
        margin-top: 6rem;
    }

    &__contentgrid {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 63rem 25rem;
        grid-gap: 2rem;
    }

    &__banner {
        //min-height: 6rem;
        border-radius: 1rem;
        border: .1px solid rgba($white, .1);
        height: 15rem;
        overflow: hidden;

        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem;
        position: relative;

        &--left {

            & h2 {
                font-weight: 400;
                font-size: 2.2rem;
                color: rgba($primary-orange, 0.9)
            }

            & h3 {
                font-weight: 400;
                font-size: 1.3rem;
                margin-top: 1rem;
            }

            & h4 {
                font-weight: 400;
                font-size: 1.1rem;
                margin-top: 1rem;
                color: rgba($white, .2);
            }
        }

        &--right {
            width: 30rem;

            & div.landing__timercontent {
                border: none !important;
                padding-top: 6rem;
            }
        }
    }

    &__left {}

    &__right {
        //overflow: hidden;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    &__header {
        margin-bottom: 1rem;

        & h2 {
            font-family: "Space Grotesk", sans-serif;
            font-weight: 500;
            font-size: 1.5rem;
        }
    }

    &__card {
        border-radius: .5rem;
        padding: 1.2rem;
        border: .3px solid rgba($white, .2);
        font-family: "Space Grotesk", sans-serif;

        height: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    &__balance {

        &--top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        &--bottom {
            display: flex;
            justify-content: space-between;
        }

        &--symbol {
            display: flex;
            align-items: center;
        }

        &--figure {
            display: flex;
            flex-direction: column;

            & span {

                &.balance-label {
                    font-size: .8rem;
                }

                &.balance-value {
                    font-size: 1.5rem;
                }
            }
        }

        &--action {
            cursor: pointer;

            & span {

                &.action-label {
                    color: $primary-orange;
                }

                &.action {
                    color: $primary-orange;
                }
            }
        }
    }

    &__section {
        box-shadow: 0 0 5px rgba($primary-orange, 0.6),
            0 0 10px rgba($primary-orange, 0.4),
            0 0 15px rgba($primary-orange, 0.2);
        padding: 2rem;
        border-radius: 1rem;
        background: #0d0e0f;
        margin-bottom: 2rem;
    }

    &__rewrd {

        &--top {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            & span {

                &.reward-label {
                    font-size: 1.1rem;
                }
            }
        }

        &--bottom {}
    }

    &__logofig {
        height: 1rem;
        width: 1rem;
        margin-right: .5rem;

        & img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    &__btc {
        display: flex;
        flex-direction: column;
        position: relative;
        background: #161618;
        border-radius: 0.4rem;
        padding: 1.5rem;

        & span {
            color: rgba($primary-orange, 0.9);
        }


        & button {
            background: #39FF14;
            cursor: pointer;
            border: none;
            outline: none;
            border-radius: .6rem;
            padding: .7rem .5rem;
            width: 8rem;
            font-weight: 600;
            margin-top: 1rem;
            font-size: .8rem;
        }
    }
}

.or-label {
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: .8rem;
}
</style>