<template>
  <div>
    <div class="overview">
      <div class="content">
        <HeaderBox />

        <div class="content__body">
          <div class="container">
            <SideNav />

            <div class="layout-stretch">
              <PageIndicator :page_name="'Wallet Overview'" />
              <div class="overview__main layout-padding">
                <div class="overview__mainleft">
                  <div class="balancearea">
                    <div class="balancearea__section">
                      <div class="balancearea__primarylabel">
                        <h3 class="balancearea__primarylabel--h3">Estimated Balance</h3>
                        <span class="balancearea__primarylabel--eyesvg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="eye css-16vuvx8"
                          >
                            <path
                              d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.555 6.31L1 12l5.555 5.69a7.572 7.572 0 0010.89 0L23 12l-5.555-5.69a7.572 7.572 0 00-10.89 0zM17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>

                      <div class="balancearea__primarybalance">
                        <p class="balancearea__primarybalance--btcvalue">
                          ${{ totalBlcBTC("fiat/spot") + totalBlcBTC("margin") }}
                          <!--BTC-->
                        </p>
                        <!--<span class="balancearea__primarybalance--equals">≈</span>
                                                <p class="balancearea__primarybalance--usdvalue">${{ (totalBlcUSD('fiat/spot') + totalBlcUSD('margin')) }}
                                                </p>-->
                      </div>
                    </div>
                  </div>

                  <div class="contentheader">
                    <div class="contentheader__area">
                      <h3>My Assets</h3>
                    </div>
                    <!-- <div class="contentheader__area">
                                            <div>
                                               <button class="btn padded-btn current contentheader__area--btn">Wallet View</button>
                                                <button class="btn contentheader__area--btn notcurrent">Coin View</button>
                                            </div>
                                        </div>-->
                  </div>

                  <div class="list overview">
                    <div class="list__item">
                      <div class="list__itemarea">
                        <span class="list__itemarea--labellogo">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="css-199zucj"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span class="list__itemarea--label">Fiat and Spot</span>
                      </div>
                      <div class="list__itemarea">
                        <span class="list__itemarea--walletbalance"
                          >{{ totalBlcUSD("fiat/spot") }} USD</span
                        >
                        <span class="list__itemarea--goarrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="css-1icc6a1"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div class="list__item overview">
                      <div class="list__itemarea">
                        <span class="list__itemarea--labellogo">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="css-199zucj"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM20 4h-8l3.125 3.125L4.061 18.19l1.768 1.768L16.893 8.893 20 12V4zm0 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span class="list__itemarea--label">Margin</span>
                      </div>
                      <div class="list__itemarea">
                        <span class="list__itemarea--walletbalance"
                          >{{ totalBlcUSD("margin") }} USD</span
                        >
                        <span class="list__itemarea--goarrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="css-1icc6a1"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <!--  <div class="list__item overview">
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--labellogo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-199zucj"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
                                                </span>
                                                <span class="list__itemarea--label">Tokenized Stocks</span>
                                            </div>
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--walletbalance">{{ returnBalanceSum("tokenized stocks").btcBalance }} BTC</span>
                                                <span class="list__itemarea--goarrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1icc6a1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="list__item overview">
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--labellogo">
                                                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g clip-path="url(#clip0_25_654)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3467 13.8434C16.8135 13.6394 17.3574 13.8525 17.5614 14.3193C18.2584 15.9145 18.4299 17.69 18.0513 19.389C17.6726 21.0881 16.7633 22.6227 15.4549 23.7709C15.0894 24.0915 14.5379 24.0736 14.1941 23.7298L10.7254 20.2611C10.3651 19.9009 10.3651 19.3168 10.7254 18.9565C11.0857 18.5962 11.6698 18.5962 12.0301 18.9565L14.8461 21.7726C15.5352 20.9786 16.0198 20.0225 16.2504 18.9877C16.5439 17.6707 16.4109 16.2945 15.8707 15.0581C15.6667 14.5912 15.8798 14.0474 16.3467 13.8434Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.61097 5.94874C6.31005 5.57006 8.08553 5.74162 9.68066 6.43862C10.1475 6.64262 10.3606 7.18647 10.1566 7.65334C9.95263 8.1202 9.40878 8.3333 8.94192 8.1293C7.70551 7.58905 6.32931 7.45607 5.01234 7.74959C3.9775 7.98023 3.02138 8.46481 2.22744 9.15388L5.04351 11.9699C5.40378 12.3302 5.40378 12.9143 5.04351 13.2746C4.68324 13.6349 4.09914 13.6349 3.73887 13.2746L0.270202 9.80592C-0.0735815 9.46214 -0.0915507 8.91055 0.229129 8.54512C1.37731 7.23671 2.9119 6.32742 4.61097 5.94874Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5071 0.0254028C21.8432 -0.0266898 22.1868 0.00158717 22.5099 0.107917C22.8329 0.214248 23.1261 0.395606 23.3656 0.637127C23.605 0.878648 23.7838 1.17346 23.8873 1.49741C23.9906 1.82071 24.016 2.16385 23.9614 2.49881C23.4101 5.96028 20.9815 13.801 10.9235 21.1056C10.5564 21.3722 10.0499 21.3323 9.72909 21.0114L9.64339 20.9257L8.57368 21.9955C8.50842 22.0607 8.43438 22.1152 8.35435 22.1577C7.97578 22.4578 7.50504 22.6233 7.01729 22.6233C6.44862 22.6233 5.90306 22.3983 5.49975 21.9974L5.49781 21.9955L2.00454 18.5022L2.0026 18.5003C1.60169 18.0969 1.37666 17.5514 1.37666 16.9827C1.37666 16.414 1.60169 15.8685 2.0026 15.4652L2.00454 15.4632L3.0927 14.3751L2.98856 14.2709C2.66872 13.9511 2.62795 13.4465 2.89227 13.0795C10.1777 2.96288 18.0853 0.589109 21.4985 0.0267867L21.5071 0.0254028ZM10.4722 19.1445C10.4308 19.0708 10.3791 19.0025 10.318 18.9419L5.05351 13.7143C5.02369 13.6847 4.99235 13.6575 4.95974 13.6328L4.85296 13.526C11.6712 4.40676 18.8482 2.33447 21.7927 1.84822C21.8398 1.84139 21.8878 1.84557 21.933 1.86045C21.9791 1.87564 22.021 1.90155 22.0552 1.93606C22.0894 1.97056 22.115 2.01268 22.1298 2.05895C22.1446 2.10523 22.1482 2.15436 22.1403 2.2023L22.1396 2.20662C21.6677 5.17316 19.5567 12.2986 10.4722 19.1445ZM4.39734 15.6797L3.31111 16.7659C3.31093 16.7661 3.3113 16.7657 3.31111 16.7659C3.25419 16.8235 3.22169 16.9017 3.22169 16.9827C3.22169 17.0637 3.25363 17.1414 3.31056 17.1989C3.31074 17.1991 3.31038 17.1988 3.31056 17.1989L6.8005 20.6889C6.80071 20.6891 6.80029 20.6887 6.8005 20.6889C6.85805 20.7458 6.93635 20.7783 7.01729 20.7783C7.09853 20.7783 7.17647 20.7462 7.23408 20.6889C7.28592 20.6374 7.34323 20.5926 7.40465 20.5552L8.33876 19.6211L4.39734 15.6797Z" fill="currentColor"></path></g></svg>
                                                </span>
                                                <span class="list__itemarea--label">Defi</span>
                                            </div>
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--walletbalance">{{ returnBalanceSum("defi").btcBalance }} BTC</span>
                                                <span class="list__itemarea--goarrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1icc6a1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="list__item overview">
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--labellogo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-199zucj"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.014 1a4.912 4.912 0 00-4.218 7.431 6.703 6.703 0 00-4.006 5.717H2v1.786h1.915a6.704 6.704 0 002.758 4.155l-1.648 1.648L6.287 23l2.07-2.07a6.694 6.694 0 002.118.342h5.304l1.591 1.591 1.263-1.262-1.34-1.34 4.35-4.35v-2.687h-1.934a6.126 6.126 0 00-1.398-2.915l2.435-2.435h-4.228A4.912 4.912 0 0012.014 1zM8.888 5.912a3.126 3.126 0 116.251 0 3.126 3.126 0 01-6.251 0zm1.786 0l1.34-1.34 1.34 1.34-1.34 1.34-1.34-1.34zm-.926 7.322h4.53v-1.786h-4.53v1.786z" fill="currentColor"></path></svg>
                                                </span>
                                                <span class="list__itemarea--label">Staking</span>
                                            </div>
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--walletbalance">{{ returnBalanceSum("bonus").btcBalance }} BTC</span>
                                                <span class="list__itemarea--goarrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1icc6a1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="list__item overview">
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--labellogo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-199zucj"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 9V4H15.0002L20.0002 9ZM4.00024 15V20H9.00024L4.00024 15ZM13.5387 13.5384C12.2804 14.7967 10.5589 15.3096 8.92307 15.0771C8.69052 13.4412 9.20343 11.7196 10.4618 10.4613C11.7201 9.20298 13.4415 8.69007 15.0774 8.92255C15.31 10.5585 14.7971 12.28 13.5387 13.5384ZM15.0774 8.92255C14.9174 7.79695 14.4045 6.71187 13.5387 5.84606C11.4145 3.72189 7.97057 3.72189 5.8464 5.84606C3.72223 7.97023 3.72223 11.4142 5.8464 13.5384C6.71226 14.4042 7.79741 14.9171 8.92307 15.0771C9.08307 16.2027 9.59598 17.2878 10.4618 18.1536C12.586 20.2778 16.0299 20.2778 18.1541 18.1536C20.2783 16.0294 20.2783 12.5855 18.1541 10.4613C17.2882 9.59543 16.2031 9.08252 15.0774 8.92255Z" fill="currentColor"></path></svg>
                                                </span>
                                                <span class="list__itemarea--label">Bot Trading</span>
                                            </div>
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--walletbalance">{{ returnBalanceSum("bot trading").btcBalance }} BTC</span>
                                            </div>
                                            <div class="list__itemarea">
                                                <span class="list__itemarea--walletbalance">
                                                    <button class="btn greyed-btn list__itemarea--btn">Inactive</button>
                                                </span>
                                                <span class="list__itemarea--goarrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1icc6a1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                                                </span>
                                            </div>
                                        </div>-->
                  </div>
                </div>

                <div class="overview__mainright">
                  <!--<div class="overview__recommended">
                                        <div class="contentheader">
                                            <div class="contentheader__area">
                                                <h3>Recommended for you</h3>
                                            </div>
                                        </div>

                                        <div class="overview__recommendations">
                                            <div class="overview__recommendation">
                                                <h3 class="overview__recommendation--h3">Simple Earn</h3>
                                                <p class="overview__recommendation--p opacity">Earn crypto with advanced
                                                    tools</p>
                                            </div>

                                            <div class="overview__recommendations--nav">
                                                <span class="1 current"></span>
                                                <span class="2"></span>
                                                <span class="3"></span>
                                                <span class="4"></span>
                                            </div>
                                        </div>
                                    </div>-->

                  <div class="contentheader">
                    <div class="contentheader__area">
                      <h3>Recent Transactions</h3>
                      <button
                        class="btn greyed-btn list__itemarea--btn"
                        @click="$router.push('/transactionhistory')"
                      >
                        View All
                      </button>
                    </div>
                  </div>

                  <div class="list recenttransactions">
                    <div
                      class="list__item transactions-preview"
                      v-for="transaction in transactions"
                    >
                      <div class="list__itemarea">
                        <div class="list__itemarea--transactionlogo">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="css-1pj0ttb"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.597 16.594A6.48 6.48 0 0112 18.498h-1.25v2.5H12a9 9 0 006.364-15.364 9 9 0 00-12.728 0l1.767 1.768a6.5 6.5 0 019.193 9.192zM13.25 8h-2.5v4.518l3.185 3.185 1.768-1.768-2.453-2.453V8zM5.627 9.568v1.2l-.092.006c-.767.062-1.371.29-1.783.662-.41.37-.639.891-.639 1.564 0 .684.24 1.223.676 1.642.438.421 1.08.726 1.889.925l.076.019v1.901l-.123-.029a3.94 3.94 0 01-.838-.305 2.512 2.512 0 01-.596-.4L3.14 17.935c.446.416 1.309.784 2.268.974l.08.016v1.277h1.578v-1.207l.086-.011c.796-.11 1.357-.448 1.718-.891a2.457 2.457 0 00.532-1.562c0-.669-.246-1.177-.668-1.568-.426-.394-1.037-.675-1.772-.874l-.074-.02v-1.802l.125.033c.406.106.816.31 1.099.558l1.035-1.136c-.43-.4-1.102-.697-1.875-.861l-.08-.017V9.568H5.628zm.19 4.272l-.137-.056c-.221-.09-.381-.185-.485-.303a.599.599 0 01-.149-.418c0-.133.028-.298.126-.448.1-.152.265-.279.522-.34l.123-.03v1.595zm1.057 3.678v-1.732l.147.08a.934.934 0 01.376.346.936.936 0 01.122.483.9.9 0 01-.096.429.744.744 0 01-.414.343l-.135.05z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div class="list__itemarea--transactiontypedate">
                          <span class="list__itemarea--transactiontype">Deposit</span>
                          <span class="list__itemarea--transactiondate"
                            >2023-06-28 12:42:03</span
                          >
                        </div>
                      </div>
                      <div class="list__itemarea column">
                        <div class="list__itemarea--transactionvalue">+ 165 USDT</div>
                        <div class="list__itemarea--transactionstatus">
                          <span class="success"></span>
                          <span>Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listMixin from "@/mixins/list";

