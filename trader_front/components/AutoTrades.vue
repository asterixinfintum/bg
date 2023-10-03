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
                <label class="assetlistheader__item--label">Asset Type</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">Initial Capital</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">Asset Quantity</label>
            </div>

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
                <label class="assetlistheader__item--label">{{ item.assetType }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">${{ item.initialTotal }}</label>
            </div>

            <div class="assetlistheader__item index__headerarea--menuitem">
                <label class="assetlistheader__item--label">{{ item.quantity }}</label>
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