<template>
    <div>
        <div class="notavailable slide-in">
            <div class="notavailable__content">
                <div class="notavailable__content--top">
                    <div class="landing__logo notavailable__content--logo">
                        <figure>
                            <img src="/imgs/bvx-logo.png" />
                        </figure>
                        <span>BVX</span>
                    </div>

                    <div class="notavailable__content--close" @click="close">
                        <span>✕</span>
                    </div>
                </div>

                <div class="notavailable__content--text">Not Unlocked yet</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['close'],
}
</script>

<style lang="scss" scoped>
.notavailable {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($black, .7);
    z-index: 2;

    &__content {
        background: $black-background;
        width: 25rem;
        border-radius: 1rem;

        border-radius: 1rem;
        border: 1px solid rgba(1, 1, 1, 0.7);
        padding: 2rem;
        margin-top: 1rem;

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
    }
}
</style>