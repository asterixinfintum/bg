<template>
    <div class="joinprompt">
        <div class="joinprompt__content slide-in">

            <div v-if="pinView">
                <div class="joinprompt__emailview">
                    <div class="joinprompt__content--top">
                        <div class="landing__logo joinprompt__content--logo" @click="$router.push('/')">
                            <figure>
                                <img src="/imgs/bvx-logo.png" />
                            </figure>
                            <span>BVX</span>
                        </div>

                        <div class="joinprompt__content--close" @click="closeEmailView">
                            <span>✕</span>
                        </div>
                    </div>

                    <div class="joinprompt__otpmsg" v-if="otpmsg">
                        <p>We sent am otp to your email</p>
                        <p>Check your spam just in case!</p>
                    </div>

                    <div class="joinprompt__emailinput">
                        <input type="text" v-model="pin" @input="validateEmail" class="white-input" />
                        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                    </div>

                    <div class="joinprompt__emailbutton">
                        <button :disabled="pin.length === 0 || pin.length < 8 || loading" @click="submitPin" :class="{
                            'disabled': !isEmailValid || errorMessage.length > 0 || loading
                        }">{{ loading ? 'Please wait...' : 'Verify Pin' }}</button>
                    </div>
                </div>
            </div>

            <div v-if="emailView">
                <div class="joinprompt__emailview">
                    <div class="joinprompt__content--top">
                        <div class="landing__logo joinprompt__content--logo" @click="$router.push('/')">
                            <figure>
                                <img src="/imgs/bvx-logo.png" />
                            </figure>
                            <span>BVX</span>
                        </div>

                        <div class="joinprompt__content--close" @click="closeEmailView">
                            <span>✕</span>
                        </div>
                    </div>

                    <div class="joinprompt__emailinput">
                        <input type="email" v-model="email" @input="validateEmail" />
                        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                    </div>

                    <div class="joinprompt__emailbutton">
                        <button :disabled="!isEmailValid || errorMessage.length > 0 || loading" @click="submitEmail"
                            :class="{
                                'disabled': !isEmailValid || errorMessage.length > 0 || loading
                            }">{{ loading ? 'Please wait...' : 'Enter Private Sale' }}</button>
                    </div>
                </div>
            </div>

            <div v-if="!emailView && !pinView">
                <div class="joinprompt__content--top">
                    <div class="landing__logo joinprompt__content--logo" @click="$router.push('/')">
                        <figure>
                            <img src="/imgs/bvx-logo.png" />
                        </figure>
                        <span>BVX</span>
                    </div>

                    <div class="joinprompt__content--close" @click="closemethod">
                        <span>✕</span>
                    </div>
                </div>

                <div class="joinprompt__content--header">
                    <h2>Enter the private sale</h2>
                </div>

                <div class="joinprompt__content--sub">
                    <h3>Sign in with your metamask wallet, or via email</h3>
                </div>

                <div class="joinprompt__content--buttons">
                    <button class="metamask" @click="connect">
                        <span>
                            Enter with Metamask
                        </span>
                        <span>
                            <img src="@/assets/svgs/SVG_MetaMask_Icon_Color.svg" />
                        </span>
                    </button>

                    <button class="email" @click="openEmailView">
                        <span>Enter with Email</span>
                        <span class="emaillogo">@</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import smartcontracts from "@/mixins/smartcontracts";
import api from "@/mixins/api";

export default {
    data() {
        return {

        }
    },
    props: ['closemethod'],
    mixins: [smartcontracts, api],
    methods: {
        close() {
            this.closemethod();
        },
        openEmailView() {
            this.emailView = true;
        },
        closeEmailView() {
            this.emailView = false;
        },
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
            if (this.email === '') {
                this.errorMessage = '';
                this.isEmailValid = false;
            } else if (!emailPattern.test(this.email)) {
                this.errorMessage = 'Please enter a valid email address.';
                this.isEmailValid = false;
            } else {
                this.errorMessage = '';
                this.isEmailValid = true;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.joinprompt {
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__content {
        background: $black-background;
        width: 25rem;
        border-radius: 1rem;

        border-radius: 1rem;
        border: 1px solid rgba(1, 1, 1, 0.7);
        padding: 2rem;
        margin-top: 6rem;

        &--top {

            display: flex;
            justify-content: space-between;
        }

        &--close {
            font-size: 1rem;
            color: $white;
            height: 2rem;
            width: 2rem;
            border-radius: 100%;
            cursor: pointer;
            background: rgba($black, .4);

            display: flex;
            justify-content: center;
            align-items: center;
        }

        &--logo {
            margin-bottom: 3rem;
        }

        &--header {
            margin-bottom: 1rem;
        }

        &--sub {
            font-size: .8rem;
            color: rgba($white, .5);
            margin-bottom: 3rem;

            & h3 {
                font-weight: 400;
            }
        }

        &--buttons {
            display: flex;
            flex-direction: column;

            & button {
                outline: none;
                border: none;
                border-radius: 3rem;
                background: transparent;
                border: 1px solid rgba($primary-orange, .4);
                font-weight: 400;
                color: $primary-orange;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                font-size: .8rem;
                font-weight: 500;

                & img {
                    height: 1rem;
                    width: 1rem;
                }

                &:nth-child(1) {
                    margin-bottom: 1rem
                }

                & span {
                    display: flex;
                    align-items: center;

                    &.emaillogo {
                        margin-left: .2rem;
                    }
                }

                &.metamask {
                    background: linear-gradient(to right, #f79236, #cd5322);
                    color: $white
                }

                &.email {
                    background: rgba($white, 1);
                    color: $black;
                }
            }
        }
    }

    &__emailinput {
        width: 100%;
        margin-bottom: 1rem;

        & input {
            background: rgba($primary-orange, .4);
            width: 100%;
            border-radius: 1rem;
            color: $white;
            font-size: 1rem;
            outline: none;
            border: none;
            padding: 1rem;

            &.white-input {
                background: rgba($white, .9);
                color: $black;
            }
        }
    }

    &__emailbutton {
        width: 100%;

        & button {
            width: 100%;
            border-radius: 3rem;
            background: $black;
            color: $white;
            font-size: 1rem;
            cursor: pointer;
            outline: none;
            border: none;
            padding: 1rem;

            &.disabled {
                opacity: .4;
            }
        }
    }

    &__otpmsg {
        margin-bottom: 1rem;
    }
}
</style>