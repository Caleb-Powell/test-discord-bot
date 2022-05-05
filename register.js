require('dotenv/config') 
const config = require("./config.json")
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9'); 

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(config.applicationId, config.guildId),
      { body: config.commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();