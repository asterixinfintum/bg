<template>
  <div class="list">
    <div v-if="headers && headers.length && currentpair" class="list__headers list__item">
      <div class="list__item--section1">
        <div class="list__item--left">Price ({{ currentpair.right }})</div>
      </div>

      <div class="list__item--section2">
        <div
          class="list__item--middle"
          v-if="currentpair.assettype === 'commodity'"
        ></div>
        <div class="list__item--middle" v-if="currentpair.assettype === 'commodity'">
          Date ({{ currentpair.left }})
        </div>
        <div class="list__item--middle" v-if="currentpair.assettype !== 'commodity'">
          Amount ({{ currentpair.left }})
        </div>
        <div class="list__item--right" v-if="currentpair.assettype !== 'commodity'">
          Total ({{ currentpair.right }})
        </div>
      </div>
    </div>

    <div v-if="currentpair && currentpair.assettype !== 'commodity'">
      <div
        v-for="order in order_items"
        class="list__item orderbookitem"
        v-if="type !== 'market trades'"
      >
        <div class="list__item--section1">
          <div
            class="list__item--left"
            :style="{
              color,
            }"
          >
            {{ order.price }}
          </div>
        </div>

        <div class="list__item--section2">
          <div class="list__item--middle">
            {{ formatNumberCommasMoreDecims(order.amount) }}
          </div>
          <div class="list__item--right">
            {{ formatNumberCommasMoreDecims(order.total) }}
          </div>
        </div>
      </div>

      <div
        v-for="marketTrade in marketTrades"
        class="list__item orderbookitem"
        v-if="type === 'market trades'"
      >
        <div class="list__item--section1">
          <div
            class="list__item--left"
            :style="{
              color,
            }"
          >
            {{ marketTrade.price }}
          </div>
        </div>

        <div class="list__item--section2">
          <div class="list__item--middle">
            {{ formatNumberCommasMoreDecims(marketTrade.amount) }}
          </div>
          <div class="list__item--right">
            {{ formatNumberCommasMoreDecims(marketTrade.total) }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentpair && currentpair.assettype === 'commodity'">
      <div v-for="value in currentpair.values" class="list__item orderbookitem">
        <div class="list__item--section2">
          <div class="list__item--middle blue">{{ value.value }}</div>
        </div>

        <div class="list__item--section1">
          <div
            class="list__item--left"
            :style="{
              color,
            }"
          ></div>
        </div>

        <div class="list__item--section2">
          <div class="list__item--middle green">{{ value.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

import generalutilities from "@/mixins/generalutilities";

export default {
  mixins: [generalutilities],
  props: ["type", "headers", "color", "asset", "interval", "currentpair"],
  data() {
    return {
      orderBookLength: 20,
      order_items: [],
    };
  },
  mounted() {
    this.triggergen();
  },
  methods: {
    ...mapMutations("cryptoassets", ["SET_SELLORDERS", "SET_BUYORDERS"]),
    triggergen() {
      if (this.currentpair) {
        if (this.currentpair.assettype !== "commodity") {
          setTimeout(() => {
            setInterval(() => {
              this.generateOrderBook();
            }, this.interval);
          }, 600);
        }
      }
    },
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
    randomizeDecimalPoints(num) {
      // Convert the number to a string
      let numStr = num.toString();

      // Split the number into its integer and decimal parts
      let [integerPart, decimalPart] = numStr.split(".");

      // If the number doesn't have a decimal part, initialize it to '0'
      if (!decimalPart) {
        decimalPart = "0";
      }

      // Randomize the decimal part
      let randomizedDecimal = "";
      for (let i = 0; i < decimalPart.length; i++) {
        randomizedDecimal += Math.floor(Math.random() * 10).toString();
      }

      // Return the number with the randomized decimal part
      return parseFloat(integerPart + "." + randomizedDecimal);
    },
    generateOrderBook() {
      const { orderBookLength, asset, generateRandomNumberWithDecimals, color } = this;
      const orderBook = [];

      if (this.currentpair) {
        if (
          this.currentpair.assettype === "crypto" ||
          this.currentpair.assettype === "stock"
        ) {
          const pricenum = this.asset.price;

          for (let i = 0; i < orderBookLength; i++) {
            const amount = generateRandomNumberWithDecimals();
            const price = this.randomizeDecimalPoints(pricenum);
            const total = amount * price;

            const order = {
              price,
              amount,
              total,
              color,
            };

            orderBook.push(order);
          }

          this.order_items = orderBook;
        }
      }
    },
  },
  computed: {
    ...mapState({
      sellorders: (state) => state.cryptoassets.sellorders,
      buyorders: (state) => state.cryptoassets.buyorders,
    }),
    marketTrades() {
      const arr = [...this.sellorders, ...this.buyorders];
      return this.scrambleArray(arr);
    },
  },
  watch: {
    order_items(newValue, oldValue) {
      if (newValue.length && this.type === "order book sell") {
        this.SET_SELLORDERS(newValue);
      }

      if (newValue.length && this.type === "order book buy") {
        this.SET_BUYORDERS(newValue);
      }
    },
    currentpair() {
      this.triggergen();
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: #{scaleValue(10)} 0;
  height: #{scaleValue(450)};
  overflow-x: hidden;
  overflow-y: scroll;

  &__headers {
    @include flex-align;
    font-size: #{scaleValue(11)} !important;
    font-weight: 500;
    margin-bottom: #{scaleValue(10)};
    border-top: $border;
    border-bottom: $border;
    padding: #{scaleValue(10)} 0;
    opacity: 0.6;
  }

  &__item {
    @include flex-align;
    font-size: #{scaleValue(12)};
    font-weight: 500;
    margin-bottom: #{scaleValue(5)};

    &--section1 {
      @include flex-align;
      opacity: 0.9;
    }

    &--section2 {
      @include flex-align;
      opacity: 0.7;
    }

    &--left {
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

  .blue {
    color: $primary-color;
  }

  .green {
    color: $green;
  }
}
</style>
