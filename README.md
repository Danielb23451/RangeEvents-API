# RangeEvents-API

<img src="https://cdn.discordapp.com/avatars/931173019764817930/050bab3f08fe84b1d87922d6d4f89b0d.png" alt="Logo" width="200"/>    
   
[![node-current](https://img.shields.io/node/v/rangeevents-api?style=for-the-badge)](https://nodejs.org/en/)
[![GitHub contributors](https://img.shields.io/github/contributors/Danielb23451/rangeevents-api?style=for-the-badge)](https://github.com/Danielb23451/rangeevents-api/graphs/contributors)
[![npm](https://img.shields.io/npm/dt/rangeevents-api?style=for-the-badge)](https://www.npmjs.com/package/rangeevents-api)

## Installation
```bash
npm install rangeevents-api
```

## Documentation

getCurnnetGiveaways(guildId) - Get curnnet giveaways in server


## Example
```js
const Discord = require("discord.js");
const client = new Discord.Client({ intents: Object.keys(Discord.Intents.FLAGS) });
const rea = require("rangeevents-api");
const rangeevents = new rea.token("TOKEN") // get in https://rangeevents.xyz/api-form;


client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}`);
});


client.login("TOKEN");