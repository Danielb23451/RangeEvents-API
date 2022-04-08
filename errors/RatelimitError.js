const ms = require("ms")

/**
 * @extends Error
 * @property {string} name The type of ratelimit (RatelimitError)
 * @property {number} status HTTP status of the ratelimit
 * @property {number} remaining The time of ratelimit
 * @property {string} message The message of the ratelimit
 */

class RatelimitError extends Error {
    constructor(res) {
        super();
        this.name = this.constructor.name;
        this.status = res.status;
        this.remaining = res.data["Ratelimit"]
        this.message = 'You got RateLimit for' + ms(this.remaining)
    }
}

module.exports = RatelimitError;