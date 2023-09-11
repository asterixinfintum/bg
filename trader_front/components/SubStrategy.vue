<template>
    <div>
        <div class="autotradesettings__suboptions">
            <div class="autotradesettings__option sub">
                <label class="autotradesettings__option--label">{{ sub }}</label>
                <div class="toggle-switch off" @click="toggleSubStrategies(sub)" :class="{
                    on: subStrategies.includes(sub)
                }">
                    <span class="toggle-switch-button" :class="{
                        off: !subStrategies.includes(sub),
                        on: subStrategies.includes(sub)
                    }"></span>
                </div>
            </div>

            <div v-if="subStrategies.includes(sub)">

                <div class="autotradesettings__optioncontainer" v-for="option in options">
                    <div class="autotradesettings__option sub-option">
                        <label class="autotradesettings__option--label">{{ option }}</label>
                        <div class="autotradesettings__option--inputarea">
                            <input type="number" :name="option" @input="handleInput" :value="subStrategyData[`${option}`]"/>
                        </div>
                    </div>

                    <div class="autotradesettings__slider">
                        <div class="autotradesettings__sliderbody">
                            <div class="autotradesettings__slidercontainer">
                                <div class="autotradesettings__slider">
                                    <div class="autotradesettings__slidertrack" :style="{
                                        width: calculateSliderWidth(subStrategyData[`${option}`]) + '%'
                                    }">
                                    </div>
                                    <div class="autotradesettings__sliderthumb"
                                        :style="{ left: calculateSliderWidth(subStrategyData[`${option}`]) + '%' }"></div>
                                </div>
                                <input type="range" min="0" max="100" 
                                    @input="(event) => handleSlideInput(event, option)"
                                    :value="subStrategyData[`${option}`]"
                                    class="autotradesettings__sliderinput">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            subStrategyData: {}
        }
    },
    props: [
        'main',
        'sub',
        'options',
        'subStrategies',
        'toggleSubStrategies',
    ],
    computed: {
        ...mapState({
            autotradestrategies: state => state.order.autotradestrategies
        })
    },
    methods: {
        ...mapActions('order', ['addAutoTradeStrategy']),
        handleInput(event) {
            const { main, sub, addAutoTradeStrategy } = this;
            const name = event.srcElement.name;
            const value = event.target.value;
            const subStrategyData = this.subStrategyData;

            subStrategyData.strategy = main;
            subStrategyData.substrategy = sub
            subStrategyData[`${name}`] = value;
            this.subStrategyData = subStrategyData;

            //addAutoTradeStrategy(this.subStrategyData);
        },
        handleSlideInput(event, name) {
            const { main, sub, addAutoTradeStrategy } = this;
            const value = event.target.value;
            const subStrategyData = this.subStrategyData;

            subStrategyData.strategy = main;
            subStrategyData.substrategy = sub
            subStrategyData[`${name}`] = value;
            this.subStrategyData = subStrategyData;

            //addAutoTradeStrategy(this.subStrategyData);
        },
        initSubStrategy () {
            const { main, sub, options } = this;
            const subStrategyData = { strategy: main, substrategy: sub }

            options.forEach(option => {
                subStrategyData[`${option}`] = 0;
            });

            this.subStrategyData = subStrategyData;
        },
        calculateSliderWidth(option) {
            return (parseInt(option) / 100) * 100;
        }
    },
    watch: {},
    mounted() {
        this.initSubStrategy();
    }
}
</script>