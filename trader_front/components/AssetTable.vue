<template>
    <div class="assettable">
        <div class="assettable__search">
            <span class="assettable__search--icon">
                <svg class="sc-aXZVg ktFCMi mx-icon iconfont iconsearch" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" data-icon="SearchOutlined"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.93186 10.8786C9.02879 11.5806 7.89393 11.9987 6.66146 11.9987C3.71594 11.9987 1.32812 9.6109 1.32812 6.66536C1.32812 3.71984 3.71594 1.33203 6.66146 1.33203C9.60699 1.33203 11.9948 3.71984 11.9948 6.66536C11.9948 7.89783 11.5767 9.0327 10.8747 9.93576L14.4662 13.5273C14.7265 13.7876 14.7265 14.2098 14.4662 14.4701C14.2059 14.7304 13.7837 14.7304 13.5234 14.4701L9.93186 10.8786ZM10.6615 6.66536C10.6615 8.8745 8.87059 10.6654 6.66146 10.6654C4.45232 10.6654 2.66146 8.8745 2.66146 6.66536C2.66146 4.45622 4.45232 2.66536 6.66146 2.66536C8.87059 2.66536 10.6615 4.45622 10.6615 6.66536Z"></path></svg>
            </span>
            <span class="assettable__search--input">
                <input placeholder="Search"/>
            </span>
        </div>

        <div class="assettable__header">
           <!-- <span class="assettable__header--item">Favorites</span>
            <span class="assettable__header--item">USDT</span>
            <span class="assettable__header--item">USDC</span>
            <span class="assettable__header--item">ETH</span>
            <span class="assettable__header--item">BTC</span>
            <span class="assettable__header--item">BUSD</span>-->
        </div>

        <div class="assettable__list">
            <div class="assettable__item header-area">
                <div class="assettable__itemarea symbol">
                    <div class="assettable__itemarea--top">
                        <span>Pair</span>
                    </div>
                </div>
                <div class="assettable__itemarea figures">
                    <div class="assettable__itemarea--top">Price</div>
                </div>
                <div class="assettable__lastarea">
                    <div class="assettable__itemarea">
                        <div class="assettable__itemarea--top">Change</div>
                    </div>
                    <div class="assettable__star header-area">
                        <span>
                            <svg class="sc-aXZVg ktFCMi mx-icon iconfont icondefault" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="StarFilled"><path d="M908.096 353.088l-253.888-36.864-113.536-230.08a32.128 32.128 0 0 0-57.408 0L369.792 316.16l-253.888 36.864a32 32 0 0 0-17.728 54.656l183.68 179.072-43.392 252.864a32 32 0 0 0 46.4 33.728L512 753.984l227.072 119.424a32 32 0 0 0 46.4-33.728l-43.392-252.864 183.68-179.072a31.936 31.936 0 0 0-17.664-54.656z"></path></svg>
                        </span>
                    </div>
                </div>
            </div>

            <div class="assettable__item" v-for="item in assets" 
                @click.stop="navigateToTradePage(`trade?wallet=${walletType}`, item._id)">
                <div class="assettable__itemarea symbol">
                    <div class="assettable__itemarea--top">
                        <span>{{ item.coin }}</span>
                        <span>/</span>
                        <span>USDT</span>
                    </div>
                    <div class="assettable__itemarea--bottom">
                        <span>{{ item.networkList[0].blockchain }}</span>
                    </div>
                </div>

                <div class="assettable__itemarea figures">
                    <div class="assettable__itemarea--top">{{ limitTextLength(item.price, 10) }}</div>
                    <div class="assettable__itemarea--bottom">${{ limitTextLength(item.price, 10) }}</div>
                </div>

                <div class="assettable__lastarea">
                    <div class="assettable__itemarea">
                        <div class="assettable__itemarea--top">{{ item.dailyChange }}</div>
                        <div class="assettable__itemarea--bottom">{{ formatNumber(item.quantity) }}</div>
                    </div>
                    <div class="assettable__star">
                        <span>
                            <svg class="sc-aXZVg ktFCMi mx-icon iconfont icondefault" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="StarFilled"><path d="M908.096 353.088l-253.888-36.864-113.536-230.08a32.128 32.128 0 0 0-57.408 0L369.792 316.16l-253.888 36.864a32 32 0 0 0-17.728 54.656l183.68 179.072-43.392 252.864a32 32 0 0 0 46.4 33.728L512 753.984l227.072 119.424a32 32 0 0 0 46.4-33.728l-43.392-252.864 183.68-179.072a31.936 31.936 0 0 0-17.664-54.656z"></path></svg>
                        </span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import cryptoassetsMixin from '@/mixins/cryptoassets';
import generalutilities from '@/mixins/generalutilities';

export default {
    props: ['asset'],
    mixins: [cryptoassetsMixin, generalutilities],
    computed: {
        walletType() {
            return this.$route.query.wallet;
        }
    }
}
</script>

<style lang="scss" scoped>
.assettable {
    height: #{scaleValue(400)};
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: #{scaleValue(12)};
    border-bottom: $border;

    &__search {
        border: $border;
        padding: #{scaleValue(8)};
        border-radius: #{scaleValue(6)};
        
        &:hover {
            border: $colored-border
        }

        &--icon {

            & svg {
                height: #{scaleValue(12)};
                width: #{scaleValue(12)};
                transform: translateY(2px);
                opacity: .7
            }
        }

        &--input {
            
            & input {
                @include input;
            }
        }
    }

    &__item {
        @include flex-align;
        font-size: #{scaleValue(11)};
        margin-bottom: #{scaleValue(12)};
        cursor: pointer;

        &.header-area {
            border-bottom: $border;
        }
    }

    &__header {
        font-size: #{scaleValue(11)};
        margin-bottom: #{scaleValue(12)};
        border-bottom: $border;
        padding: #{scaleValue(12)} 0;
        
        &--item {
            cursor: pointer;
            margin-right: #{scaleValue(14)};
        }
    }

    &__lastarea {
        @include flex-align;
        width: #{scaleValue(40)};
    }

    &__itemarea {
        display: flex;
        flex-direction: column;
        width: #{scaleValue(60)};
        overflow: hidden;
        flex-shrink: 0;

        &.symbol {
            width: #{scaleValue(110)};
        }
        &.figures {
            width: #{scaleValue(110)};
        }

        &--top {
            margin-bottom: #{scaleValue(6)};

            & span {

                &:nth-child(2) {
                    opacity: .5;
                }

                &:nth-child(3) {
                    opacity: .5;
                }
            }
        }

        &--bottom {
            opacity: .5;
        }
    }

    &__star {
        margin-left: #{scaleValue(7)};
        opacity: .4;
        cursor: pointer;

        &.header-area {
            opacity: 0;
        }
    }
}
</style>