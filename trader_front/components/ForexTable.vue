<template>
  <div>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget" id="forextable"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span class="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
    <!-- TradingView Widget END -->
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: document.getElementById('forextable').clientWidth,
      height: document.getElementById('forextable').clientHeight,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
  }
};
</script>

<style lang="scss" scoped>
    .tradingview-widget-container {
        position: relative;
        overflow: hidden;
        overflow-x: hidden;
        height: #{scaleValue(480)};

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            background: $white;
            width: 100%;
            height: #{scaleValue(40)};
        }
    }
    .tradingview-widget-container__widget {
        height: #{scaleValue(500)};
        width: #{scaleValue(720)};
        position: relative;
        overflow: hidden;
    }
</style>
