let BASE_URL;
let DEVELOPMENT;

DEVELOPMENT = false;

if (DEVELOPMENT) {
    BASE_URL = 'http://localhost:8080';
} else {
    BASE_URL = 'https://bercfinance.com'
}

const BASE_VARS = {
    BASE_URL,
}

export default BASE_VARS;