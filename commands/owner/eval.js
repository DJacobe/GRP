module.exports = {
    config: {
        name: 'eval',
        aliases: [],
    },
    execute: async(client, msg, args) => {
        if (!['371200410364411904'].includes(msg.author.id)) return
        try {
            await eval(`(async () => {${args.join(' ')}})()`)
        } catch (e) {
            msg.channel.send(e.message)
            console.log(e)
        }
    }
}