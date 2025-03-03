<template>
    <div>
        <div class="landing">
            <Header :openjoin="openjoin"/>

            <div class="landing__content">
                <div class="landing__jumbotron">
                    <div class="landing__htags landing__jumbotron--area">
                        <div class="landing__htag main">
                            <h1>
                                <span>Be among the first to shape the future of decentralized trading</span>
                            </h1>
                        </div>

                        <div class="landing__htag sub">
                            <h2>
                                <span>Secure your position at the forefront of innovation in synthetic markets,
                                    tokenized assets, and Web3 protocol trade strategies</span>
                            </h2>
                        </div>
                    </div>

                    <div class="landing__timer landing__jumbotron--area">
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

                            <div class="landing__timercontent--join">
                                <button @click="openjoin">
                                    <span>&rarr;</span>

                                    <span>Join</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div :class="{
                'joinopen': joinprompt_open,
                'joinclose': !joinprompt_open
            }">
                <PopUpBody>
                    <div>
                        <JoinPrompt :closemethod="closejoin" />
                    </div>
                </PopUpBody>
            </div>

        </div>
    </div>
</template>

<script>
import { ethers } from "ethers";
import { mapState, mapGetters, mapActions } from 'vuex';
import PopUpBody from "../components/PopUpBody.vue";
import JoinPrompt from "../components/JoinPrompt.vue";

export default {
    data() {
        return {
            joinprompt_open: false
        }
    },
    methods: {
        closejoin() {
            this.joinprompt_open = false;
        },
        openjoin() {
            this.joinprompt_open = true;
        },
    }
}
</script>

<style lang="scss" scoped>
.joinopen {
    position: fixed;
    display: block;
}

.joinclose {
    position: fixed;
    display: none
}
</style>