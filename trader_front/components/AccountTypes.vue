<template>
  <div>
    <div class="accountversions">
      <h3 class="section__area--h4">Master the markets</h3>
      <p class="section__area--h3 section-header">
        Industry-standard Web3 infra & service solutions on a single platform
      </p>

      <div class="accountversions__grid">
        <div
          v-for="(account, index) in accountTypes"
          :key="index"
          class="accountversions__griditem"
        >
          <h2 class="accountversions__griditem--h2">{{ account.tier }}</h2>
          <p class="accountversions__griditem--desc">{{ account.description }}</p>

          <div class="accountversions__griditem--label">
            <span>Minimum Balance:</span>
            <span>${{ formatNumber(account.minimumBalance) }}</span>
          </div>

          <div class="accountversions__griditem--label">
            <span>Monthly Fee:</span>
            <span>${{ account.maintenanceFee }}</span>
          </div>

          <div class="accountversions__griditem--label">
            <span>Features:</span>
          </div>

          <div class="accountversions__griditem--list">
            <ul>
              <li v-for="(feature, i) in account.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </div>

          <button
            @click="navigateToPage('register')"
            class="landing-btn landing-btn__curved landing-btn__white"
          >
            <span>get started</span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0.75" y1="12" x2="22.5" y2="12" />
                <path d="M12.75 2.25L22.5 12L12.75 21.75" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

export default {
  mixins: [generalutilities],
  data() {
    return {
      accountTypes: [
        {
          tier: "Base Tier",
          description:
            "Perfect for beginners looking to start their investment journey. Access basic market tools and standard features.",
          minimumBalance: 1000,
          maintenanceFee: 5,
          features: [
            "Basic market access",
            "Standard trading tools",
            "Access to basic research",
            "Email support",
          ],
        },
        {
          tier: "Silver Tier",
          description:
            "Ideal for intermediate investors seeking enhanced trading capabilities and better support options.",
          minimumBalance: 5000,
          maintenanceFee: 15,
          features: [
            "Advanced market access",
            "Real-time quotes",
            "Technical analysis tools",
            "Priority email support",
          ],
        },
        {
          tier: "Gold Tier",
          description:
            "For serious investors who need comprehensive tools and premium support for their trading activities.",
          minimumBalance: 10000,
          maintenanceFee: 25,
          features: [
            "Full market access",
            "Advanced charting",
            "Research reports",
            "24/7 phone support",
          ],
        },
        {
          tier: "Platinum Tier",
          description:
            "Premium service level with exclusive benefits and personalized attention for high-value investors.",
          minimumBalance: 25000,
          maintenanceFee: 50,
          features: [
            "Global market access",
            "Premium research",
            "Dedicated advisor",
            "Exclusive events",
          ],
        },
        {
          tier: "Diamond Tier",
          description:
            "Elite tier offering comprehensive wealth management solutions and exclusive investment opportunities.",
          minimumBalance: 100000,
          maintenanceFee: 100,
          features: [
            "Private banking services",
            "Wealth management",
            "Custom portfolio",
            "Concierge service",
          ],
        },
        {
          tier: "Black Tier",
          description:
            "Invitation-only tier with ultra-premium services and institutional-grade investment opportunities.",
          minimumBalance: 500000,
          maintenanceFee: 250,
          features: [
            "Institutional access",
            "Private equity options",
            "Family office services",
            "Bespoke solutions",
          ],
        },
      ],
    };
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
.accountversions {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;

  @media only screen and (max-width: 1024px) {
    padding: $paddingsidem;
    height: auto;
    padding-top: #{scaleValue(300)};
    padding-bottom: #{scaleValue(300)};
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: #{scaleValue(20)};

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: #{scaleValue(100)};
    }
  }

  &__griditem {
    color: $white;
    border: 0.5px solid $primary-orange;
    border-radius: 1.1rem;
    padding: #{scaleValue(30)};
    padding-bottom: #{scaleValue(50)};

    @media only screen and (max-width: 1024px) {
      padding: #{scaleValue(100)};
      padding-bottom: #{scaleValue(190)};
    }

    &--h2 {
      color: $primary-orange;
      margin-bottom: #{scaleValue(30)};
      font-weight: 500;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(80)};
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--desc {
      font-size: #{scaleValue(18)};
      line-height: #{scaleValue(25)};
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(80)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--label {
      margin-bottom: #{scaleValue(20)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(65)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(40)};
      }

      & span {
        &:nth-child(1) {
          color: $primary-orange;
        }

        &:nth-child(2) {
        }
      }
    }

    &--list {
      margin-bottom: #{scaleValue(50)};

      @media only screen and (max-width: 1024px) {
        margin-bottom: #{scaleValue(150)};
      }

      & li {
        margin-bottom: #{scaleValue(15)};

        @media only screen and (max-width: 1024px) {
          font-size: #{scaleValue(65)};
          line-height: #{scaleValue(130)};
          margin-bottom: #{scaleValue(40)};
        }
      }
    }
  }
}
</style>
