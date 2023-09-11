<template>
    <div class="headerbox">
        <CurrencyEscalator />
        <Header />
    </div>
</template>

<script>
import clientMixin from '@/mixins/client';

export default {
    mixins: [clientMixin],
    //v-for="warning in client.warnings"
}
</script>

<style lan="scss" scoped>
.headerbox {
    position: relative;
    z-index: 11;
}
</style>