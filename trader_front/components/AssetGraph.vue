<template>
    <div class="traderview">
        <div id="tradingview_08df5"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow"
                target="_blank"><span class="blue-text">Track all markets</span></a> on TradingView</div>
    </div>
</template>

<script>
export default {
    props: ['asset'],
    mounted() {
       if (TradingView !== undefined) {
            new TradingView.widget({
                "width": document.getElementById('tradingview_08df5').clientWidth,
                "height": document.getElementById('tradingview_08df5').clientHeight,
                "symbol": `POLONIEX:${this.asset.graph_symbol}`,
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "3",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_08df5"
            });
        }
    }
}
</script>
 
<style lang="scss" scoped>
.traderview {
    height: 45vh;
}

#tradingview_08df5 {
    height: 45vh
}
</style>