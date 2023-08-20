const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription('template command.'),
	async execute(interaction) {
		await interaction.reply(`This is a template command.`);
	},
};
