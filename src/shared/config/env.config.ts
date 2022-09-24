const BASE_API_URL = process.env.REACT_APP_BASE_API_URL!

if(!BASE_API_URL){
    throw new Error(`Api url .env fileda mavjud emas!`)
}

const env = {
    BASE_API_URL
}

export default env