const axios = require('axios');
const RequestHandler = require("./RequestHandler")

class client {
    constructor(token) {
        /**
         *
         * @constructs TOKEN
         * @description This is the main class that you initalize to perform all the requests to the API
         * @param {string} token - The token you use to authenticate to the API
         */
        if (!token) throw TypeError('Please specify a token.');
        if (typeof token !== "string") throw new TypeError("Please specify a vaild token.")
        this.requestHandler = new RequestHandler(token)
        this.token = token;
    }

    /**
     * Get the curnnet giveaways on server
     *
     * @public
     * @async
     * @param {string} guildId - The guild ID to get giveaways
     * @throws {APIError}
     * @throws {RatelimitError}
     * @returns {Promise<Giveaways>} return Giveaways
     */
    async getCurnnetGiveaways(guildId) {
        if (typeof guildId !== "string") throw new TypeError("Please specify a vaild guildId.")
        const data = await this._request(`/api/${guildId}/giveaways/`, {}, "GET")
        return data
    }

    /**
 * Post new 
 *
 * @public
 * @async
 * @param {string} guildId - The guild ID to get giveaways
 * @throws {APIError}
 * @throws {RatelimitError}
 * @returns {Promise<Giveaways>} return Giveaways
 */
    async CreateGiveaway(guildId) {
        if (typeof guildId !== "string") throw new TypeError("Please specify a vaild guildId.")
        const data = await this._request(`/api/giveaways/${guildId}`, {}, "POST")
        return data
    }

    _request(endpoint, query = {}, method = "GET", body = {}) {
        return this.requestHandler.request(endpoint, query, method)
    }
}

module.exports.client = client;