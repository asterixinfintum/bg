<template>
    <div>
        <div class="walletdeposit">
            <div class="content">
                <HeaderBox />

                <div class="content__body">
                    <div class="container">
                        <SideNav />

                        <div class="layout-stretch">
                            <PageIndicator :page_name="'Deposit Crypto'" :transparent="true" :nobtns="true" />


                            <div class="layout-padding">
                                <div class="walletdeposit__content">

                                    <div class="walletdeposit__contentarea">


                                        <!--<h2 class="walletdeposit__content--h2" :class="{
                                            smaller: deposit_asset
                                        }">Select Coin</h2>

                                        <div class="walletdeposit__select">
                                            <div class="walletdeposit__selectarea" @click="selectAsset('Bitcoin')">
                                                <figure>
                                                    <img src="https://assets.coincap.io/assets/icons/256/btc.png"/>
                                                </figure>
                                                <label>BTC</label>
                                            </div>

                                            <div class="walletdeposit__selectarea" @click="selectAsset('TetherUSDT')">
                                                <figure>
                                                    <img src="https://raw.githubusercontent.com/Idle-Labs/idle-dashboard/master/public/images/tokens/USDT.svg"/>
                                                </figure>
                                                <label>USDT</label>
                                            </div>

                                            <div class="walletdeposit__selectarea" @click="selectAsset('Ethereum')">
                                                <figure>
                                                        <img src="https://assets.coincap.io/assets/icons/256/eth.png"/>
                                                </figure>
                                                <label>ETH</label>
                                            </div>
                                        </div>-->

                                        <div class="walletdeposit__select walletdeposit__selected">
                                            <div class="walletdeposit__selectarea selected">
                                                <figure class="selected-img">
                                                    <img src="https://assets.coincap.io/assets/icons/256/btc.png" />
                                                </figure>
                                                <label class="selected-symbol">BTC</label>

                                                <label class="selected-name">Bitcoin</label>
                                            </div>
                                        </div>

                                        <div class="layout-padding-2"></div>

                                        <div class="walletdeposit__selectednetwork">
                                            <div class="walletdeposit__networklist">
                                                <div class="walletdeposit__networkarea">
                                                    <label class="label">BTC</label>
                                                    <label class="name">Bitcoin Network</label>
                                                </div>
                                            </div>
                                        </div>

                                        <!--<div class="walletdeposit__select walletdeposit__selected">

                                            <div class="walletdeposit__selectarea selected" v-if="deposit_asset === 'Bitcoin'">
                                                <figure class="selected-img">
                                                    <img src="https://assets.coincap.io/assets/icons/256/btc.png"/>
                                                </figure>
                                                <label class="selected-symbol">BTC</label>

                                                <label class="selected-name">Bitcoin</label>
                                            </div>

                                            <div class="walletdeposit__selectarea selected" v-if="deposit_asset === 'TetherUSDT'">
                                                <figure class="selected-img">
                                                    <img src="https://raw.githubusercontent.com/Idle-Labs/idle-dashboard/master/public/images/tokens/USDT.svg"/>
                                                </figure>
                                                <label class="selected-symbol">USDT</label>

                                                <label class="selected-name">TetherUSDT</label>
                                            </div>

                                            <div class="walletdeposit__selectarea selected" v-if="deposit_asset === 'Ethereum'">
                                                <figure class="selected-img">
                                                    <img src="https://assets.coincap.io/assets/icons/256/eth.png"/>
                                                </figure>
                                                <label class="selected-symbol">ETH</label>

                                                <label class="selected-name">Ethereum</label>
                                            </div>

                                        </div>-->

                                        <!--<h2 class="walletdeposit__content--h2" :class="{
                                            smaller: deposit_network
                                        }">Select Network</h2>

                                        <div class="walletdeposit__networklist" v-if="deposit_asset === 'Bitcoin'"
                                            @click="selectNetwork('Bitcoin Network')">
                                            <div class="walletdeposit__networkarea">
                                                <label class="label">BTC</label>
                                                <label class="name">Bitcoin Network</label>
                                            </div>
                                        </div>

                                        <div class="walletdeposit__networklist"
                                            v-if="deposit_asset === 'TetherUSDT' || deposit_asset === 'Ethereum'"
                                            @click="selectNetwork('Ethereum (ERC20)')">
                                            <div class="walletdeposit__networkarea">
                                                <label class="label">ETH</label>
                                                <label class="name">Ethereum (ERC20)</label>
                                            </div>
                                        </div>

                                        <div class="walletdeposit__selectednetwork">
                                            <div class="walletdeposit__networklist"
                                                v-if="deposit_network === 'Bitcoin Network'">
                                                <div class="walletdeposit__networkarea walletdeposit__selectednetworkarea">
                                                    <label class="label">BTC</label>
                                                    <label class="name">Bitcoin Network</label>
                                                </div>
                                            </div>

                                            <div class="walletdeposit__networklist"
                                                v-if="deposit_network === 'Ethereum (ERC20)'">
                                                <div class="walletdeposit__networkarea walletdeposit__selectednetworkarea">
                                                    <label class="label">ETH</label>
                                                    <label class="name">Ethereum (ERC20)</label>
                                                </div>
                                            </div>
                                        </div>-->

                                        <h2 class="walletdeposit__content--h2">Deposit Address</h2>

                                        <div class="walletdeposit__address"
                                            v-if="deposit_address !== 'Wallet not found' && deposit_address !== null">
                                            <div class="walletdeposit__address--body">
                                                <p class="walletdeposit__address--header">Address</p>
                                                <p class="walletdeposit__address--addrstring">{{ deposit_address }}</p>
                                            </div>

                                            <span class="walletdeposit__address--copysvg" @click="copyAddress">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-p5ejok">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M9 3h11v13h-3V6H9V3zM4 8v13h11V8.02L4 8z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>

                                        <div class="walletdeposit__address"
                                            v-if="deposit_address === 'Wallet not found' || deposit_address === null">
                                            <div class="walletdeposit__address--body">
                                                <p class="walletdeposit__address--header">Address</p>
                                                <p class="walletdeposit__address--addrstring loader-button"></p>
                                            </div>
                                        </div>

                                        <!--<div class="walletdeposit__address" v-if="deposit_network">
                                            <div class="walletdeposit__address--body">
                                                <p class="walletdeposit__address--header">Address</p>
                                                <p class="walletdeposit__address--addrstring">{{ deposit_address }}</p>
                                            </div>

                                            <span class="walletdeposit__address--copysvg" @click="copyAddress">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    class="css-p5ejok">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M9 3h11v13h-3V6H9V3zM4 8v13h11V8.02L4 8z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>-->
                                    </div>

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
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            deposit_asset: null,
            deposit_network: null
        }
    },
    methods: {
        selectAsset(asset) {
            this.deposit_asset = asset;
        },
        selectNetwork(network) {
            this.deposit_network = network;
        },
        copyAddress() {
            const textToCopy = this.deposit_address;

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert("Deposit address has been copied!");
                })
                .catch(function (error) {
                    alert("Unable to copy text: " + error);
                });
        },
        returnWalletAddress() {

        }
    },
    watch: {},
    computed: {
        ...mapState({
            client: state => state.auth.client,
            bitcoinWallets: state => state.auth.client ? state.auth.client.userWalletsBTC : [],
            client_token: state => state.auth.client_token,
            wallettypes: state => state.wallet.wallettypes
        }),
        deposit_address() {
            const { currentpath, bitcoinWallets } = this;
            let deposit_address;

            if (bitcoinWallets.length) {
                if (currentpath === 'fiatandspot') {
                    deposit_address = bitcoinWallets.filter(
                        bitcoinWallet => bitcoinWallet.walletType === 'fiat/spot'
                    )[0].bitcoinAddress

                    return deposit_address
                }

                if (currentpath === 'margin') {
                    deposit_address = bitcoinWallets.filter(
                        bitcoinWallet => bitcoinWallet.walletType === 'margin'
                    )[0].bitcoinAddress


                    return deposit_address
                }
            }

            return null
        },
        currentpath() {
            return this.$route.params.deposit
        }
    }
}
</script>

