<template>
  <div>
    <div class="landingpage">
      <div class="landingpage__content">
        <div class="landing__header">
          <HeaderBox />
        </div>

        <div class="landingpage__jumbotron">
          <div class="landingpage__jumbotron--area">
            <h1>
              <span>Optimise your trades</span>
              <span>Maximize profits</span>
            </h1>
          </div>
          <div class="landingpage__jumbotron--area">
            <h2>
              Engage in commerce with the world's foremost retail broker and take
              advantage of conditions that surpass market standards. Your profit is our
              win
            </h2>
          </div>
          <div class="landingpage__icoannou">
            <div class="landingpage__icoannou--content">
              <HeaderAnnouncement
                :background="'$landing-green'"
                :announcement="announcements[0]"
              />
            </div>
          </div>
          <div class="landingpage__jumbotron--area buttons">
            <button class="btn left" @click="$router.push('/register')">
              Open an account
            </button>
            <button class="btn right" @click="$router.push('/login')">Sign in</button>
          </div>

          <div class="landingpage__jumbotron--area landingpage__jumbotron--facts">
            <div class="landingpage__jumbotron--fact">
              <span class="image">
                <img src="@/assets/imgs/users_group_4fae4ed806.svg" />
              </span>
              <span>890,000+ active traders</span>
            </div>
            <div class="landingpage__jumbotron--fact">
              <span class="image">
                <img src="@/assets/imgs/users_group_4fae4ed806.svg" />
              </span>
              <span>Multiple regulatory licenses</span>
            </div>
            <div class="landingpage__jumbotron--fact">
              <span class="image">
                <img src="@/assets/imgs/users_group_4fae4ed806.svg" />
              </span>
              <span>24/7 multilingual customer support</span>
            </div>
            <div class="landingpage__jumbotron--fact">
              <span class="image">
                <img src="@/assets/imgs/users_group_4fae4ed806.svg" />
              </span>
              <span>Regular certified security audits</span>
            </div>
          </div>
        </div>

        <div class="landingpage__features">
          <div class="landingpage__features--header">
            <h2>Trade without tradeoffs</h2>
          </div>
          <div class="landingpage__features--grid">
            <div class="landingpage__features--gridarea">
              <div class="landingpage__features--feature">
                <label>Withdrawals</label>
                <h3>Instant withdrawals</h3>
                <p>
                  Get your deposits and withdrawals approved the moment you click the
                  button.*
                </p>
              </div>
              <div class="landingpage__features--feature">
                <label>Stop outs</label>
                <h3>30% fewer stop outs</h3>
                <p>Be unstoppable with our proprietary Stop Out Protection feature.</p>
              </div>
            </div>

            <div class="landingpage__features--photoarea">
              <img src="@/assets/imgs/forexview.png" />
            </div>

            <div class="landingpage__features--gridarea">
              <div class="landingpage__features--feature">
                <label>Execution speed</label>
                <h3>Ultra-fast execution</h3>
                <p>Execute your orders in milliseconds, no matter how big they are.</p>
              </div>

              <div class="landingpage__features--feature">
                <label>Swaps</label>
                <h3>No overnight fees</h3>
                <p>
                  Hold your leveraged positions for as long as you like, swap-free. T&C
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="landingpage__tradingtypes" id="landingoffers">
          <h2>Control, power and speed. Our platforms give you every possible edge.</h2>
          <div class="landingpage__tradingtypesbody">
            <div class="landingpage__tradingtypesarea">
              <div class="landingpage__tradingtypesbox">
                <h4 class="landingpage__tradingtypesbox--h4">
                  Safety First: Uncompromised Security
                </h4>

                <p class="landingpage__tradingtypesbox--p">
                  Trust in bvx's robust security measures that prioritize your assets and
                  information. Our state-of-the-art protection ensures you trade with
                  peace of mind, every step of the way.
                </p>

                <!--<div class="landing__tradingtypesbox--btnarea">
                                    <button class="btn">LEARN MORE </button>
                                    <span>&#8594;</span>
                                </div>--->
              </div>

              <div class="landingpage__tradingtypesbox">
                <h4 class="landingpage__tradingtypesbox--h4">
                  Amplify Your Portfolio: Rewarding Asset Returns
                </h4>

                <p class="landingpage__tradingtypesbox--p">
                  With bvx, your assets work harder for you. Enjoy unparalleled returns
                  and watch your investments flourish as you capitalize on our unique
                  reward programs.
                </p>

                <!--<div class="landing__tradingtypesbox--btnarea">
                                    <button class="btn">LEARN MORE </button>
                                    <span>&#8594;</span>
                                </div>--->
              </div>
            </div>

            <div class="landingpage__tradingtypesarea--mast">
              <figure>
                <img
                  src="https://d33vw3iu5hs0zi.cloudfront.net/media/xl_exness_trading_apps_eaab53405d.jpg"
                />
              </figure>
            </div>
          </div>
        </div>

        <div class="landingpage__stats">
          <div class="landingpage__features--header">
            <h2>Trade with confidence</h2>
            <p class="landingpage__stats--para">
              The numbers speak for themselves. Trade with the support of the world’s
              largest retail broker.
            </p>
          </div>

          <div class="landingpage__stats--grid">
            <div class="landingpage__stats--item">
              <label>$2+ trillion</label>
              <span>monthly trading volume</span>
            </div>
            <div class="landingpage__stats--item">
              <label>1.2 billion</label>
              <span>trades executed in 2023</span>
            </div>
            <div class="landingpage__stats--item">
              <label>24,000+</label>
              <span>registered partners</span>
            </div>
            <div class="landingpage__stats--item">
              <label>10,000+</label>
              <span>security audits passed</span>
            </div>
          </div>
        </div>

        <div class="landingpage__perks" id="landingperks">
          <div class="landingpage__perksarea">
            <h4>Master the Markets with Bvx</h4>
            <h3>Our agents amplify your market acumen for confident trading</h3>
            <p class="landingpage__perksarea--p">
              Starting from scratch? No worries. With bvx's seasoned trading agents by
              your side, watch your market know-how skyrocket to unparalleled heights.
            </p>
          </div>

          <div class="landingpage__perksarea bottomrow">
            <div class="landingpage__perk">
              <div class="landingpage__perk--section">
                <span class="landingpage__perk--section-header"
                  >Standard Prodigy Account:</span
                >
                <p class="landingpage__perk--section-copy">
                  Ideal for newcomers, this plan offers weekly market insights and an
                  introduction to trading basics, complemented by monthly sessions with a
                  trading agent for guidance.
                </p>
                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$1,000</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext">$10 per trade</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>Basic market access</li>
                      <li>Standard customer support</li>
                      <li>Access to basic trading tools and educational resources</li>
                    </ul>
                  </div>
                </div>
                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div class="landingpage__perk">
              <div class="landingpage__perk--section"></div>
              <div class="landingpage__perk--section">
                <span class="landingpage__perk--section-header"
                  >Professional Account:</span
                >
                <p class="landingpage__perk--section-copy">
                  For intermediate traders, this plan provides bi-weekly in-depth market
                  analyses, advanced strategy tutorials, and regular coaching sessions,
                  backed by priority email support.
                </p>

                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$5,000</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext">$8 per trade</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>All Standard Prodigy features</li>
                      <li>Extended market access</li>
                      <li>Enhanced trading tools</li>
                      <li>Priority customer support</li>
                    </ul>
                  </div>
                </div>

                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div class="landingpage__perk">
              <div class="landingpage__perk--section"></div>
              <div class="landingpage__perk--section">
                <span class="landingpage__perk--section-header">Elite Gold Account:</span>
                <p class="landingpage__perk--section-copy">
                  Advanced traders can benefit from weekly detailed market forecasts,
                  exclusive webinars, and consistent personalized coaching. 24/7 priority
                  support ensures they're always ahead.
                </p>

                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$10,000</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext">$5 per trade</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>All Professional Account features</li>
                      <li>Access to advanced market data and analytics</li>
                      <li>One-on-one coaching sessions</li>
                      <li>Reduced withdrawal fees</li>
                    </ul>
                  </div>
                </div>

                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div class="landingpage__perk">
              <div class="landingpage__perk--section"></div>
              <div class="landingpage__perk--section" id="landingpage__perks-parent">
                <span class="landingpage__perk--section-header"
                  >Pioneer Silver Account:</span
                >
                <p class="landingpage__perk--section-copy">
                  The ultimate offering for seasoned traders, with daily market insights,
                  direct expert access, unlimited sessions with top agents, and early
                  access to new tools and features.
                </p>

                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$25,000</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext">$3 per trade</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>All Elite Gold Account features</li>
                      <li>Access to exclusive investment opportunities</li>
                      <li>Personal account manager</li>
                      <li>Invitations to webinars and events</li>
                    </ul>
                  </div>
                </div>

                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div class="landingpage__perk">
              <div class="landingpage__perk--section"></div>
              <div class="landingpage__perk--section" id="landingpage__perks-parent">
                <span class="landingpage__perk--section-header"
                  >Premier Gold Membership:</span
                >
                <p class="landingpage__perk--section-copy">
                  The ultimate offering for seasoned traders, with daily market insights,
                  direct expert access, unlimited sessions with top agents, and early
                  access to new tools and features.
                </p>

                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$50,000</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext">$1 per trade</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>All Pioneer Silver Account features</li>
                      <li>Tailored investment advice</li>
                      <li>Higher withdrawal limits</li>
                      <li>Complimentary access to premium market research</li>
                    </ul>
                  </div>
                </div>

                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div class="landingpage__perk">
              <div class="landingpage__perk--section"></div>
              <div class="landingpage__perk--section" id="landingpage__perks-parent">
                <span class="landingpage__perk--section-header"
                  >Premier Platinum Membership:</span
                >
                <p class="landingpage__perk--section-copy">
                  The ultimate offering for seasoned traders, with daily market insights,
                  direct expert access, unlimited sessions with top agents, and early
                  access to new tools and features.
                </p>

                <div class="landingpage__perk--list">
                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext"
                      >Minimum Balance:</span
                    >
                    <span class="landingpage__perk--listitemtext">$100,000+</span>
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span class="landingpage__perk--listitemboldtext">Commission:</span>
                    <span class="landingpage__perk--listitemtext"
                      >Zero commission on trades</span
                    >
                  </div>

                  <div class="landingpage__perk--listitem">
                    <span
                      class="landingpage__perk--listitemboldtext landingpage__perk--listitemfeaturesheader"
                      >Features:</span
                    >
                    <ul class="landingpage__perk--listitemfeatures">
                      <li>All Premier Gold Membership features</li>
                      <li>Bespoke financial planning and portfolio management</li>
                      <li>Exclusive VIP customer support</li>
                      <li>Access to invite-only investment opportunities</li>
                    </ul>
                  </div>
                </div>

                <div
                  class="landingpage__jumbotrontop--btns"
                  @click="navigateToPage('register')"
                >
                  <button class="btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="landingpage__rewards" id="rewards">
          <h3 class="landingpage__rewards--h3">Defi Staking</h3>
          <h2 class="landingpage__rewards--h2">Earn crypto rewards on your assets</h2>

          <div class="landingpage__rewardsbody">
            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/61a900c6c0c19d4855dc0323_BTC.svg" />
              </figure>

              <h5>BTC</h5>

              <span>Yearly rewards up to</span>

              <span>6%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/60d21880724092061738067c_fox-Icon.svg" />
              </figure>

              <h5>FOX</h5>

              <span>Yearly rewards up to</span>

              <span>4%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/61b0dabab79d32a580afa34d_eth.svg" />
              </figure>

              <h5>ETH</h5>

              <span>Yearly rewards up to</span>

              <span>4%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/61b0da972b0526e4b219cd42_ltc.svg" />
              </figure>

              <h5>LTC</h5>

              <span>Yearly rewards up to</span>

              <span>18%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img
                  src="@/assets/imgs/632ca2c35d0556b7df05357b_avalanche-avax-logo.svg"
                />
              </figure>

              <h5>AVAX</h5>

              <span>Yearly rewards up to</span>

              <span>6%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/629e539eed9254aca6e47d59_cosmos-atom-logo.svg" />
              </figure>

              <h5>COSMOS</h5>

              <span>Yearly rewards up to</span>

              <span>6%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/632ca22eb77a6b0093b19d11_doge.svg" />
              </figure>

              <h5>DOGE</h5>

              <span>Yearly rewards up to</span>

              <span>7%</span>
            </div>

            <div class="landingpage__reward">
              <figure>
                <img src="@/assets/imgs/61b12434ca293848b210e4ad_bch.svg" />
              </figure>

              <h5>BCH</h5>

              <span>Yearly rewards up to</span>

              <span>4%</span>
            </div>
          </div>
        </div>

        <div class="landingpage__disclaimers">
          <div class="landingpage__disclaimers--content">
            <p>
              BVX offerings are intricate tools that carry a high possibility of swift
              financial loss due to leverage. 77.1% of retail investor accounts suffer
              financial losses when engaging in trades with bvx. It is crucial to ponder
              whether you grasp the operation of the markets and if you are in a position
              to shoulder the substantial risk of losing your funds. Kindly make sure you
              have a comprehensive understanding of the risks entailed by consulting our
              detailed risk warning.
            </p>

            <p>
              Bvx is a trading identity of Voltex Singapore, and bvx.com/ie is a domain
              run by Voltex Singapore, a constituent of StoneX Group Inc. Voltex Singapore
              is a Cyprus Investment Firm (CIF) officially registered with the Department
              of Registrar of Companies and Official Receiver under the Registration
              Number HE409708, and endorsed and overseen by the Cyprus Securities &
              Exchange Commission (CySEC) with the license number 400/21. Voltex Singapore
              is affiliated with the Investor Compensation Fund (ICF) and has its official
              headquarters at 10 Marina Bay Street, #15-02, Central Tower, Singapore
              018983.
            </p>

            <p>
              Voltex Singapore might offer third-party content on this website, which
              might encompass details including but not limited to the financial market
              scenarios. This content is purely informational and should never be
              perceived as containing financial counsel, investment endorsements,
              investment analysis, or invitations for any financial instrument
              transactions. Any decisions regarding specific financial actions should be
              made by the client after their personal evaluation. Voltex Singapore does
              not guarantee the preciseness or completeness of the given details, nor any
              financial losses that might arise from any investment grounded on
              recommendations, projections, or other supplied details. Always consult
              independent advice to determine your aptness for speculation in associated
              markets and your capacity to undertake related risks. No obligation lies
              with us to refresh any given content. Views expressed might be personal to
              the contributor and might not mirror the opinions of Voltex Singapore.
            </p>

            <p>
              By leveraging passporting, Voltex Singapore can deliver its services and
              offerings across borders to the subsequent European Economic Area ("EEA")
              nations: Austria, Bulgaria, Croatia, Denmark, Estonia, Finland, France,
              Germany, Greece, Hungary, Ireland, Italy, Latvia, Liechtenstein, Lithuania,
              Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia,
              Slovenia, Spain, Sweden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

