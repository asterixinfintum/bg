<template>
    <div>
        <div class="landing">
            <Header :openjoin="openjoin" />

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

            <div class="landing__content">
                <div class="landing__jumbotronparent">
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

                <div class="landing__sections">
                    <div class="landing__section glowy-top">
                        <div></div>
                        <h2 class="landing__grid--header" id="thesis">Thesis</h2>

                        <div class="landing__grid landing__grid--1">

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Liquidity Mining</h2>
                                    <p>We believe incentivizing liquidity providers is key to a thriving decentralized
                                        economy. By rewarding participation, we aim to create a robust and dynamic
                                        trading environment for all users.</p>
                                </div>
                            </div>

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Staking Contracts</h2>
                                    <p>Our vision is to create sustainable value through staking programs. By enabling
                                        users to earn rewards while securing the network, we aim to drive long-term
                                        ecosystem growth.</p>
                                </div>
                            </div>

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Token/Protocol Launchpads</h2>
                                    <p>We aim to empower innovation by providing secure, user-friendly launchpads. Our
                                        goal is to help projects thrive and drive mass adoption of blockchain
                                        technology.</p>
                                </div>
                            </div>
                        </div>

                        <div></div>
                        <h2 class="landing__grid--header" id="markets">Markets</h2>

                        <div class="landing__grid landing__grid--2">
                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Token/Protocol Launchpads</h2>
                                    <p>Our vision includes building a platform where innovative projects can launch
                                        tokens and protocols with ease. By creating a secure and accessible ecosystem,
                                        we aim to empower creators and investors alike to drive the next wave of
                                        blockchain innovation.</p>
                                </div>
                            </div>

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Staking Programs</h2>
                                    <p>We’re committed to developing staking solutions that allow users to earn rewards
                                        while supporting network security and growth. These programs are designed to
                                        create long-term value for participants and strengthen the ecosystem.</p>
                                </div>
                            </div>
                        </div>

                        <div class="landing__grid landing__grid--3">
                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Liquidity Mining</h2>
                                    <p>To foster a thriving decentralized economy, we’re building liquidity mining
                                        initiatives that reward users for contributing to ecosystem liquidity. These
                                        programs will help create a more robust and dynamic trading environment.</p>
                                </div>
                            </div>

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>Trading Strategies and Utilities</h2>
                                    <p>Our goal is to provide traders with advanced tools and strategies to navigate the
                                        market effectively. By integrating cutting-edge technology, we aim to enhance
                                        trading experiences and unlock new opportunities for users.</p>
                                </div>
                            </div>

                            <div class="landing__griditem">
                                <div class="landing__griditem--header">
                                    <div class="landing__griditem--logo"></div>
                                    <div class="landing__griditem--spots">
                                        <span v-for="(spot, index) in spots" :key="index" class="spot"></span>
                                    </div>
                                </div>
                                <div class="landing__griditem--content">
                                    <h2>AI Foundations</h2>
                                    <p>We’re laying the groundwork for AI-powered solutions that will revolutionize how
                                        blockchain applications are built and used. By integrating AI, we aim to create
                                        smarter, more efficient systems that push the boundaries of innovation.</p>
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
    mounted() {
        document.addEventListener("DOMContentLoaded", () => {
            const items = document.querySelectorAll(".landing__griditem");

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            //observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.5,
                }
            );

            items.forEach((item) => {
                observer.observe(item);
            });
        });
    },
    computed: {
        spots() {
            return Array.from({ length: 1000 }, (_, index) => index + 1);
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
    z-index: 5;
}

.joinclose {
    position: fixed;
    display: none
}
</style>