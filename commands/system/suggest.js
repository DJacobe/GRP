const { MessageEmbed } = require('discord.js');
const copyright = require('../../settings/configuration').COPYRIGHT
module.exports = {
    config: {
        name: 'suggest',
        description: 'Send a suggestion to the suggestions channel.',
        aliases: [],
    },
    execute: async(Client, message, args) => {
        const embed2 = new MessageEmbed()
            .setDescription(`Please provide valid text for your suggestion!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        suggest = args.join(" ");

        if (!suggest)
            return message.channel.send(embed2);

        const embed = new MessageEmbed()
            .setTitle(`New Suggestion from ${message.author.tag}`)
            .addField('Suggestion:', suggest)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        const msg = await message.channel.send(embed);

        await msg.react('✅');
        await msg.react('❌');
    },
};