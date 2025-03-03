<template>
    <div>
        <div class="dashboard">
            <div class="dashboard__content">
                <Header />
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
                                                <span class="action-label">{{ card.action }}</span>
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
                                                <span class="balance-value">${{ balance.value }}</span>
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
                                <AssetSwap />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
//balance/buy more
//governance point balance/buy governance points
//liquidity pool points/add more/increase liquidity pool points


//rewards
export default {
    data() {
        return {
            balanceCards: [
                {
                    symbol: "DGXt",
                    name: "DGXt",
                    balance: [
                        { label: "Balance", value: 0 },
                        { label: "Balance", value: 0 }
                    ],
                    action: "Buy"
                },
                {
                    symbol: "DGXt",
                    name: "DGXt",
                    balance: [
                        { label: "Balance", value: 0 },
                        { label: "Balance", value: 0 }
                    ],
                    action: "Buy"
                },
                {
                    symbol: "DGXt",
                    name: "DGXt",
                    balance: [
                        { label: "Balance", value: 0 },
                        { label: "Balance", value: 0 }
                    ],
                    action: "Buy"
                }
            ],
            rewards: [
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Holder Rewards",
                    value: "$0"
                },
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Staking Rewards",
                    value: "$50"
                },
                {
                    image: "/imgs/ethereum-eth-logo.png",
                    label: "Referral Rewards",
                    value: "$100"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    background: $black-opacity;
    min-height: 100vh;

    &__content {
        padding: 3rem;
    }

    &__contentgrid {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 63rem 25rem;
        grid-gap: 2rem;
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
}
</style>