import socket from "@/plugins/socket.js";

export default {
  data() {
    return {
      announcements: [`BVX Token (BVXT) ICO launches Soon!`],
    };
  },
  watch: {
    client(newval, oldval) {
      if (newval) {
        socket.emit("clientloggedin", { clientid: newval._id });
      }
    },
  },
  computed: {
    ...mapState({
      client: (state) => state.auth.client,
    }),
  },
  mounted() {
    if (this.client) {
      this.getuserwallets(this.client._id);

      socket.emit("clientloggedin", { clientid: this.client._id });
    }

    window.addEventListener("scroll", this.handleScrollLanding);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScrollLanding);
  },
  handleScrollLanding() {
    const headerPropTracker = document.getElementById("landing__jumbotrontop--header");
    const rect = headerPropTracker.getBoundingClientRect();
    const header = document.getElementById("header");
    //const headerSearch = document.getElementById("header__search");
    const loginBtn = document.getElementById("login-btn");

    if (rect.top <= 116.5) {
      header.classList.add("scrolled-far-enough");
      //headerSearch.classList.add("scrolled-far-enough");
      loginBtn.classList.add("scrolled-far-enough");
    } else {
      header.classList.remove("scrolled-far-enough");
      //headerSearch.classList.remove("scrolled-far-enough");
      loginBtn.classList.remove("scrolled-far-enough");
    }
  },
  methods: {
    navigateToPage(page, id) {
      this.$router.push(`/${page}`);
    },
    scrollToDiv(mydivid) {
      const target = document.getElementById(`${mydivid}`);
      const currentScrollPosition = window.pageYOffset;
      const distanceToTarget = target.offsetTop - currentScrollPosition;

      window.scroll(0, distanceToTarget);
    },
  },
};
</script>

