<template>
  <div>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget" id="forextable"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span class="blue-text">Track all markets</span>
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
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: document.getElementById("forextable").clientWidth,
      height: document.getElementById("forextable").clientHeight,
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
          symbols: [
            {
              name: "FOREXCOM:SPXUSD",
              displayName: "S&P 500",
            },
            {
              name: "FOREXCOM:NSXUSD",
              displayName: "US 100",
            },
            {
              name: "FOREXCOM:DJI",
              displayName: "Dow 30",
            },
            {
              name: "INDEX:NKY",
              displayName: "Nikkei 225",
            },
            {
              name: "INDEX:DEU40",
              displayName: "DAX Index",
            },
            {
              name: "FOREXCOM:UKXGBP",
              displayName: "UK 100",
            },
          ],
        },
        {
          name: "Futures",
          originalName: "Futures",
          symbols: [
            {
              name: "CME_MINI:ES1!",
              displayName: "S&P 500",
            },
            {
              name: "CME:6E1!",
              displayName: "Euro",
            },
            {
              name: "COMEX:GC1!",
              displayName: "Gold",
            },
            {
              name: "NYMEX:CL1!",
              displayName: "WTI Crude Oil",
            },
            {
              name: "NYMEX:NG1!",
              displayName: "Gas",
            },
            {
              name: "CBOT:ZC1!",
              displayName: "Corn",
            },
          ],
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            {
              name: "CBOT:ZB1!",
              displayName: "T-Bond",
            },
            {
              name: "CBOT:UB1!",
              displayName: "Ultra T-Bond",
            },
            {
              name: "EUREX:FGBL1!",
              displayName: "Euro Bund",
            },
            {
              name: "EUREX:FBTP1!",
              displayName: "Euro BTP",
            },
            {
              name: "EUREX:FGBM1!",
              displayName: "Euro BOBL",
            },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            {
              name: "FX:EURUSD",
              displayName: "EUR to USD",
            },
            {
              name: "FX:GBPUSD",
              displayName: "GBP to USD",
            },
            {
              name: "FX:USDJPY",
              displayName: "USD to JPY",
            },
            {
              name: "FX:USDCHF",
              displayName: "USD to CHF",
            },
            {
              name: "FX:AUDUSD",
              displayName: "AUD to USD",
            },
            {
              name: "FX:USDCAD",
              displayName: "USD to CAD",
            },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
    });

    this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
  },
};
</script>

<style lang="scss" scoped>
.tradingview-widget-container {
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  height: #{scaleValue(480)};

  @media only screen and (max-width: $breakpoint-mobile-large) {
    height: #{scaleValue(1800)};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba($landing-primary, 1),
      rgba($landing-primary, 0.8)
    );
    width: 100%;
    height: #{scaleValue(40)};
  }
}

.tradingview-widget-container__widget {
  height: #{scaleValue(500)};
  width: #{scaleValue(720)};
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: $breakpoint-mobile-large) {
    height: #{scaleValue(2000)};
    width: auto;
  }
}
</style>
