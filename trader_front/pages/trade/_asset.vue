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
                <List :type="'order book sell'"
                  :headers="['Price(USDT)', `Amount(${asset ? asset.coin : ''})`, 'Total(USDT)']" :color="'#e9485a'"
                  :asset="asset" :interval="3000" />
              </div>
              <div class="index__assetprice" v-if="asset && assets.length">
                <span class="index__assetprice--span1">{{ asset.price }}</span>
                <span class="index__assetprice--span2"> ≈ </span>
                <span class="index__assetprice--span3">${{ asset.price }}</span>
              </div>
              <div class="index__list">
                <List :type="'order book buy'" :color="'#31c48a'" :asset="asset" :interval="1500" />
              </div>
            </div>

            <div class="index__row middle" v-if="asset && assets.length">
              <AssetHeader :asset="asset" />
              <AssetGraph :asset="asset" />
              <SpotTradeArea :asset="asset" :walletTradingFrom="walletTradingFrom" />
            </div>

            <div class="index__row right">
              <div class="index__list">
                <AssetTable />
              </div>
              <div class="index__header">
                <p class="color-primary">Market Trades</p>
              </div>
              <div class="index__list">
                <List :type="'market trades'" :headers="['Price(USDT)', `Amount(${asset ? asset.coin : ''})`, 'Time']" :asset="asset"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index__body index__bottom">
        <div class="assetlistheader index__headertogglearea">

          <div class="assetlistheader__item index__headertogglearea--toggle" :class="{
            current: currentBottomView === 'openorders'
          }" @click="toggleBottomView('openorders')">
            <label class="assetlistheader__item--label">Open Orders (0)</label>
          </div>

          <div class="assetlistheader__item index__headertogglearea--toggle" :class="{
            current: currentBottomView === 'orderhistory'
          }" @click="toggleBottomView('orderhistory')">
            <label class="assetlistheader__item--label">Order History</label>
          </div>

          <div class="assetlistheader__item index__headertogglearea--toggle" :class="{
            current: currentBottomView === 'tradehistory'
          }" @click="toggleBottomView('tradehistory')">
            <label class="assetlistheader__item--label">Trade History</label>
          </div>

          <div class="assetlistheader__item index__headertogglearea--toggle" :class="{
            current: currentBottomView === 'openpositions'
          }" @click="toggleBottomView('openpositions')">
            <label class="assetlistheader__item--label">Open Positions (0)</label>
          </div>

          <div class="assetlistheader__item index__headertogglearea--toggle" :class="{
            current: currentBottomView === 'autotrades'
          }" @click="toggleBottomView('autotrades')">
            <label class="assetlistheader__item--label">Auto trades</label>
          </div>

        </div>

        <div class="assetlistheader index__headerarea" v-if="currentBottomView === 'openorders'">

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Trading Pair</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Date</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Type</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Side</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Price</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Quantity</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Order Amount</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Filled</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Trigger Conditions</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Cancel all</label>
          </div>

        </div>

        <div class="assetlistheader index__headerarea" v-if="currentBottomView === 'orderhistory'">

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Trading Pair</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Date</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Type</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Side</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Average Filled Price</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Price</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Executed</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Quantity</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Order Amount</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Total</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">All</label>
          </div>

        </div>

        <div class="assetlistheader index__headerarea" v-if="currentBottomView === 'tradehistory'">

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Trading Pair</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Date</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Side</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Average Filled Price</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Executed</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Total</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Role</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Fee</label>
          </div>

        </div>

        <div class="assetlistheader index__headerarea" v-if="currentBottomView === 'openpositions'">

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Token</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Position Qty</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Available</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Frozen</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Avg.Buy Price (USDT)</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Est. Cost(USDT)</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Est. Value(USDT)</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Est. PNL(USDT)</label>
          </div>

          <div class="assetlistheader__item index__headerarea--menuitem">
            <label class="assetlistheader__item--label">Est.PNL (%)</label>
          </div>

        </div>

        <div v-if="currentBottomView === 'openorders'">
          <div class="assetlistheader index__headerarea" v-for="order in orders">
            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{ order.tradingPair }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{ formatDate(order.date) }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{ order.type }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{order.side }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{ order.price }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{ order.quantity }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">Order Amount</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label"></label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">{{  }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
              <label class="assetlistheader__item--label">Cancel all</label>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import cryptoassetsMixin from '@/mixins/cryptoassets';
import generalutilities from '@/mixins/generalutilities';

export default {
  mixins: [cryptoassetsMixin, generalutilities],
  data() {
    return {
      currentBottomView: 'openorders', //orderhistory, tradehistory, openpositions
    }
  },
  methods: {
    ...mapActions('order', ['getOrders']),
    toggleBottomView(toggle) {
      this.currentBottomView = toggle;
    }
  },
  computed: {
    ...mapState({
      orders: state => state.order.items,
    }),
    asset() {
      if (this.cryptoassets.length) {
        const asset_id = this.$route.query.asset;
        const asset = this.assets.filter(item => item._id === asset_id)[0];
        asset.graph_symbol = this.removeUnderscore(asset.symbol);
        return asset;
      } else {
        return null;
      }
    },
    walletTradingFrom() {
      return this.$route.query.wallet;
    }
  },
  mounted() {
    this.getOrders();
  }
}
</script>
