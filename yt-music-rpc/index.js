const rpc = require('discord-rpc');
const client = new rpc.Client({ transport: 'ipc' });
// rpc.register('920929238301962300');
client.login({ clientId: '920929238301962300' })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);

    client.setActivity({
        details: req.query.title,
        state: `by ${req.query.artist}`,
        largeImageKey: 'youtube_music',
        largeImageText: 'YTMusic > Spotify',
        startTimestamp: Number(req.query.time),
        buttons: [{ label: 'Listen it', url: decodeURIComponent(req.query.link) }]
    }).then(a => {
        res.sendStatus(200);
        console.log(a);
    });
});

app.listen(3123, () => {
    console.log('listening on port 3123');
});
