import { ethers } from "ethers";

export default {
    data() {
        return {
            priceFeedContract: null,
            paymentContract: null,
            usdtbalance: 0,
            ethbalance: 0,
            bvxtbalance: 0,
            currentbalance: 0,
            usdtPrice: 0,
            ethPrice: 0,
            bvxtPrice: 0,
            usdtAddress: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
            ethAddress: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
            bvxtAddress: '',
            amountFrom: null,
            amountTo: 0,
            loading: false,
        }
    },
    computed: {
        allowBuy() {
            return this.amountFrom != 0 && this.amountFrom != null;
        },
        buyable() {
            return this.currentbalance > 0;
        },
        assetsFrom() {
            return [
                //{ image: "/imgs/tether-usdt-logo.png", symbol: "USDT", price: "", balance: this.usdtbalance },
                { image: "/imgs/ethereum-eth-logo.png", symbol: "ETH", price: "", balance: this.ethbalance },
            ];
        },
        userIdentifier() {
            return this.$store.state.userIdentifier;
        },
        priceFeedAbi() {
            return this.$store.state.priceFeedAbi;
        },
        priceFeedAddress() {
            return this.$store.state.priceFeedAddress;
        },
        paymentContractAbi() {
            return this.$store.state.paymentContractAbi;
        },
        paymentContractAddress() {
            return this.$store.state.paymentContractAddress;
        },
    },
    watch: {
        userIdentifier(newValue, oldValue) {
            console.log('userIdentifier changed:', newValue);

            if (newValue) {
                console.log('New userIdentifier:', newValue);
                this.$router.push({
                    path: '/dashboard',
                    query: { userIdentifier: newValue },
                });
            } else {
                console.log('userIdentifier cleared');
            }
        },
    },
    methods: {
        async updateETHBalance() {
            try {
                await this.getETHUserBalance();

                const ethbalance = this.ethbalance;

                this.selectAssetFrom({
                    image: "/imgs/ethereum-eth-logo.png",
                    symbol: "ETH",
                    price: "",
                    balance: ethbalance,
                });
            } catch (error) {
                console.error("Error updating ETH balance:", error);
            }
        },
        async callReceivePayment(entryFeeETH) {
            this.loading = true;
            try {
                const valueInWei = ethers.utils.parseEther(entryFeeETH.toString());

                const tx = await this.paymentContract.receivePayment({
                    value: valueInWei,
                });

                console.log("Transaction sent! Waiting for confirmation...");

                // Wait for the transaction to be mined
                const receipt = await tx.wait();
                console.log("Transaction confirmed in block:", receipt.blockNumber);

                // Emit event details (if needed)
                const event = this.paymentContract.interface.parseLog(receipt.logs[0]);
                console.log("PaymentReceived event:", event.args);
                this.updateETHBalance();
                this.loading = false;
                this.amountFrom = null;
            } catch (error) {
                console.error("Error calling receivePayment:", error);
            }
        },
        formatBigNumber(bigNumberValue) {
            const formattedValue = ethers.utils.formatUnits(bigNumberValue, 18);

            console.log(bigNumberValue, 'bigNumberValue');

            return formattedValue
        },
        async connect() {
            const provider = await this.createProvider();

            const userAddress = await this.returnUserAddress(provider);

            this.$store.dispatch('setUserIdentifier', userAddress);

            console.log(userAddress);
        },
        async createProvider() {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);

                return provider;
            } catch (error) {
                console.log(error);
            }
        },
        async returnUserAddress(provider) {
            try {
                const signer = provider.getSigner();
                const userAddress = await signer.getAddress();

                return userAddress;
            } catch (error) {
                console.log(error);
            }
        },
        async createContractCaller(contractaddress, contractabi) {
            try {
                const provider = await this.createProvider();

                const signer = await this.returnSigner(provider);

                const contractcaller = new ethers.Contract(
                    contractaddress,
                    contractabi,
                    signer
                );

                console.log(contractcaller)

                return contractcaller;
            } catch (error) {
                console.log(error);
            }
        },
        async returnSigner(provider) {
            try {
                const signer = provider.getSigner();

                return signer;
            } catch (error) {
                console.log(error);
            }
        },
    }
}