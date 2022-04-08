const axios = require('axios');
const RequestHandler = require("./RequestHandler")

class TOKEN {
    constructor(token, options) {
    /**
     *
     * @constructs TOKEN
     * @description This is the main class that you initalize to perform all the requests to the API
     * @param {string} token - The token you use to authenticate to the API
     */
        if (!token) throw TypeError('Please specify a token.');
        if (typeof token !== "string") throw new TypeError("Please specify a vaild token.")
        this.requestHandler = new RequestHandler(this)
        this.token = token;
    }

    /**
     * Get the cornnet giveaways on server
     *
     * @public
     * @async
     * @param {string} guildId - The guild ID to get giveaways
     * @throws {APIError}
     * @throws {RatelimitError}
     * @returns {Promise<Giveaways>} return Giveaways
     */
         async getCornnetGiveaways(guildId) {
                if (typeof guildId !== "string") throw new TypeError("Please specify a vaild guildId.")
                const data = await this._request(`/api/giveaways/${guildId}`, {}, "GET", { members: userId })
                return data
    }
}

module.exports.TOKEN = TOKEN;