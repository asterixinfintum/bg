<template>
  <div class="index">
    <div class="index__content">
      <div class="index__top">
        <HeaderBox />

        <div class="index__body" v-if="asset">
          <div class="index__rows">
            <div class="index__row left">
              <div class="index__header">
                <p class="color-primary">Order Book</p>
              </div>
              <div class="index__list">
                <div v-if="currentpair">
                  <List
                    :type="'order book sell'"
                    :headers="[
                      'Price(USDT)',
                      `Amount(${asset ? asset.coin : ''})`,
                      'Total(USDT)',
                    ]"
                    :color="'#FF3F34'"
                    :asset="asset"
                    :interval="900"
                    :currentpair="currentpair"
                  />
                </div>
              </div>
              <div class="index__assetprice landing-green" v-if="asset && assets.length">
                <span class="index__assetprice--span1">{{ asset.price }}</span>
                <span class="index__assetprice--span2"> ≈ </span>
                <span class="index__assetprice--span3">${{ asset.price }}</span>
              </div>
              <div class="index__list">
                <div v-if="currentpair">
                  <List
                    :type="'order book buy'"
                    :color="'#39FF14'"
                    :asset="asset"
                    :interval="900"
                    :currentpair="currentpair"
                  />
                </div>
              </div>
            </div>

            <div class="index__row middle" v-if="asset && assets.length">
              <div v-if="currentpair">
                <AssetHeader :asset="asset" :currentpair="currentpair" />
              </div>
              <div v-if="currentpair">
                <AssetGraph :currentpair="currentpair" />
              </div>
              <SpotTradeArea
                :asset="asset"
                :currentpair="currentpair"
                :walletTradingFrom="walletTradingFrom"
              />
            </div>

            <div class="index__row right">
              <div class="index__list">
                <AssetTable
                  :currentpairs="availASSETPAIRStotrade"
                  :cryptopairs="availCRYPTOtotrade"
                  :stockpairs="stockpairs"
                  :commoditiespairs="commoditiespairs"
                  :setcurrentpair="setcurrentpair"
                />
              </div>
              <div class="index__header">
                <p class="color-primary">Market Trades</p>
              </div>
              <div class="index__list">
                <div v-if="currentpair">
                  <List
                    :type="'market trades'"
                    :headers="[
                      'Price(USDT)',
                      `Amount(${asset ? asset.coin : ''})`,
                      'Time',
                    ]"
                    :asset="asset"
                    :currentpair="currentpair"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index__body index__bottom">
        <div class="assetlistheader index__headertogglearea">
          <div
            class="assetlistheader__item index__headertogglearea--toggle"
            :class="{
              current: currentBottomView === 'openorders',
            }"
            @click="toggleBottomView('openorders')"
          >
            <label class="assetlistheader__item--label"
              >Open Orders ({{ orders.length }})</label
            >
          </div>

          <div
            class="assetlistheader__item index__headertogglearea--toggle"
            :class="{
              current: currentBottomView === 'orderhistory',
            }"
            @click="toggleBottomView('orderhistory')"
          >
            <label class="assetlistheader__item--label">Order History</label>
          </div>

          <div
            class="assetlistheader__item index__headertogglearea--toggle"
            :class="{
              current: currentBottomView === 'tradehistory',
            }"
            @click="toggleBottomView('tradehistory')"
          >
            <label class="assetlistheader__item--label">Trade History</label>
          </div>

          <div
            class="assetlistheader__item index__headertogglearea--toggle"
            :class="{
              current: currentBottomView === 'openpositions',
            }"
            @click="toggleBottomView('openpositions')"
          >
            <label class="assetlistheader__item--label">Open Positions (0)</label>
          </div>

          <div
            class="assetlistheader__item index__headertogglearea--toggle"
            :class="{
              current: currentBottomView === 'autotrades',
            }"
            @click="toggleBottomView('autotrades')"
          >
            <label class="assetlistheader__item--label">Auto trades</label>
          </div>
        </div>

        <div v-if="currentBottomView === 'openorders'">
          <OpenOrders :items="openorders" />
        </div>

        <div v-if="currentBottomView === 'orderhistory'">
          <OrderHistory :items="orderhistory" />
        </div>

        <div v-if="currentBottomView === 'tradehistory'">
          <TradeHistory :items="tradehistory" />
        </div>

        <div v-if="currentBottomView === 'autotrades'">
          <AutoTrades :items="autotrades" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import cryptoassetsMixin from "@/mixins/cryptoassets";
import generalutilities from "@/mixins/generalutilities";

