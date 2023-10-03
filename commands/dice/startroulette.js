const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js');

function buildEmbed() {
    const embed = new EmbedBuilder()
    .setTitle("Roulette")
    .setDescription("/joinroulette to join the roulette")
    .addFields(
        {
        name: "Starting in:",
        value: "<t:1696369740:R>",
        inline: false
        },
    )
    .setThumbnail("D:/programming/bots/rollerchamp/assets/images/roulette.png")
    .setColor("#b93c3c");

 return embed
}

function createButtons() {
    const buttonData = [
        {label: "Quickjoin All In", id: "roulette_quickjoin_all"},
        {label: "Quickjoin 50/50", id: "roulette_quickjoin_50_50"},
        {label: "Quickjoin 1/3", id: "roulette_quickjoin_1_3"},
        {label: "Quickjoin 1000", id: "roulette_quickjoin_1000"},
        {label: "Quickjoin 5000", id: "roulette_quickjoin_5000"},
    ]
    
    let buttons = []
    buttonData.forEach(button => {
        buttons.push(new ButtonBuilder()
        .setCustomId(button.id)
        .setLabel(button.label))
    })
    return buttons;
}


function start() {
    console.log(__dirname)
    // const randomNumber = Math.floor(Math.random() * faces) + 1;
    return buildEmbed();
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startroulette')
		.setDescription('Starts the roulette match'),
	async execute(interaction) {
		await interaction.reply({embeds: [start()], components: [createButtons()]});
	},
};

