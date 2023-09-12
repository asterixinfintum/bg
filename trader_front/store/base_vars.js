let BASE_URL;
let BTC_SERVER;
let VERIFICATION_FRONT;
let DEVELOPMENT;

DEVELOPMENT = true;

if (DEVELOPMENT) {
    BASE_URL = 'http://localhost:8080';
    BTC_SERVER = 'http://localhost:8084';
    VERIFICATION_FRONT = 'http://localhost:60858'
} else {
    BASE_URL = 'https://bercfinance.com'
    BTC_SERVER = 'https://bitcoin.bercfinance.com';
    VERIFICATION_FRONT = 'https://verification.bercfinance.com';
}

const BASE_VARS = {
    BASE_URL,
    VERIFICATION_FRONT,
    BTC_SERVER,
}

export default BASE_VARS;