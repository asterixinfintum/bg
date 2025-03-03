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
            <div class="landing__headermenu--item">Roadmap</div>
            <div class="landing__headermenu--item">Thesis</div>
            <div class="landing__headermenu--item">Roadmap</div>

            <div class="landing__headermenu--item join" v-if="!userIdentifier && openjoin" @click="openjoin">Join</div>

            <div class="landing__headermenu--item joined join" v-if="userIdentifier">{{ clipString(userIdentifier) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "openjoin"
    ],
    computed: {
        userIdentifier() {
            return this.$store.state.userIdentifier;
        },
    },
    methods: {
        clipString(s, firstChars = 5, lastChars = 5, ellipsis = "...") {
            if (s.length <= firstChars + lastChars) {
                return s;
            }
            return `${s.slice(0, firstChars)}${ellipsis}${s.slice(-lastChars)}`;
        }
    }
}
</script>