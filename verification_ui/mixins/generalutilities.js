export default {
    data() {
        return {
            popupopen: true
        }
    },
    methods: {
        navigateToPage(page, id) {
            this.$router.push(`/${page}`)
        },
        navigateToPageWithParams(path, item_param) {
            //console.log(path)
            this.$router.push(`/${path}/${item_param}`);
        },
        popupAction(action) {
            if (typeof action === 'function') {
                action();
            }
            
            this.popupopen ? this.popupopen = false : this.popupopen = true;
        },
        limitTextLength(text, maxLength) {
            if (text.length <= maxLength) {
              return text;
            } else {
              return text.substring(0, maxLength) + '...';
            }
        },
        formatNumberCommas(number, decimalPlaces = 0) {
            if (typeof number !== 'number' || isNaN(number)) {
              return 'Invalid number';
            }
          
            const options = {
              minimumFractionDigits: decimalPlaces,
              maximumFractionDigits: decimalPlaces,
            };
          
            return number.toLocaleString(undefined, options);
        },
        formatNumberCommasMoreDecims(number, decimalPlaces = 8) {
            if (typeof number !== 'number' || isNaN(number)) {
              return 'Invalid number';
            }
          
            const options = {
              minimumFractionDigits: decimalPlaces,
              maximumFractionDigits: decimalPlaces,
            };
          
            return number.toLocaleString(undefined, options);
        },
        formatNumber(number) {
            return this.formatNumberCommas(parseInt(number, 10));
        }        
    },
    computed: {
        currentRoute: function () {
            return this.$route.name
        }
    }
}