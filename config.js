module.exports = {
    app: {
        token: 'ODEyNjM4MDc0NzQ4MTQxNTg4.G89FAF.avGd_l2gGauyOuLRjuiiUpHZbfYpF831G2uMb8',
        playing: 'High School DxD',
        global: false,
        guild: '889354330103234570'
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