<style lang="scss" scoped>
.walletdeposit {

    &__content {
        display: flex;

        &--h2 {
            font-weight: 500;
            margin-bottom: #{scaleValue(20)};
            font-size: #{scaleValue(20)};
            transition: all .4s ease;

            &:not(:first-child) {
                margin-top: #{scaleValue(30)};
            }

            &.smaller {
                font-size: #{scaleValue(13)};
                color: rgba($second-border-color, .7);
            }
        }
    }

    &__contentarea {
        position: relative;
        width: #{scaleValue(800)};
    }

    &__select {
        display: flex;
        align-items: center;
    }

    &__selected {
        margin-top: #{scaleValue(15)};
    }

    &__selectarea {
        display: flex;
        align-items: center;

        padding: #{scaleValue(8)} #{scaleValue(15)};
        margin-right: #{scaleValue(15)};
        border-radius: #{scaleValue(3)};
        cursor: pointer;
        background: rgba($faded-black, .5);
        transition: all .4s ease;

        &:hover {
            background: $faded-black;
        }

        &.selected {
            background: transparent;
            padding-left: 0;
        }

        & figure {
            width: #{scaleValue(16)};
            height: #{scaleValue(16)};
            margin-right: #{scaleValue(5)};
            cursor: pointer;

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }

            &.selected-img {
                width: #{scaleValue(20)};
                height: #{scaleValue(20)};
            }
        }

        & label {
            font-size: #{scaleValue(13)};
            font-weight: 400;
            text-transform: uppercase;
            color: rgba($second-border-color, .7);
            cursor: pointer;

            &.selected-symbol {
                font-size: #{scaleValue(16)};
                color: rgba($white, 1);
                margin-right: #{scaleValue(8)};
            }

            &.selected-name {
                font-size: #{scaleValue(13)};
                text-transform: capitalize;
                color: rgba($second-border-color, .4);
            }
        }
    }

    &__networkarea {
        display: flex;
        flex-direction: column;
        background: rgba($faded-black, .5);
        padding: #{scaleValue(11)} #{scaleValue(15)};
        cursor: pointer;
        transition: .4s ease;

        &:hover {
            background: $faded-black;
        }

        & label {
            cursor: pointer;

            &.label {
                font-size: #{scaleValue(15)};
                margin-bottom: #{scaleValue(5)};
                font-weight: 600;
            }

            &.name {
                font-size: #{scaleValue(13)};
                color: rgba($second-border-color, .7);
                text-transform: capitalize;
            }
        }
    }

    &__networklist {

        &:not(:last-child) {
            margin-bottom: #{scaleValue(20)};
        }
    }

    &__selectednetworkarea {
        flex-direction: row;
        align-items: center;
        border: $border;
        background: transparent;
        border-radius: #{scaleValue(3)};

        &:hover {
            background: transparent;
        }

        & label {
            display: flex;
            align-items: center;

            &.label {
                margin-bottom: 0;
                margin-right: #{scaleValue(7)};
            }
        }
    }

    &__address {
        background: rgba($faded-black, .9);
        padding: #{scaleValue(14)};
        border-radius: #{scaleValue(3)};
        display: flex;
        align-items: center;

        &--body {
            display: flex;
            flex-direction: column;
        }

        &--header {
            font-size: #{scaleValue(12)};
            color: rgba($white, .5);
            margin-bottom: #{scaleValue(7)};
        }

        &--addrstring {
            font-size: #{scaleValue(12)};
        }

        &--copysvg {
            cursor: pointer;
            padding: #{scaleValue(7)};
            background: rgba($traderview-background, .5);
            border-radius: #{scaleValue(3)};
            margin-left: #{scaleValue(10)};

            & svg {
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};
                color: $index-body;
            }
        }
    }
}
</style>