export default {
    data() {
        return {
            email: null,
            phonenumber: null,
            password: null,
            confirmpassword: null,
            termscheckbox: false,
            passwordInputTypeToText: false,
            confirmpasswordInputTypeToText: false,
            termscontenterror: false
        }
    },
    methods: {
        routeToAuthPage(page) {
            this.$router.push(`/${page}`)
        },
        validateEmail(email) {
            // Regular expression for email validation
            const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

            return emailRegex.test(email);
        },
        toggleInputType(input) {
            if (input === 'password') {
                if (!this.passwordInputTypeToText) {
                    this.passwordInputTypeToText = true;
                } else {
                    this.passwordInputTypeToText = false;
                } 
            } 

            if (input === 'confirmpassword') {
                if (!this.confirmpasswordInputTypeToText) {
                    this.confirmpasswordInputTypeToText = true
                } else {
                    this.confirmpasswordInputTypeToText = false
                }
            }
        },
    }
}