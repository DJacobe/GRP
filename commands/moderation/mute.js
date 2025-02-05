const { MessageEmbed } = require('discord.js');
const ms = require('parse-duration');
const copyright = require('../../settings/configuration').COPYRIGHT
module.exports = {
    execute: async(Client, message, args) => {
        let embed3 = new MessageEmbed()
            .setDescription(`Please provide a valid time duration!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        let embed4 = new MessageEmbed()
            .setDescription(`Please provide a valid member by mention or ID!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        let embed5 = new MessageEmbed()
            .setDescription(`You can\'t mute yourself!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        if (!message.member.hasPermission('MUTE_MEMBERS'))
            return message.channel.send(`\`❌\` You don't have permissions`);

        const member = message.guild.member(
            message.mentions.users.first() || Client.users.cache.get(args[0])
        );

        let time = ms(args[1]);
        if (!time)
            return message.channel.send(embed3);


        const reason = args.slice(2).join(' ') || 'Unspecified';

        if (!member)
            return message.channel.send(embed4);

        if (member.id === message.author.id)
            return message.channel.send(embed5);

        await member.roles.add(Client.muteRole);

        const successLog = new MessageEmbed()
            .setTitle(`Punishment System!`)
            .setDescription(
                `\`✅\` **${member.displayName}** has been muted for **${time}**\nReason: **${reason}**.`
            )
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        message.channel.send(successLog);

        setTimeout(async() => {
            await member.roles.remove(Client.muteRole);
        }, ms(time));
    },

    config: {
        name: 'mute',
        description: 'Temporarily mute a user, preventing them from speaking.',
        aliases: ['tempmute'],
    },
};