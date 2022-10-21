module.exports = {
    app: {
        token: 'ODEyNjM4MDc0NzQ4MTQxNTg4.Gsbk1Y.hsYgmDQOZAxUIDdzpC4zAy97Nj2bKxfZEk9voE',
        playing: 'High School DxD',
        global: true,
        guild: ''
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
