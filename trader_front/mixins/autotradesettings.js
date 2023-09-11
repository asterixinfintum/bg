export default {
    data() {
        return {
            strategies: [],
            subStrategies: [],
            shortTermMovingAveragePeriod: 0,
            longTermMovingAveragePeriod: 0,
            channelPeriod: 0,
            distanceFromChannelForBreakoutConfirmation: 0
        }
    },
    methods: {
        toggleStrategies(strategy) {
            if (this.strategies.includes(strategy)) {
                const strategies = this.strategies;
                strategies.pop(strategy);
                this.strategies = strategies;
            } else {
                const strategies = this.strategies;
                strategies.push(strategy);
                this.strategies = strategies;
            }
        },
        toggleSubStrategies(substrategy) {
            if (this.subStrategies.includes(substrategy)) {
                const subStrategies = this.subStrategies;
                subStrategies.pop(substrategy);
                this.subStrategies = subStrategies;
            } else {
                const subStrategies = this.subStrategies;
                subStrategies.push(substrategy);
                this.subStrategies = subStrategies;
            }
        }
    },
    computed: {
        shortTermMovingAveragePeriodTrackWidth() {
            const { shortTermMovingAveragePeriod } = this;
            return (shortTermMovingAveragePeriod / 100) * 100;
        },
        shortTermMovingAveragePeriodThumbPos() {
            return this.shortTermMovingAveragePeriod;
        },
        longTermMovingAveragePeriodTrackWidth() {
            const { longTermMovingAveragePeriod } = this;
            return (longTermMovingAveragePeriod / 100) * 100;
        },
        longTermMovingAveragePeriodThumbPos() {
            return this.longTermMovingAveragePeriod;
        },
        channelPeriodWidth() {
            const { channelPeriod } = this;
            return (channelPeriod / 100) * 100

        },
        channelPeriodThumbPos() {
            return this.channelPeriod
        },
        distanceFromChannelForBreakoutConfirmationWidth() {
            const { distanceFromChannelForBreakoutConfirmation } = this;
            return (distanceFromChannelForBreakoutConfirmation / 100) * 100; 
        },
        distanceFromChannelForBreakoutConfirmationThumbPos() {
            return this.distanceFromChannelForBreakoutConfirmation;
        }
    }
}