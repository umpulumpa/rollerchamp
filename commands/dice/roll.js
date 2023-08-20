const { SlashCommandBuilder } = require('discord.js');

function roll(faces) {
    const randomNumber = Math.floor(Math.random() * faces) + 1;
    return `Your dice landed on: ${randomNumber}`;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a dice')
        .addNumberOption(option =>
			option.setName('faces')
				.setDescription('The number of faces')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply(roll(interaction.options.getNumber("faces")));
	},
};
