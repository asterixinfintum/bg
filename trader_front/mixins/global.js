export default {
    methods: {
        addEllipsis(str, maxChars) {
            if (str.length > maxChars) {
                return str.substring(0, maxChars - 3) + '...';
            } else {
                return str;
            }
        },
        convertToFloat(str) {
            return parseFloat(str.replace(/,/g, ''));
        },
        compareAssetsPrices(price0fAssetA, price0fAssetB) {
            return parseFloat(price0fAssetA) / parseFloat(price0fAssetB)
        },
    }
}