# RangeEvents-API

<img src="https://media.discordapp.net/attachments/900406129593569290/961970512773394492/unknown.png" alt="Logo" width="200"/>    
   
[![node-current](https://img.shields.io/node/v/rangeevents-api?style=for-the-badge)](https://nodejs.org/en/)
[![GitHub contributors](https://img.shields.io/github/contributors/Danielb23451/rangeevents-api?style=for-the-badge)](https://github.com/Danielb23451/rangeevents-api/graphs/contributors)
[![npm](https://img.shields.io/npm/dt/rangeevents-api?style=for-the-badge)](https://www.npmjs.com/package/rangeevents-api)

## Installation
```bash
npm install rangeevents-api
```

## Documentation

getCurrnetGiveaways(guildId) - Get curnnet giveaways in server


## Example
```js
const Discord = require("discord.js");
const client = new Discord.Client({ intents: Object.keys(Discord.Intents.FLAGS) });
const rea = require("rangeevents-api");
const rangeevents = new rea.client("TOKEN") // get in https://rangeevents.xyz/api-form;


client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}`);
});


client.login("TOKEN");