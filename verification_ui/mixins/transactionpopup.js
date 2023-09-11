export default {
    props: ['subject', 'backFunction', 'closeFunction'],
    data() {
        return {
            opacity: true,
            numberInput: ''
        }
    },
    methods: {
        validateNumberInput() {
            const formattedNumber = this.numberInput.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            this.numberInput = formattedNumber;
        }   
    }
}