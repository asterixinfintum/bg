export default {
    data() {
        return {
            base_url: 'http://localhost:8080',  
        }
    },
    methods: {
        returnCryptoLogo(symbol) {
            const { base_url, cryptoLogos } = this;
            const logo = cryptoLogos.find(cryptoLogo => cryptoLogo.toLowerCase().includes(symbol.toLowerCase()));
            return `${base_url}/${logo}`;
        }
    },
    computed: {
        cryptoLogos() {
            const cryptoLogos = [
                'basic-attention-token-bat-logo.svg',
                'bitcoin-btc-logo.svg',
                'bitcoin-cash-bch-logo.svg',
                'bnb-bnb-logo.svg',
                'cardano-ada-logo.svg',
                'chainlink-link-logo.svg',
                'dash-dash-logo.svg',
                'dogecoin-doge-logo.svg',
                'eos-eos-logo.svg',
                'ethereum-eth-logo.svg',
                'internet-computer-icp-logo.svg',
                'litecoin-ltc-logo.svg',
                'maker-mkr-logo.svg',
                'monero-xmr-logo.svg',
                'neo-neo-logo.svg',
                'polygon-matic-logo.svg',
                'polymath-network-poly-logo.svg',
                'polymath-network-poly-logo.svg',
                'stellar-xlm-logo.svg',
                'synthetix-snx-logo.svg',
                'tether-usdt-logo.svg',
                'tron-trx-logo.svg',
                'uniswap-uni-logo.svg',
                'xrp-xrp-logo.svg'
            ]

            return cryptoLogos;
        },
    }
}