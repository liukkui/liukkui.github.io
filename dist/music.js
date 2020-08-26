const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
//    listFolded: false,
//    listMaxHeight: 90,
    lrcType: 3,
    audio: [
    {
        name: "Explore",
        artist: 'Prince of Spain',
        url: 'http://music.163.com/song/media/outer/url?id=27810132.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
        lrc: 'https://www.liukui.tech/images/Explore-Prince of Spain.lrc',
      },
    {
        name: "1965",
        artist: 'Zella Day',
        url: 'http://music.163.com/song/media/outer/url?id=28798452.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      }
    ]
});

