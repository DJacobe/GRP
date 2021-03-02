const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const copyright = require('../../settings/configuration').COPYRIGHT
module.exports = {
    config: {
        name: 'resume',
        description: 'Resume the current song paused.',
        aliases: [],
    },
    execute: async(Client, message, args) => {
        const empty = new MessageEmbed()
            .setDescription(`Servers queue is empty or there is no song paused!`)
            .setFooter(`${message.guild.name} | ${copyright}`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)

        const serverQueue = Client.queue.get(message.guild.id);

        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            const resume = new MessageEmbed()
                .setDescription(`I have resumed the music in this guild!`)
                .setFooter(`${message.guild.name} | ${copyright}`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
            message.channel.send(resume);
        } else
            return message.channel.send(empty)
    }
}