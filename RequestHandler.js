const axios = require('axios');
const { APIError, RatelimitError } = require('./errors');

class RequestHandler {
    constructor(token) {
        this._token = token;
        this.baseURL = 'http://localhost:8000'
    }

    async request(endpoint, query = {}, method, body, _attempts = 0) {
        return new Promise(async (resolve, reject) => {
            const options = {
                validateStatus: null,
                headers: {
                    "Authorization": this._token,
                    "Content-Type": "application/json",
                },
                baseURL: this.baseURL,
                url: endpoint,
                method: method,
                data: body,
                params: query,
                timeout: 15000,
            }
            try {
                axios(options).then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        resolve(res.data)
                    } else if (res.status === 429) {
                        reject(new RatelimitError(res))
                    } else {
                        reject(new APIError(res))
                    }
                })
            } finally {}
        })
    }
}

module.exports = RequestHandler