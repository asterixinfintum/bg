let BASE_URL;
let VERIFICATION_SERVER;
let DEVELOPMENT;

DEVELOPMENT = true;

if (DEVELOPMENT) {
    BASE_URL = 'http://localhost:8080';
    VERIFICATION_SERVER = 'http://localhost:8081'
} else {
    BASE_URL = 'https://bercfinance.com'
    VERIFICATION_SERVER = 'https://verification.bercfinance.com';
}

const BASE_VARS = {
    BASE_URL,
    VERIFICATION_SERVER
}

export default BASE_VARS;