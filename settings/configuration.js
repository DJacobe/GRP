module.exports = {
    BOT_SETTINGS: {
        BOT_TOKEN: '',
        YT_API_KEY: 'YT_API_KEY',
        COPYRIGHT: '© Grove RP',
        COMMAND_PREFIX: '.',
        EMBED_COLOR: 'Purple',
        MUTE_ROLE: 'ROLEID',
        BANNED_WORDS: [],
        BYPASS_ROLES: [],
        BANNED_LINKS: ['www.', 'https://', '.com', '.net', '.gov', '.co', '.uk', '.live'],
        BYPASS_LINKS_ROLES: [`805236918932602920, 809577537100972092, 806040980909850684, 816123533838123029`],
        Member_Count_Channel: '676021770289020929',
        Guild_ID: '779820211775078400',
        Kick_On_Warnings: true,
        Warnings_Until_Kick: '5',
        Time_Muted: '25m',
        Roles_On_Join: [`779820211775078406`]
    },
    VERIFICATION: {
        Enabled: false,
        Verify_Channel: 'CHANNELID',
        Verify_Role: 'ROLEID',
        Role_To_Remove: 'ROLEID'
    },
    USER_DMS: {
        Enabled: true,
        Dm_Category: '816233192456847381',
        Dm_Channel_Name: 'new-dm-{user}',
        View_Dmchannels_Roles: [`816233003600445502`]
    },
    Ping_Prevention: {
        Enabled: false,
        Enabled_Types: 'user',
        Max_Channel_Pings: '5',
        Max_Role_Pings: '5',
        Max_User_Pings: '5',
        Max_Pings: '10',
        Punishment: 'kick',
        Bypass_Roles: []
    },
    LOCKDOWN_KICK: {
        Enabled: false,
        Kick_Message: '{server} is currently in LOCKDOWN MODE! We have kicked you for the time, please try joining back later {member}. '
    },
    LEVELING_SYSTEM: {
        Enabled: false,
        Remove_XP_On_Leave: false,
        Level_Up_Message: '{user} has just reached level {level}!',
        Level_Up_Channel_ID: 'CHANNELID'
    },
    LOGGING: {
        Report_Channel: '805223943081558036',
        Ban_Channel_Logs: '816233610402070548',
        Unban_Channel_Logs: '816233610402070548',
        Kick_Channel_Logs: '816233610402070548',
        Warn_Channel_Logs: '816233610402070548',
        Mute_Channel_Logs: '816233610402070548',
        Lock_Channel_Logs: '816233610402070548',
        Ticket_Channel_Logs: '816233610402070548',
        Moderation_Channel_Logs: '816233610402070548',
        Server_Updates: '816233610402070548',
        Voice_Updates: '816233610402070548'
    },
    TICKET_SYSTEM: {
        TICKET_CATEGORY: 'CATEGORY_ID',
        SUPPORT_TEAM_ROLES: 'ROLEID',
    },
    GREETING_SYSTEM: {
        Enabled: true,
        Welcome_Channel: '806683808690339840',
        Welcome_Type: 'card',
        Welcome_Cards_Image_Link: 'https://i.imgur.com/h0tAGvM.jpg',
        Welcome_Message: 'Welcome {member} to the server, You are our {joinPosition} member!',
        Welcome_Embed: {
            title: '{member.username} has just joined the server!',
            description: 'Welcome {member} to the server, You are our {joinPosition} member!',
            color: 'blue'
        }
    }
}
