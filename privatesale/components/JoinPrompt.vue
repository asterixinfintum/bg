<template>
    <div class="joinprompt">
        <div class="joinprompt__content slide-in">

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
                <h2>Join the private sale</h2>
            </div>

            <div class="joinprompt__content--sub">
                <h3>Sign in with your metamask wallet, or join via email</h3>
            </div>

            <div class="joinprompt__content--buttons">
                <button class="metamask" @click="connect">
                    <span>
                        Join with Metamask
                    </span>
                    <span>
                        <img src="@/assets/svgs/SVG_MetaMask_Icon_Color.svg" />
                    </span>
                </button>

                <!--<button class="email">
                    <span>Join with Email</span>
                    <span class="emaillogo">@</span>
                </button>-->
            </div>
        </div>
    </div>
</template>

<script>
import smartcontracts from "@/mixins/smartcontracts";

export default {
    props: ['closemethod'],
    mixins: [smartcontracts],
    methods: {
        close() {
            this.closemethod();
        }
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
}
</style>