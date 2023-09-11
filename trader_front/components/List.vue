<template>
    <div class="list">
        <div v-if="headers && headers.length" class="list__headers list__item">
            <div class="list__item--section1">
                <div class="list__item--left">{{ headers[0] }}</div>
            </div>
            
            <div class="list__item--section2">
                <div class="list__item--middle">{{ headers[1] }}</div>
                <div class="list__item--right">{{ headers[2] }}</div>
            </div>
        </div>

        <div v-for="order in order_items" class="list__item orderbookitem" v-if="type !== 'market trades'">
            <div class="list__item--section1">
                <div class="list__item--left" :style="{
                    color
                }">{{ order.price }}</div>
            </div>
            
            <div class="list__item--section2">
                <div class="list__item--middle">{{ formatNumberCommasMoreDecims(order.amount) }}</div>
                <div class="list__item--right">{{ formatNumberCommasMoreDecims(order.total) }}</div>
            </div>
        </div>

        <div v-for="marketTrade in marketTrades" class="list__item orderbookitem" v-if="type === 'market trades'">
            <div class="list__item--section1">
                <div class="list__item--left" :style="{
                    color
                }">{{ marketTrade.price }}</div>
            </div>
            
            <div class="list__item--section2">
                <div class="list__item--middle">{{ formatNumberCommasMoreDecims(marketTrade.amount) }}</div>
                <div class="list__item--right">{{ formatNumberCommasMoreDecims(marketTrade.total) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

import generalutilities from '@/mixins/generalutilities';

export default {
    mixins: [generalutilities],
    props: ['type', 'headers', 'color', 'asset', 'interval'],
    data() {
        return {
            orderBookLength: 20,
            order_items: []
        }
    },
    mounted() {
        setTimeout(() => {
            setInterval(() => {
                this.generateOrderBook();
            }, this.interval);
        }, 5000)
    },
    methods: {
        ...mapMutations('cryptoassets', ['SET_SELLORDERS', 'SET_BUYORDERS']),
        generateRandomNumberWithDecimals() {
            const min = 3000;
            const max = 40000;
            const decimalPlaces = 8;

            const randomNumber = Math.random() * (max - min) + min;
            const roundedNumber = Number(randomNumber.toFixed(decimalPlaces));
            return roundedNumber;
        },
        scrambleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
  
            return arr;
        },
        generateOrderBook() {
            const { orderBookLength, asset, generateRandomNumberWithDecimals, color } = this;
            const orderBook = [];

            for (let i = 0; i < orderBookLength; i++) {
                const amount = generateRandomNumberWithDecimals();
                const price = asset.price;
                const total = (amount * price);

                const order = {
                    price,
                    amount,
                    total,
                    color
                };

                orderBook.push(order);
            }


            this.order_items = orderBook;
        }
    },
    computed: {
        ...mapState({
          sellorders: state => state.cryptoassets.sellorders,
          buyorders: state => state.cryptoassets.buyorders
        }),
        marketTrades() {
            const arr = [...this.sellorders, ...this.buyorders];
            return this.scrambleArray(arr);
        }
    },
    watch: {
        order_items(newValue, oldValue) {
            if (newValue.length && this.type === 'order book sell') {
                this.SET_SELLORDERS(newValue)
            }

            if (newValue.length && this.type === 'order book buy') {
                this.SET_BUYORDERS(newValue)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    padding: #{scaleValue(10)} 0;

    &__headers {
        @include flex-align;
        font-size: #{scaleValue(11)} !important;
        font-weight: 500;
        margin-bottom: #{scaleValue(10)};
        border-top: $border;
        border-bottom: $border;
        padding: #{scaleValue(10)} 0;
        opacity: .6;
    }

    &__item {
        @include flex-align;
        font-size: #{scaleValue(12)};
        font-weight: 500;
        margin-bottom: #{scaleValue(5)};

        &--section1 {
            @include flex-align;
            opacity: .9;
        }

        &--section2 {
            @include flex-align;
            opacity: .7;
        }

        &--left{
            overflow: hidden;
            width: #{scaleValue(100)};
            flex-shrink: 0;
        }

        &--middle {
            overflow: hidden;
            width: #{scaleValue(100)};
            flex-shrink: 0;
            margin-right: #{scaleValue(5)};
        }

        &--right {
            overflow: hidden;
            width: #{scaleValue(100)};
            flex-shrink: 0;
        }
    }
}
</style>