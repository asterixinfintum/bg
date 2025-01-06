<template>
  <div>
    <div class="launchpad">
      <HeaderLanding :coloredbackground="true" />

      <div class="container__content">
        <div class="launchpad__jumbotron">
          <div class="launchpad__jumbotron--header fade-in-up">
            <h2 class="launchpad__jumbotron--h2">Engage Our Token Launch Program</h2>
            <p class="launchpad__jumbotron--p">Lock assets and get airdrops on BVX</p>
          </div>

          <div class="launchpad__jumbogrid">
            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>$ 729,000</span>
              <span>Currently Locked</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>$ 137,576,034</span>
              <span>Funds Raised</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>72</span>
              <span>Projects Launched/Funded</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>Over 80,000</span>
              <span>participants</span>
            </div>
          </div>
        </div>

        <div class="launchpad__boxes">
          <div
            class="launchpad__box"
            v-for="(launchpadItem, launchpadItemindex) in launchpadItems"
          >
            <div class="launchpad__box--header">
              <div class="launchpad__box--details">
                <figure>
                  <img :src="'/imgs/' + launchpadItem.logo" />
                </figure>

                <h2>{{ launchpadItem.name }}</h2>

                <span class="status">{{ launchpadItem.status }}</span>
              </div>

              <div class="launchpad__box--threedot">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="launchpad__box--grid">
              <div class="launchpad__box--detail">
                <span>Launch Date</span>
                <span>{{ launchpadItem.launchDate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Conclusion Date</span>
                <span>{{ launchpadItem.conclusionDate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Airdrop Date</span>
                <span>{{ launchpadItem.airdropDate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Total Airdrops</span>
                <span>{{ launchpadItem.totalAirdrops }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      launchpadItems: [
        {
          logo: "bnb-bnb-logo.png",
          name: "VintageCoin Launch",
          status: "Completed",
          launchDate: "November 10, 2024",
          conclusionDate: "December 15, 2024",
          airdropDate: "January 5, 2024",
          totalAirdrops: "$ 150,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "RetroToken Launch",
          status: "Completed",
          launchDate: "March 15, 2024",
          conclusionDate: "April 20, 2024",
          airdropDate: "May 1, 2024",
          totalAirdrops: "$ 200,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "LegacyCoin Launch",
          status: "Completed",
          launchDate: "July 25, 2024",
          conclusionDate: "August 30, 2024",
          airdropDate: "September 10, 2024",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "solana-sol-logo.png",
          name: "MoonPaw Launch",
          status: "Upcoming",
          launchDate: "January 10, 2025",
          conclusionDate: "February 15, 2025",
          airdropDate: "March 1, 2025",
          totalAirdrops: "$ 300,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "ShibaNova Launch",
          status: "Upcoming",
          launchDate: "March 20, 2025",
          conclusionDate: "April 25, 2025",
          airdropDate: "May 5, 2025",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "DogeRocket Launch",
          status: "Upcoming",
          launchDate: "May 15, 2025",
          conclusionDate: "June 30, 2025",
          airdropDate: "July 10, 2025",
          totalAirdrops: "$ 750,000",
        },
        {
          logo: "polkadot-new-dot-logo.png",
          name: "FrogoCoin Launch",
          status: "Upcoming",
          launchDate: "July 20, 2025",
          conclusionDate: "August 25, 2025",
          airdropDate: "September 1, 2025",
          totalAirdrops: "$ 1,000,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "PepeBlast Launch",
          status: "Upcoming",
          launchDate: "September 15, 2025",
          conclusionDate: "October 20, 2025",
          airdropDate: "November 1, 2025",
          totalAirdrops: "$ 2,000,000",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.launchpad {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;

  &__jumbotron {
    &--h2 {
      font-size: #{scaleValue(60)};
      font-weight: 400;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(100)};
      }
    }

    &--p {
      font-size: #{scaleValue(20)};
      font-weight: 400;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(70)};
      }
    }

    &--header {
      line-height: #{scaleValue(70)};
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(160)};
        margin-top: #{scaleValue(200)};
        margin-bottom: #{scaleValue(200)};
      }
    }
  }

  &__jumbogrid {
    &--item {
      margin-bottom: #{scaleValue(30)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      line-height: #{scaleValue(40)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(100)};
        margin-bottom: #{scaleValue(80)};
      }

      & span {
        &:nth-child(1) {
          font-size: #{scaleValue(30)};
          font-weight: 700;

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(70)};
          }
        }

        &:nth-child(2) {
          font-size: #{scaleValue(15)};
          color: rgba($primary-orange, 0.8);

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(70)};
          }
        }
      }
    }
  }

  &__boxes {
  }

  &__box {
    border: 0.4px solid rgba($white, 0.4);
    border-radius: 0.7rem;
    padding: 1.5rem;
    margin-bottom: 2rem;

    &--header {
      display: flex;
      justify-content: space-between;
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        margin-bottom: #{scaleValue(120)};
      }

      & h2 {
        font-weight: 300;
        margin-right: #{scaleValue(20)};
      }
    }

    &--details {
      display: flex;
      align-items: center;

      & h2 {
        font-size: #{scaleValue(20)};

        @media only screen and (max-width: 1024px) {
          font-size: #{scaleValue(60)};
        }
      }

      & figure {
        height: #{scaleValue(20)};
        width: #{scaleValue(20)};
        margin-right: #{scaleValue(10)};

        @media only screen and (max-width: 1024px) {
          height: #{scaleValue(80)};
          width: #{scaleValue(80)};
          margin-right: #{scaleValue(40)};
        }

        & img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      & span {
        &.status {
          font-size: #{scaleValue(11)};
          background: rgba($bitcoin-orange, 0.1);
          padding: #{scaleValue(10)};
          border-radius: 1rem;
        }
      }
    }

    &--detail {
      display: flex;
      flex-direction: column;
      line-height: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(80)};
      }

      & span {
        &:nth-child(1) {
          font-size: #{scaleValue(15)};
          color: rgba($white, 0.5);

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(50)};
          }
        }

        &:nth-child(2) {
          font-size: #{scaleValue(15)};
          font-weight: 600;

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(50)};
          }
        }
      }
    }

    &--threedot {
      display: flex;
      align-items: center;
      cursor: pointer;

      & span {
        display: inline-block;
        border-radius: 100%;
        background: rgba($white, 0.5);
        height: 0.3rem;
        width: 0.3rem;
        margin-left: 0.3rem;
      }
    }

    &--grid {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
