const rpc = require('discord-rpc');
const client = new rpc.Client({ transport: 'ipc' });
// rpc.register('920929238301962300');
client.login({ clientId: '920929238301962300' })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query.paused);
    if (req.query.artist !== 'undefined') {
        if (req.query.paused === "Play") {
            client.setActivity({
                details: req.query.title,
                state: `by ${req.query.artist}`,
                largeImageKey: req.query.thumb,
                largeImageText: 'YTMusic > Spotify',
                smallImageKey: "https://www.freeiconspng.com/uploads/pause-icon-13.png",
                smallImageText: "Paused",
                startTimestamp: Number(req.query.time),
            }).then(a => {
                res.sendStatus(200);
                console.log(a);
            });    
        } else {
            client.setActivity({
                details: req.query.title,
                state: `by ${req.query.artist}`,
                largeImageKey: req.query.thumb,
                largeImageText: 'YTMusic > Spotify',
                startTimestamp: Number(req.query.time),
            }).then(a => {
                res.sendStatus(200);
                console.log(a);
            });
        }
    }

});

app.listen(3123, () => {
    console.log('listening on port 3123');
});