<style lang="scss">
$landing-textcolor: #141d22;

@mixin greenbtnlanding {
  padding: #{scaleValue(15)} #{scaleValue(19)};
  font-size: #{scaleValue(13)};
  text-transform: uppercase;
  background: $landing-green;
  border-radius: 3rem;
  font-weight: 600;
  color: $landing-textcolor;

  &.left {
    margin-right: #{scaleValue(19)};
  }

  &.right {
    background: transparent;
    color: $landing-green;
    border: 1px solid $landing-green;
  }

  @media only screen and (max-width: 414px) {
    padding: #{scaleValue(60)} #{scaleValue(100)};
    font-size: #{scaleValue(50)};
    border-radius: 8rem;
  }
}

.landingpage {
  &__content {
    &--desktopheader {
      @media only screen and (max-width: 412px) {
        display: none;
      }
    }

    &--mobileheader {
      display: none;

      @media only screen and (max-width: 412px) {
        display: block;
      }
    }
  }

  &__jumbotron {
    color: $white;
    height: #{scaleValue(800)};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: #{scaleValue(130)};

    padding-top: #{scaleValue(170)};
    background-image: linear-gradient(
        to bottom,
        rgba($landing-primary, 1),
        rgba($landing-primary, 0.8)
      ),
      url(/imgs/skyline.avif);
    background-size: cover;
    background-position: top;
    position: relative;

    @media only screen and (max-width: 412px) {
      height: #{scaleValue(2900)};
      padding-top: #{scaleValue(500)};
    }

    &--area {
      & h1 {
        font-weight: 500;
        font-size: #{scaleValue(50)};
        line-height: #{scaleValue(70)};
        display: flex;
        flex-direction: column;
        text-align: center;

        @media only screen and (max-width: 412px) {
          font-size: #{scaleValue(130)};
          line-height: #{scaleValue(200)};
          font-weight: 400;
        }
      }

      & h2 {
        font-weight: 400;
        font-size: #{scaleValue(18)};
        line-height: #{scaleValue(28)};
        width: #{scaleValue(700)};
        margin-top: #{scaleValue(20)};
        text-align: center;

        @media only screen and (max-width: 412px) {
          font-size: #{scaleValue(60)};
          line-height: #{scaleValue(90)};
          width: #{scaleValue(1500)};
          margin-top: #{scaleValue(55)};
        }
      }

      & button {
        @include greenbtnlanding;

        border-radius: 0.5rem;

        @media only screen and (max-width: 412px) {
          margin-top: #{scaleValue(100)};
        }
      }

      &.buttons {
        margin-top: #{scaleValue(60)};

        @media only screen and (max-width: 412px) {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &--facts {
      display: flex;
      align-items: center;
      margin-top: #{scaleValue(130)};
      padding: #{scaleValue(10)} #{scaleValue(30)};
      color: $landing-textcolor;
      background: $green;
      border-radius: #{scaleValue(20)};
      border: 1px solid $green;

      @media only screen and (max-width: 412px) {
        margin-top: #{scaleValue(400)};
        flex-direction: column;
        align-items: start;
        width: #{scaleValue(1500)};
      }
    }

    &--fact {
      display: flex;
      align-items: center;
      font-size: #{scaleValue(13)};
      margin-right: #{scaleValue(50)};
      font-weight: 600;

      @media only screen and (max-width: 412px) {
        font-size: #{scaleValue(60)};
        font-weight: 400;
        line-height: #{scaleValue(150)};
      }

      &:last-child {
        margin: 0;
      }

      & span {
        display: flex;
        align-items: center;

        &.image {
          margin-right: #{scaleValue(10)};

          @media only screen and (max-width: 412px) {
            width: #{scaleValue(20)};
            height: #{scaleValue(20)};
            margin-right: #{scaleValue(100)};
          }
        }
      }
    }
  }

  &__icoannou {
    margin-top: #{scaleValue(30)};
    width: 100vw;
    min-height: #{scaleValue(30)};

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 412px) {
      width: 90vw;
      margin-top: #{scaleValue(150)};
    }

    &--content {
      border-radius: 3rem;
      width: #{scaleValue(800)};
      overflow: hidden;

      @media only screen and (max-width: 412px) {
        width: 90vw;
      }
    }
  }

  &__features {
    padding: $basic-landing-area-padding;
    padding-top: #{scaleValue(100)};
    padding-bottom: #{scaleValue(100)};

    background: linear-gradient(
      to bottom,
      rgba($landing-primary, 1),
      rgba($landing-primary, 0.8)
    );

    &--header {
      text-align: center;
      font-size: #{scaleValue(20)};
      margin-bottom: #{scaleValue(50)};

      @media only screen and (max-width: 412px) {
        margin-bottom: #{scaleValue(200)};
        font-size: #{scaleValue(70)};
      }

      & h2 {
        font-weight: 500;
      }
    }

    &--grid {
      display: flex;
      justify-content: center;

      @media only screen and (max-width: 412px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    &--photoarea {
      height: #{scaleValue(500)};
      width: #{scaleValue(700)};
      margin: 0 #{scaleValue(30)};

      @media only screen and (max-width: 412px) {
        height: #{scaleValue(800)};
        width: #{scaleValue(900)};
        margin-top: #{scaleValue(200)};
      }

      & img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    &--feature {
      text-align: center;
      width: #{scaleValue(350)};
      margin-top: #{scaleValue(60)};

      @media only screen and (max-width: 412px) {
        width: #{scaleValue(1000)};
        margin-top: #{scaleValue(200)};
      }

      & label {
        padding: #{scaleValue(8)};
        border-radius: 3rem;
        background: $greyed-out;
        display: inline-block;
        font-size: #{scaleValue(10)};
        margin-bottom: #{scaleValue(16)};

        @media only screen and (max-width: 412px) {
          font-size: #{scaleValue(60)};
          padding: #{scaleValue(30)} #{scaleValue(60)};
          margin-bottom: #{scaleValue(90)};
          border-radius: 5rem;
        }
      }

      & h3 {
        font-size: #{scaleValue(18)};
        margin-bottom: #{scaleValue(16)};
        font-weight: 400;

        @media only screen and (max-width: 412px) {
          font-size: #{scaleValue(90)};
          margin-bottom: #{scaleValue(70)};
        }
      }

      & p {
        color: rgba($white, 0.5);
        font-size: #{scaleValue(15)};

        @media only screen and (max-width: 412px) {
          font-size: #{scaleValue(50)};
        }
      }
    }
  }

  &__tradingtypes {
    padding: $basic-landing-area-padding;
    padding-top: #{scaleValue(80)};

    background: linear-gradient(
      to bottom,
      rgba($landing-primary, 1),
      rgba($landing-primary, 0.8)
    );

    @media only screen and (max-width: 414px) {
      padding: #{scaleValue(70)};
      padding-top: #{scaleValue(200)};
      padding-bottom: #{scaleValue(200)};
    }

    & h2 {
      @include h2-landing;
      color: $white;
      font-weight: 500;
      margin-bottom: #{scaleValue(100)};
    }
  }

  &__tradingtypesarea {
    &--mast {
      & figure {
        height: #{scaleValue(500)};
        width: #{scaleValue(700)};

        & img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  &__tradingtypesbody {
    display: flex;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 414px) {
      flex-direction: column;
    }
  }

  &__tradingtypesbox {
    position: relative;
    display: flex;
    flex-direction: column;
    width: #{scaleValue(400)};
    padding-bottom: #{scaleValue(30)};
    color: rgba($white, 0.9);
    margin-bottom: #{scaleValue(30)};

    @media only screen and (max-width: 414px) {
      width: auto;
      margin-bottom: #{scaleValue(100)};
    }

    &:not(:last-child) {
      border-bottom: $border;
      border-color: $second-border-color;
      border-width: #{scaleValue(2)};
    }

    &--btnarea {
      position: absolute;
      bottom: #{scaleValue(20)};
      left: 0;
      cursor: pointer;

      &:hover {
        & button {
          color: rgba($landing-primary, 0.8);
        }

        & span {
          display: inline-block;
          transition: 0.4s ease;
          transform: translateX(#{scaleValue(5)});
        }
      }
    }

    & button {
      color: rgba($white, 0.9);
      font-weight: 500;
      font-size: #{scaleValue(13)};
      transition: all 0.4s ease;
      font-weight: 600;
    }

    &--p {
      font-size: #{scaleValue(16)};
      line-height: #{scaleValue(26)};
      color: rgba($white, 0.9);
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(65)};
        line-height: #{scaleValue(90)};
        margin-bottom: #{scaleValue(60)};
      }
    }

    &--h4 {
      color: $landing-green;
      font-weight: 600;
      font-size: #{scaleValue(20)};
      margin-bottom: #{scaleValue(10)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(70)};
        line-height: #{scaleValue(90)};
        margin-bottom: #{scaleValue(60)};
      }
    }
  }

  &__stats {
    padding: $basic-landing-area-padding;
    padding-top: #{scaleValue(100)};
    padding-bottom: #{scaleValue(100)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      to bottom,
      rgba($landing-primary, 1),
      rgba($landing-primary, 0.8)
    );

    &--para {
      font-size: #{scaleValue(15)};
      width: #{scaleValue(500)};
      line-height: #{scaleValue(26)};
      text-align: center;
      margin-top: #{scaleValue(20)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(50)};
        line-height: #{scaleValue(70)};
        width: #{scaleValue(1400)};
      }
    }

    &--grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: #{scaleValue(40)};

      @media only screen and (max-width: 414px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
      }
    }

    &--item {
      display: flex;
      flex-direction: column;
      padding-left: #{scaleValue(20)};
      padding-right: #{scaleValue(70)};
      border-left: $border;
      padding-bottom: #{scaleValue(20)};
      padding-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 414px) {
        padding-left: #{scaleValue(70)};
        padding-bottom: #{scaleValue(180)};
      }

      & label {
        font-size: #{scaleValue(30)};
        font-weight: 500;
        margin-bottom: #{scaleValue(20)};

        @media only screen and (max-width: 414px) {
          font-size: #{scaleValue(100)};
          margin-bottom: #{scaleValue(50)};
        }
      }

      & span {
        font-size: #{scaleValue(15)};

        @media only screen and (max-width: 414px) {
          font-size: #{scaleValue(60)};
        }
      }
    }
  }

  &__perks {
    padding: $basic-landing-area-padding;
    padding-top: #{scaleValue(80)};
    padding-bottom: #{scaleValue(80)};

    display: flex;
    justify-content: space-between;
    background: linear-gradient(to right, #6c3483 2%, #12225c 70%);
    background: $landing-primary;

    flex-direction: column;

    @media only screen and (max-width: 414px) {
      padding: #{scaleValue(70)};
      padding-top: #{scaleValue(130)};
      padding-bottom: #{scaleValue(130)};
    }
  }

  &__perksarea {
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
      width: #{scaleValue(500)};

      @media only screen and (max-width: 414px) {
        width: auto;
      }
    }

    &.bottomrow {
      flex-direction: row;
      margin-top: #{scaleValue(30)};
      justify-content: space-between;
      flex-wrap: wrap;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;

      @media only screen and (max-width: 414px) {
        padding-top: #{scaleValue(130)};

        grid-template-columns: repeat(1, 1fr);
      }
    }

    & h4 {
      color: $green;
      font-size: #{scaleValue(15)};
      font-weight: 600;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: #{scaleValue(10)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(65)};
        margin-bottom: #{scaleValue(40)};
      }
    }

    & h3 {
      @include h2-landing;
      color: $white;
      font-size: #{scaleValue(28)};
      font-weight: 600;
      text-align: left;
      margin: 0;
      margin-bottom: #{scaleValue(20)};
      width: auto;
    }

    &--p {
      opacity: 0.7;
      font-weight: 500;
      line-height: #{scaleValue(23)};
      font-size: #{scaleValue(15)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(68)};
        line-height: #{scaleValue(95)};
      }
    }

    & button {
      box-shadow: 1px 1px 8px rgba($landing-primary, 0.3);
    }
  }

  &__rewards {
    padding: $basic-landing-area-padding;
    padding-top: #{scaleValue(80)};
    padding-bottom: #{scaleValue(80)};

    background: linear-gradient(to right, #12225c 2%, #6c3483 70%);

    background: linear-gradient(
      to bottom,
      rgba($landing-primary, 1),
      rgba($landing-primary, 0.8)
    );

    @media only screen and (max-width: 414px) {
      padding: #{scaleValue(70)};
      padding-top: #{scaleValue(200)};
      padding-bottom: #{scaleValue(200)};
    }

    &--h2 {
      @include h2-landing;
      color: $white;
    }

    &--h3 {
      color: $green;
      font-size: #{scaleValue(15)};
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: #{scaleValue(10)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(90)};
      }
    }
  }

  &__rewardsbody {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: #{scaleValue(19)};

    @media only screen and (max-width: 414px) {
      grid-template-columns: repeat(1, #{scaleValue(1475)});
      grid-gap: #{scaleValue(70)};
    }
  }

  &__reward {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: $box-radius;
    background: $light-black;
    padding: #{scaleValue(21)};
    border: $border;
    border-color: $green;
    border-width: #{scaleValue(2)};

    @media only screen and (max-width: 414px) {
      padding: #{scaleValue(100)};
    }

    & figure {
      height: #{scaleValue(40)};
      width: #{scaleValue(40)};
      overflow: hidden;
      border-radius: 100%;
      margin-bottom: #{scaleValue(15)};

      @media only screen and (max-width: 414px) {
        height: #{scaleValue(140)};
        width: #{scaleValue(140)};
        margin-bottom: #{scaleValue(100)};
      }

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    & h5 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: #{scaleValue(16)};
      margin-bottom: #{scaleValue(7)};

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(70)};
        margin-bottom: #{scaleValue(70)};
      }
    }

    & span {
      display: inline-block;

      &:nth-child(3) {
        font-size: #{scaleValue(13)};
        color: $greyed-out;
        margin-bottom: #{scaleValue(17)};

        @media only screen and (max-width: 414px) {
          font-size: #{scaleValue(50)};
        }
      }

      &:nth-child(4) {
        font-size: #{scaleValue(30)};
        color: $green;
        font-weight: 200;

        @media only screen and (max-width: 414px) {
          font-size: #{scaleValue(60)};
        }
      }
    }
  }

  &__perk {
    border-radius: $box-radius;
    background: rgba($defipopup-body, 0.6);
    padding: #{scaleValue(31)};
    flex-shrink: 0;

    position: relative;
    padding-bottom: #{scaleValue(100)};

    & button {
      position: absolute;
      bottom: #{scaleValue(30)};

      @include greenbtnlanding;

      @media only screen and (max-width: 414px) {
        bottom: #{scaleValue(70)};
      }
    }

    @media only screen and (max-width: 414px) {
      width: auto;
      margin-bottom: #{scaleValue(100)};
      padding: #{scaleValue(120)};

      padding-bottom: #{scaleValue(300)};
    }

    &--section-header {
      display: inline-block;
      margin-bottom: #{scaleValue(8)};
      font-weight: 600;

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(90)};
      }
    }

    &--section-copy {
      line-height: #{scaleValue(21)};
      font-size: #{scaleValue(14)};
      opacity: 0.9;
      margin-top: #{scaleValue(18)};

      @media only screen and (max-width: 414px) {
        line-height: #{scaleValue(100)};
        font-size: #{scaleValue(70)};
        margin-top: #{scaleValue(100)};
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--list {
      margin-top: #{scaleValue(18)};
      font-size: #{scaleValue(14)};

      @media only screen and (max-width: 414px) {
        line-height: #{scaleValue(100)};
        font-size: #{scaleValue(65)};
      }
    }

    &--listitem {
      margin-bottom: #{scaleValue(18)};
      font-size: #{scaleValue(14)};

      @media only screen and (max-width: 414px) {
        line-height: #{scaleValue(100)};
        font-size: #{scaleValue(65)};
      }
    }

    &--listitemfeaturesheader {
      display: block;
      margin-bottom: #{scaleValue(10)};
    }

    &--listitemfeatures {
      display: flex;
      flex-direction: column;
      line-height: #{scaleValue(30)};

      @media only screen and (max-width: 414px) {
        line-height: #{scaleValue(120)};
      }
    }

    &--listitemboldtext {
      font-weight: 600;
      font-size: #{scaleValue(15)};
      color: $green;

      @media only screen and (max-width: 414px) {
        font-weight: 600;
        font-size: #{scaleValue(60)};
      }
    }
  }

  &__disclaimers {
    padding: $basic-landing-area-padding;

    background: $light-black;

    @media only screen and (max-width: 414px) {
      padding: 0 #{scaleValue(60)};
    }

    &--content {
      border-top: $border;
      padding-top: #{scaleValue(80)};
      padding-bottom: #{scaleValue(80)};

      @media only screen and (max-width: 414px) {
        padding-top: #{scaleValue(160)};
        padding-bottom: #{scaleValue(160)};
      }

      & p {
        font-size: #{scaleValue(13)};
        color: rgba($white, 0.7);
        opacity: 0.9;
        line-height: #{scaleValue(23)};
        margin-bottom: #{scaleValue(30)};

        @media only screen and (max-width: 414px) {
          font-size: #{scaleValue(50)};
          line-height: #{scaleValue(100)};
        }
      }
    }
  }
}
</style>
