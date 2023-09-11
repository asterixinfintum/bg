<template>
    <div class="header" :class="generalLandingPageStyle" id="header">
        <div class="header__left">
            <div class="header__logo" v-if="client" @click="$router.push('/overview')">
                <figure></figure>
                <p>BERC</p>
            </div>
            <div class="header__logo" v-if="!client" @click="$router.push('/')">
                <figure></figure>
                <p>BERC</p>
            </div>
            <div class="header__menu">
                <div class="header__menuitem" @click="openInNewTab('https://www.coindesk.com/learn/')">
                    <label>Learn</label>
                </div>
                <div class="header__menuitem" @click="openInNewTab('https://www.coindesk.com/data/')">
                    <label>Markets</label>
                </div>
                <div class="header__menuitem">
                    <label>Trade</label>
                    <span class="svg">
                        <svg class="sc-bgqQcB halGnt mx-icon icondown" focusable="false" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined">
                            <path
                                d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z">
                            </path>
                        </svg>
                    </span>
                    <div class="header__dropdown left">
                        <div class="header__dropdowncontent">
                            <div class="header__dropdowncontent--item">
                                <figure class="header__dropdowncontent--logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" class="css-1s4hjvp">
                                        <use xlink:href="#market-overview-g"></use>
                                    </svg>
                                </figure>
                                <div>
                                    <span class="header__dropdowncontent--headerlabel">Spot</span>
                                    <span class="header__dropdowncontent--textlabel">
                                        designed for the modern trader who demands convenience, flexibility, and security.
                                        Our spot wallet is tailored to meet the needs of active traders.
                                    </span>
                                </div>
                            </div>

                            <div class="header__dropdowncontent--item">
                                <figure class="header__dropdowncontent--logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" class="css-1s4hjvp">
                                        <use xlink:href="#market-overview-g"></use>
                                    </svg>
                                </figure>
                                <div>
                                    <span class="header__dropdowncontent--headerlabel">Margin</span>
                                    <span class="header__dropdowncontent--textlabel">
                                        Our margin wallet is specifically designed for traders who want to use margin
                                        trading to amplify their gains.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header__menuitem" @click="openInNewTab('https://www.coindesk.com/business/')">
                    <label>News</label>
                </div>
            </div>
        </div>
        <div class="header__right">
            <div class="header__search" :class="generalLandingPageStyle" id="header__search">
                <span class="header__search--logo">
                    <svg class="sc-aXZVg ktFCMi mx-icon iconfont iconsearch" focusable="false" width="1em" height="1em"
                        fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" data-icon="SearchOutlined">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.93186 10.8786C9.02879 11.5806 7.89393 11.9987 6.66146 11.9987C3.71594 11.9987 1.32812 9.6109 1.32812 6.66536C1.32812 3.71984 3.71594 1.33203 6.66146 1.33203C9.60699 1.33203 11.9948 3.71984 11.9948 6.66536C11.9948 7.89783 11.5767 9.0327 10.8747 9.93576L14.4662 13.5273C14.7265 13.7876 14.7265 14.2098 14.4662 14.4701C14.2059 14.7304 13.7837 14.7304 13.5234 14.4701L9.93186 10.8786ZM10.6615 6.66536C10.6615 8.8745 8.87059 10.6654 6.66146 10.6654C4.45232 10.6654 2.66146 8.8745 2.66146 6.66536C2.66146 4.45622 4.45232 2.66536 6.66146 2.66536C8.87059 2.66536 10.6615 4.45622 10.6615 6.66536Z">
                        </path>
                    </svg>
                </span>
                <span class="header__search--input">
                    <input placeholder="Search" />
                </span>
            </div>

            <div class="header__btns header__menu" v-if="!client">
                <div class="header__menuitem">
                    <button class="btn transparent landing rounded-corner header-padding" @click="navigateToPage('login')"
                        id="login-btn">Log In</button>
                </div>
                <div class="header__menuitem">
                    <button class="btn padded-btn colored-btn colored landing rounded-corner header-padding"
                        @click="navigateToPage('register')">open an account</button>
                </div>
            </div>

            <div class="header__btns header__menu" v-if="client">
                <button class="btn padded-btn colored-btn" @click="$router.push(`/wallet/fiatandspot`)">Deposit</button>
                <div class="header__menuitem">
                    <label></label>
                </div><!--for adding margin between the btn above and the menuitem below ;)-->
                <div class="header__menuitem">
                    <label>Convert</label>
                </div>
                <div class="header__menuitem">
                    <span class="header__menuitem--svgbtn">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                            class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <g>
                                <path
                                    d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z">
                                </path>
                            </g>
                        </svg>
                    </span>
                    <div class="header__dropdown right">
                        <div class="header__dropdowncontent">
                            <div class="header__dropdowncontent--item">
                                <figure class="header__dropdowncontent--logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" class="css-1s4hjvp">
                                        <use xlink:href="#market-overview-g"></use>
                                    </svg>
                                </figure>
                                <div>
                                    <span class="header__dropdowncontent--headerlabel">Dashboard</span>
                                    <span class="header__dropdowncontent--textlabel">
                                        You received a deposit of 30,000 usdt
                                    </span>
                                </div>
                            </div>

                            <div class="header__dropdowncontent--item" @click="triggerlogout">
                                <figure class="header__dropdowncontent--logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" class="css-1s4hjvp">
                                        <use xlink:href="#market-overview-g"></use>
                                    </svg>
                                </figure>
                                <div>
                                    <span class="header__dropdowncontent--headerlabel">Logout</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="header__menuitem notifications">
                    <span class="notifications">20</span>
                    <span class="header__menuitem--svgbtn">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                            class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <g>
                                <path
                                    d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z">
                                </path>
                            </g>
                        </svg>
                    </span>
                    <div class="header__dropdown right">
                        <div class="header__dropdowncontent">
                            <div class="header__dropdowncontent--item">
                                <figure class="header__dropdowncontent--logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" class="css-1s4hjvp">
                                        <use xlink:href="#market-overview-g"></use>
                                    </svg>
                                </figure>
                                <div>
                                    <span class="header__dropdowncontent--headerlabel">Received Deposit</span>
                                    <span class="header__dropdowncontent--textlabel">
                                        You received a deposit of 30,000 usdt
                                    </span>
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
import { mapActions, mapState, mapMutations } from 'vuex';
import generalutilities from '@/mixins/generalutilities';
import clientMixin from '@/mixins/client';
import cryptoassetsMixin from '@/mixins/cryptoassets';
import inhouseassetsMixin from '@/mixins/inhouseassets';

export default {
    name: 'Landing',
    mixins: [generalutilities, clientMixin, cryptoassetsMixin, inhouseassetsMixin],
    methods: {
        ...mapActions('auth', ['logout']),
        triggerlogout() {
            const { logout } = this;
            logout().then(() => this.$router.push('/'));
        }
    },
    computed: {
        generalLandingPageStyle() {
            return {
                landing: this.$route.name === 'index'
            };
        }
    },
};
</script>