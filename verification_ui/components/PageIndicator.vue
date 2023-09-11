<template>
    <div>
        <div class="pageindicator layout-padding" :class="{ transparent }">
            <div class="pageindicator__header">
                <h2 class="pageindicator__header--h2">{{ page_name }}</h2>
            </div>
            <div class="pageindicator__btns" v-if="!nobtns">
                <button class="btn padded-btn colored-btn">Deposit</button>
                <button class="btn padded-btn greyed-btn">Withdrawal</button>
                <button class="btn padded-btn greyed-btn">Send</button>
                <button class="btn padded-btn greyed-btn">Transfer</button>
                <button class="btn padded-btn greyed-btn">Transaction History</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['page_name', 'nobtns', 'transparent']
}
</script>

<style lang="scss">
.pageindicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $light-black;

    &.transparent {
        background: transparent;
    }

    &__header {

        &--h2 {
            font-weight: 500;
            font-size: #{scaleValue(30)};
        }
    }

    &__btns {
        font-weight: 600;
        
        & button {
            margin-left: #{scaleValue(10)};
            font-size: #{scaleValue(14)};
            padding-top: #{scaleValue(13)};
            padding-bottom: #{scaleValue(13)};
        }
    }
}
</style>