import { mapActions, mapState } from "vuex";

export default {
  mixins: [listMixin],
  methods: {
    ...mapActions("wallet", ["getwallets"]),
  },
  mounted() {
    this.getwallets();
  },
  computed: {
    finoverview() {},
    transactions() {
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.overview {
  &__main {
    display: flex;
    justify-content: space-between;
  }

  &__mainleft {
    width: #{scaleValue(800)};
  }

  &__mainright {
    width: #{scaleValue(440)};
  }

  &__recommended {
    margin-bottom: #{scaleValue(100)};
  }

  &__recommendations {
    &--nav {
      display: flex;
      justify-content: center;
      margin-top: #{scaleValue(20)};

      & span {
        display: inline-block;
        border-radius: 3rem;
        height: #{scaleValue(3)};
        width: #{scaleValue(20)};
        background: rgba($white, 0.4);
        margin: 0 #{scaleValue(4)};
        cursor: pointer;

        &.current {
          background: $white;
        }
      }
    }
  }

  &__recommendation {
    background: rgba($greyed-out, 0.3);
    padding: #{scaleValue(20)};
    border-radius: #{scaleValue(5)};
    cursor: pointer;

    &--h3 {
      font-weight: 400;
      font-size: #{scaleValue(20)};
      margin-bottom: #{scaleValue(15)};
    }

    &--p {
      font-size: #{scaleValue(15)};

      &.opacity {
        font-weight: 500;
        opacity: 0.6;
      }
    }
  }
}
</style>
