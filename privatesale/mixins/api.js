export default {
    data() {
        return {
            url: "https:// privatesaleapi.bvxtrade.com",
            email: "",
            pin: "",
            authmessage: "",
            loading: false,
            emailView: false,
            pinView: false,
            isEmailValid: false,
            errorMessage: '',
            userBtcAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
            copyAddressLabel: 'Copy address',
            otpmsg: false
        }
    },
    mounted() {
        console.log(window.location.href);
    },
    watch: {
        userDetails(newValue, oldValue) {
            // console.log(newValue)
        }
    },
    computed: {
        userDetails() {
            return this.$store.state.userDetails;
        }
    },
    methods: {
        async submitEmail() {
            if (this.isEmailValid) {
                try {
                    fetch(`${this.url}/verifyemail`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: this.email }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            this.emailView = false;
                            this.pinView = true;
                            this.otpmsg = true;
                        })
                        .catch((error) => console.error('Error:', error));
                } catch (error) {
                    console.error('Error submitting email:', error);
                    alert('An error occurred. Please try again later.');
                }
            }
        },
        async submitPin() {
            try {
                if (this.pin.length && this.pin.length === 8) {
                    fetch(`${this.url}/loginwithpin`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ pin: this.pin }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)

                            this.$store.dispatch('setUserIdentifier', data.registrant._id);
                            this.$store.dispatch('setUserEmail', data.registrant.email);
                            this.$store.dispatch('setUserDetails', data.registrant)

                            this.$router.push({
                                path: '/dashboard',
                                query: { userIdentifier: data.registrant._id },
                            });
                        })
                        .catch((error) => console.error('Error:', error));
                }
            } catch (error) {
                console.error('Error submitting pin:', error);
                alert('An error occurred. Please try again later.');
            }
        },
        copyAddress() {
            const address = this.userBtcAddress;

            navigator.clipboard.writeText(address)
                .then(() => {
                    this.copyAddressLabel = 'Address copied';

                    setTimeout(() => {
                        this.copyAddressLabel = 'Copy address';
                    }, 5000)
                })
                .catch((error) => {
                    console.error('Failed to copy address:', error);
                });
        }
    }
}