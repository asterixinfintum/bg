<template>
    <div>
        <div class="assetsearch">
            <div class="assetsearch__head">

                <div class="assetsearch__inputarea assetsearch__margin-right">
                    <div class="assetsearch__inputarea--svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1gixs0r"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z" fill="currentColor"></path></svg>
                    </div>
                    <div class="assetsearch__inputarea--input">
                        <input placeholder="Search Asset" v-model="searchInput"/>
                    </div>
                </div>

                <div class="assetsearch__checkboxarea assetsearch__margin-right">
                    <input type="checkbox"/>
                    <p>Hide Small Balances</p>
                </div>

                <div class="assetsearch__checkboxarea assetsearch__margin-right">
                    <input type="checkbox" class="lessopacity"/>
                    <p class="lessopacity">Hide Small Balances</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" v-if="create_bot" @click="create_bot">
                    <p>Create Trading Bot</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" v-if="toggleviewbots && !viewbots" @click="toggleviewbots">
                    <p>View Trading Bots</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" v-if="toggleviewbots && viewbots" @click="toggleviewbots">
                    <p>View Asset Balances</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" @click="setCurrentCategory('crypto')">
                    <p>Crypto</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" @click="setCurrentCategory('inhousefiat')">
                    <p>Fiat</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" @click="setCurrentCategory('inhousetokenizedstocks')">
                    <p>Tokenized stocks</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" @click="setCurrentCategory('inhousestocks')">
                    <p>Stocks</p>
                </div>

                <div class="assetsearch__underlinedlink assetsearch__margin-right" v-if="OptimizeYourReturns">
                    <p>Your Growth Calculator</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import listMixin from '@/mixins/list';

export default {
    props: [
        'create_bot', 
        'OptimizeYourReturns',
        'toggleviewbots',
        'viewbots'
    ],
    mixins: [listMixin],
    mounted() {
        this.pageSize = 20;
    }
}
</script>

<style lang="scss">
.assetsearch {
    margin-bottom: #{scaleValue(25)};

    &__head {
        display: flex;
        align-items: center;
    }

    &__margin-right {
        margin-right: #{scaleValue(30)};
        font-size: #{scaleValue(14)};
    }

    &__inputarea {
        border: $border;
        border-radius: #{scaleValue(6)};
        display: flex;
        align-items: center;
        height: #{scaleValue(38)};
        padding-left: #{scaleValue(13)};

        &--svg {
            margin-right: #{scaleValue(8)};
            height: 100%;
            display: flex;
            align-items: center;


            & svg {
                height: #{scaleValue(19)};
                width: #{scaleValue(19)};
                fill: $white;
                opacity: .6;
            }
        }

        &--input {
            
            & input {
                border: none;
                outline: none;
                height: 100%;
                background: transparent;
                width: #{scaleValue(200)};
                padding-right: #{scaleValue(13)};
                color: $white;
                font-size: #{scaleValue(14)};
            }
        }
    }

    &__checkboxarea {
        display: flex;
        align-items: center;

        & input {
            margin-right: #{scaleValue(8)};
            background: transparent;
            transform: translateY(#{scaleValue(-3)});

            &.lessopacity {
                transform: none;
            }
        }

        & p {
            opacity: .6;
            border-bottom: $dashed-border;
            padding-bottom: #{scaleValue(4)};

            &.lessopacity {
                opacity: .9;
                border-bottom: none;
                padding-bottom: 0
            }
        }
    }

    &__underlinedlink {
        color: $primary-color;
        cursor: pointer;
        text-decoration: underline;
    }
}
</style>