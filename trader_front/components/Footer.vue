<template>
  <div class="footer" id="footer">
    <div class="footer__toparea">
      <figure class="footer__logo">BVX</figure>
      <div class="footer__links">
        <div class="footer__linksarea">
          <h3 class="footer__linksarea--h3"></h3>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
        </div>
        <div class="footer__linksarea">
          <h3 class="footer__linksarea--h3"></h3>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
        </div>
      </div>
    </div>
    <div class="footer__disclaimers">
      <div class="footer__disclaimers--content">
        <p>
          BVX offerings are intricate tools that carry a high possibility of swift
          financial loss due to leverage. 77.1% of retail investor accounts suffer
          financial losses when engaging in trades with bvx. It is crucial to ponder
          whether you grasp the operation of the markets and if you are in a position to
          shoulder the substantial risk of losing your funds. Kindly make sure you have a
          comprehensive understanding of the risks entailed by consulting our detailed
          risk warning.
        </p>

        <p>
          Bvx is a trading identity of Voltex Singapore, and bvx.com/ie is a domain run by
          Voltex Singapore, a constituent of StoneX Group Inc. Voltex Singapore is a
          Cyprus Investment Firm (CIF) officially registered with the Department of
          Registrar of Companies and Official Receiver under the Registration Number
          HE409708, and endorsed and overseen by the Cyprus Securities & Exchange
          Commission (CySEC) with the license number 400/21. Voltex Singapore is
          affiliated with the Investor Compensation Fund (ICF) and has its official
          headquarters at 10 Marina Bay Street, #15-02, Central Tower, Singapore 018983.
        </p>

        <p>
          Voltex Singapore might offer third-party content on this website, which might
          encompass details including but not limited to the financial market scenarios.
          This content is purely informational and should never be perceived as containing
          financial counsel, investment endorsements, investment analysis, or invitations
          for any financial instrument transactions. Any decisions regarding specific
          financial actions should be made by the client after their personal evaluation.
          Voltex Singapore does not guarantee the preciseness or completeness of the given
          details, nor any financial losses that might arise from any investment grounded
          on recommendations, projections, or other supplied details. Always consult
          independent advice to determine your aptness for speculation in associated
          markets and your capacity to undertake related risks. No obligation lies with us
          to refresh any given content. Views expressed might be personal to the
          contributor and might not mirror the opinions of Voltex Singapore.
        </p>

        <p>
          By leveraging passporting, Voltex Singapore can deliver its services and
          offerings across borders to the subsequent European Economic Area ("EEA")
          nations: Austria, Bulgaria, Croatia, Denmark, Estonia, Finland, France, Germany,
          Greece, Hungary, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg,
          Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia,
          Spain, Sweden.
        </p>
      </div>
    </div>
    <!---<div class="footer__namearea">
      <h2 class="footer__name">
        <span>G</span>
        <span>e</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>t</span>
        <span>t</span>
        <span>0</span>
      </h2>
    </div>--->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  z-index: 2;
  padding: $paddingside;
  padding-top: #{scaleValue(70)};
  padding-bottom: #{scaleValue(70)};
  background: rgba($black, 0.8);
  background: $black-opacity;
  font-family: "Space Grotesk", sans-serif;
  color: $white;
  transition: all 0.5s ease;
  opacity: 0;

  &__logo {
    color: $primary-orange;
    font-weight: 500;
    font-size: #{scaleValue(30)};

    @media only screen and (max-width: $breakpoint-tablet) {
      font-size: #{scaleValue(120)};
    }
  }

  @media only screen and (max-width: 1024px) {
    opacity: 1;
    padding: $paddingsidem;
    padding-top: #{scaleValue(200)};
    padding-bottom: #{scaleValue(200)};
  }

  @media only screen and (max-width: 430px) {
    opacity: 1;
    padding: $paddingsidem;
    padding-top: #{scaleValue(200)};
    padding-bottom: #{scaleValue(200)};
  }

  &__toparea {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__links {
    display: flex;

    @media only screen and (max-width: 430px) {
      flex-direction: column;
    }
  }

  &__linksarea {
    display: flex;
    flex-direction: column;
    margin-left: #{scaleValue(100)};

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
      margin-right: #{scaleValue(100)};
      margin-top: #{scaleValue(100)};
    }

    &--h3 {
      font-size: 1.3rem;
      margin-bottom: #{scaleValue(20)};
      font-weight: 700;

      @media only screen and (max-width: 1025px) {
        font-size: 2rem;
        margin-bottom: #{scaleValue(100)};
      }

      @media only screen and (max-width: 430px) {
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--link {
      font-size: 1rem;
      margin-bottom: #{scaleValue(20)};
      font-weight: 500;
      cursor: pointer;
      color: $primary-orange;

      @media only screen and (max-width: 1024px) {
        font-size: 2rem;
        margin-bottom: #{scaleValue(100)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: #{scaleValue(70)};
      }
    }
  }

  &__namearea {
    display: flex;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
      margin-top: #{scaleValue(200)};
    }
  }

  &__name {
    color: $primary-orange;
    text-transform: uppercase;
    width: 100%;
    font-size: 13rem;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Space Grotesk", sans-serif;

    @media only screen and (max-width: 430px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 4rem;
    }
  }

  &__disclaimers {
    font-size: 1rem;
    line-height: 1.3rem;
  }
}
</style>
