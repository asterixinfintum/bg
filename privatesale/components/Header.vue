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

        <div class="landing__header--burger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="landing__headermenu" :class="{
            'invisible': !menuopen
        }">
            <div class="landing__headermenu--item" v-if="!userIdentifier" @click="scrollToDiv('thesis')"
                :class="{ 'currentMenu': currentMenu == 'thesis' }">Thesis</div>
            <div class="landing__headermenu--item" v-if="!userIdentifier" @click="scrollToDiv('markets')"
                :class="{ 'currentMenu': currentMenu == 'markets' }">Markets</div>

            <div class="landing__headermenu--item" v-if="userIdentifier"
                :class="{ 'currentMenu': currentMenu == 'markets' }">Logout</div>

            <div class="landing__headermenu--item join" v-if="!userIdentifier && openjoin" @click="openjoin">Enter</div>

            <div class="landing__headermenu--item joined join" v-if="userIdentifier">{{ clipString(userIdentifier) }}
            </div>

            <div class="landing__headermenu--X" @click="toggleMenu">X</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMenu: "",
            menuopen: false
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
    watch: {
        userIdentifier(newValue) {
            console.log(newValue, 'value changed');
        }
    },
    mounted() {
        if (!this.userIdentifier) {
            //this.$router.push('/');
        }
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
            this.setCurrentMenu(id);
            this.menuopen = false;
        },
        toggleMenu() {
            this.menuopen = !this.menuopen;
        }
    }
}
</script>

<style lang="scss">
.currentMenu {
    color: $primary-orange;
}
</style>