export default {
  mixins: [cryptoassetsMixin, generalutilities],
  data() {
    return {
      currentBottomView: "openorders", //orderhistory, tradehistory, openpositions
      currentpair: null,
    };
  },
  methods: {
    ...mapActions("trade", ["getassetpairs", "getpairsbytype"]),
    ...mapActions("order", ["getorders", "getautotrades", "gettrades"]),
    ...mapActions("wallet", ["getwallets"]),
    toggleBottomView(toggle) {
      this.currentBottomView = toggle;
    },
    gettradedata() {
      const { getassetpairs, getpairsbytype, initcurrentpair } = this;
      const { assettype, asset, autotrader } = this.$route.query;
      getpairsbytype({ assettype: "crypto" })
        .then((ctds) => {
          if (!asset) {
            initcurrentpair(ctds[0]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      getpairsbytype({ assettype: "stock" });
      getpairsbytype({ assettype: "commodity" });

      if (assettype && asset) {
        getassetpairs({ assetid: asset, assettype })
          .then((ctds) => {
            if (assettype === "crypto") {
              const { availASSETPAIRStotrade } = this;
              initcurrentpair(availASSETPAIRStotrade[0]);
            }

            if (assettype === "stock") {
              initcurrentpair(ctds[0]);
            }

            if (assettype === "commodity") {
              initcurrentpair(ctds[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    initcurrentpair(pair) {
      const { getLeftAndRight } = this;

      if (pair.assettype === "crypto") {
        const { left, right } = getLeftAndRight(pair.symbol);

        this.currentpair = {
          ...pair,
          left,
          right,
        };
      }

      if (pair.assettype === "stock") {
        const left = pair.symbol;
        const right = "USDT";

        this.currentpair = {
          ...pair,
          left,
          right,
        };
      }

      if (pair.assettype === "commodity") {
        const { setcommoditypair } = this;
        setcommoditypair(pair);
      }
    },
    setcurrentpair(pair) {
      const { getLeftAndRight } = this;

      if (pair.assettype === "crypto") {
        const { left, right } = getLeftAndRight(pair.symbol);

        this.currentpair = {
          ...pair,
          left,
          right,
        };
      }

      if (pair.assettype === "stock") {
        const left = pair.symbol;
        const right = "USDT";

        this.currentpair = {
          ...pair,
          left,
          right,
        };
      }

      if (pair.assettype === "commodity") {
        const { setcommoditypair } = this;
        setcommoditypair(pair);
      }

      const { assets } = this;
      const asset = assets.filter((asset) => asset.coin === this.currentpair.left)[0];

      if (asset) {
        const queries = { ...this.$route.query };
        queries.assettype = asset.assetType;
        queries.asset = asset._id;

        this.$router.push({ name: "trade-asset", query: queries });
      }
    },
    getLeftAndRight(str) {
      const idx = str.indexOf("/");
      return {
        left: str.substring(0, idx),
        right: str.substring(idx + 1),
      };
    },
    setcommoditypair(pair) {
      const left = pair.symbol;
      const right = "USDT";
      let graphvalue;

      if (pair.currency_base === "Crude Oil Brent") {
        graphvalue = `FRED:POILBREUSDM`;
      }

      if (pair.currency_base === "Coffee") {
        graphvalue = `NASDAQ:NQCI3RMER`;
      }

      if (pair.currency_base === "Wheat") {
        graphvalue = `SKILLING:WHEAT`;
      }

      if (pair.currency_base === "Crude Oil") {
        graphvalue = `TVC:USOIL`;
      }

      if (pair.currency_base === "Corn") {
        graphvalue = `ECONOMICS:USGSC`;
      }

      if (pair.currency_base === "Sugar") {
        graphvalue = `ECONOMICS:WWSPI`;
      }

      if (pair.currency_base === "Copper") {
        graphvalue = `FRED:WPUSI019011`;
      }

      if (pair.currency_base === "Cotton") {
        graphvalue = `FRED:PCOTTINDUSDM`;
      }

      if (pair.currency_base === "Natural Gas") {
        graphvalue = `ECONOMICS:USRSEGAMM`;
      }

      this.currentpair = {
        ...pair,
        left,
        right,
        graphvalue,
      };
    },
  },
  computed: {
    ...mapState({
      orders: (state) => state.order.orders,
      autotrades: (state) => state.order.autotrades,
      trades: (state) => state.order.trades,
      assetpairs: (state) => state.trade.assetpairs,
      cryptopairs: (state) => state.trade.cryptopairs,
      stockpairs: (state) => state.trade.stockpairs,
      commoditiespairs: (state) => state.trade.commoditiespairs,
    }),
    openorders() {
      const { orders } = this;
      const openorders = orders.filter((order) => order.filled !== order.quantity);
      return openorders;
    },
    orderhistory() {
      const { orders } = this;
      return orders;
    },
    tradehistory() {
      const { trades } = this;
      return trades;
    },
    openpositions() {},
    autotrader() {
      const autotraderon = this.$route.query.autotrader === "true" ? true : false;
      return autotraderon;
    },
    availASSETPAIRStotrade() {
      const { assetpairs, assets, getLeftAndRight } = this;

      if (assetpairs.length && assetpairs[0].assettype === "crypto") {
        const avail = assets.filter((asset) => asset.assetType === "crypto");
        const availcrysymbs = avail.map((asset) => asset.symbol);

        const availassetpairs = assetpairs.filter((assetpair) => {
          const { symbol } = assetpair;
          const { left, right } = getLeftAndRight(symbol);
          if (availcrysymbs.includes(left) && availcrysymbs.includes(right)) {
            return assetpair;
          }
        });

        return availassetpairs;
      }

      return assetpairs;
    },
    availCRYPTOtotrade() {
      const { cryptopairs, assets, autotrader, getLeftAndRight } = this;
      const avail = assets.filter((asset) => asset.assetType === "crypto");
      const availcrysymbs = avail.map((asset) => asset.symbol);

      const availcrypairs = cryptopairs.filter((cryptopair) => {
        const { symbol } = cryptopair;
        const { left, right } = getLeftAndRight(symbol);
        if (availcrysymbs.includes(left) && availcrysymbs.includes(right)) {
          return cryptopair;
        }
      });

      if (autotrader) {
        return cryptopairs;
      }

      if (!autotrader) {
        return availcrypairs;
      }
    },
    asset() {
      if (this.assets.length) {
        const asset_id = this.$route.query.asset;
        const asset = this.assets.filter((item) => item._id === asset_id)[0];
        asset.graph_symbol = asset.symbol;
        return asset;
      } else {
        return null;
      }
    },
    walletTradingFrom() {
      return this.$route.query.wallet;
    },
  },
  mounted() {
    this.gettradedata();
    this.getorders();
    this.gettrades();
    this.getautotrades();

    this.getwallets();
  },
};
</script>
