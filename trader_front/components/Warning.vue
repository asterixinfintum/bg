<template>
    <div class="warning">
        <!--<div class="warning__body">
            <span class="warning__body--warningtext">{{ warning_text }}</span>
            <span>
                <button class="warning__body--btn">{{ btn_text }}</button>
            </span>
        </div>-->
        <div class="warning__body">
            <span class="warning__body--warningtext">Your ID document expires soon. Please upload a new ID before the current one expires, or your Binance account will be restricted to “Withdrawal Only” mode.</span>
            <span>
                <button class="warning__body--btn btn">Start Now > </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['warning_text', 'btn_text']
}
</script>

<style lang="scss" scoped>
.warning {
    position: relative;
    background: $warning-background;
    width: 100%;
    color: $black;
    padding: #{scaleValue(6)} #{scaleValue(30)};
    line-height: #{scaleValue(24)};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: #{scaleValue(6)};
        height: 100%;
        background: $warning-red;
    }

    &__body {
        display: flex;
        flex-direction: column;
        font-size: #{scaleValue(14)};

        &--warningtext {
            color: $black;
            font-weight: 400;
        }

        &--btn {
            color: $warning-red;
            font-size: #{scaleValue(13)};
        }
    }
}
</style>