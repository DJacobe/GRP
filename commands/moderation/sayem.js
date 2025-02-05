const { MessageEmbed } = require('discord.js')
const copyright = require('../../settings/configuration').COPYRIGHT
module.exports = {
    config: {
        name: 'sayem',
        description: 'Make the bot say whatever you want in an embed.',
        aliases: [`talk`],
    },
    execute: async(Client, message, args, config, prefix, base) => {
        let embed3 = new MessageEmbed()
            .setDescription(`I only talk for certain people!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);

        let embed4 = new MessageEmbed()
            .setDescription(`You failed to provide what I will be saying!`)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);

        await message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed3).then(w => {
            setTimeout(() => {
                w.delete()
            }, 5000)
        })
        const filter = response => {
            return response.author.id === message.author.id
        };
        let say = args.slice(0).join(" ")
        if (!say) return message.channel.send(embed4)
        message.delete()
        let sayem = new MessageEmbed()
            .setDescription(say)
            .setColor(Client.color)
            .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
        message.channel.send(sayem)
    }
}