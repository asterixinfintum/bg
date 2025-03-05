<template>
    <div class="landing__header">
        <div class="landing__header--name">
            <div class="landing__logo" @click="$router.push('/')">
                <figure>
                    <img src="/imgs/bvx-logo.png" />
                </figure>
                <span>BVX</span>
            </div>
        </div>

        <div class="landing__headermenu">
            <div class="landing__headermenu--item" v-if="!userIdentifier" @click="scrollToDiv('thesis')"
                :class="{ 'currentMenu': currentMenu == 'thesis' }">Thesis</div>
            <div class="landing__headermenu--item" v-if="!userIdentifier" @click="scrollToDiv('markets')"
                :class="{ 'currentMenu': currentMenu == 'markets' }">Markets</div>

            <div class="landing__headermenu--item join" v-if="!userIdentifier && openjoin" @click="openjoin">Join</div>

            <div class="landing__headermenu--item joined join" v-if="userIdentifier">{{ clipString(userIdentifier) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMenu: ""
        }
    },
    props: [
        "openjoin"
    ],
    computed: {
        userIdentifier() {
            return this.$store.state.userIdentifier;
        },
    },
    methods: {
        setCurrentMenu(currentM) {
            this.currentMenu = currentM
        },
        clipString(s, firstChars = 5, lastChars = 5, ellipsis = "...") {
            if (s.length <= firstChars + lastChars) {
                return s;
            }
            return `${s.slice(0, firstChars)}${ellipsis}${s.slice(-lastChars)}`;
        },
        scrollToDiv(id) {
            const targetDiv = document.getElementById(id);
            targetDiv.scrollIntoView({ behavior: 'smooth' });
            this.setCurrentMenu(id)
        }
    }
}
</script>

<style lang="scss">
.currentMenu {
    color: $primary-orange;
}
</style>