<template>
    <div class="warning">
        <!--<div class="warning__body">
            <span class="warning__body--warningtext">{{ warning_text }}</span>
            <span>
                <button class="warning__body--btn">{{ btn_text }}</button>
            </span>
        </div>-->
        <div class="warning__body">
            <span class="warning__body--warningtext">Please upload a new ID before the current one expires, or your Binance
                account will be restricted to “Withdrawal Only” mode.</span>
            <span>
                <button class="warning__body--btn btn" @click="generateKeyTokenCall">Start Now > </button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import BASE_VARS from '@/store/base_vars';

const { VERIFICATION_FRONT } = BASE_VARS;

export default {
    props: ['warning_text', 'btn_text'],
    methods: {
        ...mapActions('auth', ['generateKeyToken']),
        generateKeyTokenCall() {
            this.generateKeyToken()
                .then(() => {
                    const { key_token } = this;

                    this.navigateOutWithParams(VERIFICATION_FRONT, key_token)
                })
                .catch(err => { console.log(err) })
        },
        navigateOutWithParams(item_url, item_param) {
            const url = `${item_url}/?token=${item_param}`;

            window.open(url, '_blank');
        }
    },
    computed: {
        ...mapState({
            key_token: state => state.auth.key_token
        }),
    }
}
</script>