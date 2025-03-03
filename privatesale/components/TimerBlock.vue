<template>
    <div>
        <div class="landing__timerblock">
            <span class="timenum" :class="{
                'outer': numIndex < initialNumbers.length - 4,
                'top': numIndex === initialNumbers.length - 4,
                'middle': numIndex === initialNumbers.length - 3,
                'bottom': numIndex === initialNumbers.length - 2,

            }" v-for="(initialNumber, numIndex) in initialNumbers" :key="numIndex">
                {{ initialNumber }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            initialNumbers: ['0', '0', '0', '0']
        }
    },
    props: [
        "interval",
        "timePoint"
    ],
    mounted() {
        this.initTimer();
        this.countDown();
    },
    methods: {
        initTimer() {
            const { timePoint } = this;

            let currentValue;

            if (!timePoint) {
                currentValue = 0;
                this.$set(this.initialNumbers, this.initialNumbers.length - 3, currentValue);
            }

            const now = new Date();

            switch (timePoint) {
                case 'seconds':
                    currentValue = now.getSeconds();
                    break;
                case 'minutes':
                    currentValue = now.getMinutes();
                    break;
                case 'hours':
                    currentValue = now.getHours();
                    break;
                default:
                    currentValue = 0;
                    return;
            }

            if (this.initialNumbers.length >= 3) {
                this.$set(this.initialNumbers, this.initialNumbers.length - 3, currentValue);
                this.$set(this.initialNumbers, this.initialNumbers.length - 2, currentValue);
                this.$set(this.initialNumbers, this.initialNumbers.length - 1, currentValue);
            } else {
                console.error('initialNumbers array must have at least 3 elements.');
            }
        },
        countDown() {
            const { interval, timePoint } = this;

            if (interval) {
                setInterval(() => {
                    const now = new Date();

                    let currentValue;
                    switch (timePoint) {
                        case 'seconds':
                            currentValue = now.getSeconds();
                            break;
                        case 'minutes':
                            currentValue = now.getMinutes();
                            break;
                        case 'hours':
                            currentValue = now.getHours();
                            break;
                        default:
                            console.error('Invalid timePoint provided. Use "seconds", "minutes", or "hours".');
                            return;
                    }

                    if (currentValue != this.currentValue) {
                        this.currentValue = currentValue;
                        this.initialNumbers.push(currentValue);
                    }
                }, 1000);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.timenum {
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    opacity: .4;
    z-index: 1;

    transform: scale(.9);
    transition: all .5s ease;
    flex-shrink: 0;

    position: absolute;
    bottom: 0;

    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    &.outer {
        z-index: -1;
        display: none;
    }

    &.top {
        transform: scale(.9) translateY(-6.4rem);
        opacity: .4;
    }

    &.middle {
        opacity: 1;
        transform: scale(1) translateY(-3rem);
        color: $primary-orange;
    }

    &.bottom {
        transform: scale(0.9) translateY(-.3rem);
        opacity: .4;
    }
}
</style>