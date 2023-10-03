<template>
    <div>
        <div class="assetlistheader index__headerarea">
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

            <!--<div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">Trigger Conditions</label>
            </div>-->

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">Cancel all</label>
            </div>
        </div>
        <div class="assetlistheader index__headerarea" v-for="item in items">
            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.tradingPair }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ formatDate(item.date) }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.type }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.side }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.price }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.quantity }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.orderAmount }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.filled }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">Cancel</label>
            </div>
        </div>
    </div>
</template>

<script>
import generalutilities from '@/mixins/generalutilities';

export default {
    props: ['items'],
    mixins: [generalutilities]
}
</script>