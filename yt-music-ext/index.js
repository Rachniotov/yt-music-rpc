if (document.location.href.includes('music.youtube')) {
    console.log('sdfjhsdfhsdfh!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    let flag = true;
    setInterval(() => {
        const name = document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > yt-formatted-string');
        const artist = document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > span > span.subtitle.style-scope.ytmusic-player-bar > yt-formatted-string');
        let timeElasped = document.querySelector('#left-controls > span').innerText.split(' / ')[0];
        const now = Date.now();
        timeElasped = now - (parseTime(timeElasped) * 1000);

        if (flag) {
            var link = generateLink();
        }

        link = document.querySelector('#copy-link > yt-copy-link-renderer > #bar > #share-url');
        console.log(link.value);

        fetch(`http://localhost:3123/?title=${encodeURIComponent(name?.innerText)}&artist=${encodeURIComponent(artist?.innerText.split('•')[0])}&time=${timeElasped}&link=${encodeURIComponent(link.value)}`).catch(() => {});
        flag = false;
    }, 1000*5);
}

function parseTime (string) {
    const raw = string.split(':');
    return Number(raw[0] * 60) + Number(raw[1]);
}

function generateLink () {
    document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.middle-controls-buttons.style-scope.ytmusic-player-bar > ytmusic-menu-renderer > #button').click();
    document.querySelector('#items > ytmusic-menu-navigation-item-renderer:nth-child(10) > #navigation-endpoint').click();
    document.querySelector('body > ytmusic-app > ytmusic-popup-container > tp-yt-paper-dialog > ytmusic-unified-share-panel-renderer > div > tp-yt-paper-icon-button > #icon').click();

    return document.querySelector('#copy-link > yt-copy-link-renderer > #bar > #share-url').value;
}
