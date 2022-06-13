import { Inject, Injectable } from '@nestjs/common';
import { Client, Intents } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { SlashCommandBuilder } from '@discordjs/builders';
import { RestartService } from 'src/restart/restart.service';

@Injectable()
export class BotService {
  constructor(
    @Inject(RestartService) private readonly restartService: RestartService,
  ) {
    this.client.login(process.env.DISCORD_BOT_TOKEN);
    new REST({ version: '9' })
      .setToken(process.env.DISCORD_BOT_TOKEN)
      .put(Routes.applicationGuildCommands(this.clientId, this.guildId), {
        body: [this.data],
      });
  }
  private guildId = process.env.GUILD_ID;
  private clientId = process.env.CLIENT_ID;
  //Блок команд(сделан тут же, т.к. команда тут одна - рестарт, если нужно больше, то лучше делать отдельными файлами)
  private data = new SlashCommandBuilder()
    .setName('restart')
    .setDescription('Перезапустить сервер')
    .addNumberOption((option) =>
      option.setName('port').setDescription('Порт запуска').setRequired(false),
    );

  //Конец блока слешкоманд
  private client = new Client({
    intents: [
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_MEMBERS,
    ],
  })
    .once('ready', () => {
      console.log('Ready');
    })
    .on('interactionCreate', async (interaction) => {
      if (!interaction.isCommand()) return;
      const { commandName } = interaction;
      try {
        if (commandName == 'restart') {
          const PORT = interaction.options.getNumber('port');
          this.restartService.restartServer(PORT);
        }
      } catch (e) {}
    });
}
