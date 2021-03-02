const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const copyright = require('../../settings/configuration').COPYRIGHT
module.exports = {
    config: {
        name: 'pause',
        description: 'Pauses the current playing song.',
        aliases: [],
    },
    execute: async(Client, message, args) => {

        const serverQueue = Client.queue.get(message.guild.id);

        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();

            const pause = new MessageEmbed()
                .setDescription(`I have paused the music in this guild!`)
                .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
            message.channel.send(pause);
            const empty = new MessageEmbed()
                .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
                .setFooter(`${copyright}`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
        } else return message.channel.send(empty);
    }
}