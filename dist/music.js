const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
    {
        name: "Explore",
        artist: 'Prince of Spain',
        url: 'http://music.163.com/song/media/outer/url?id=27810132.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      },
    {
        name: "1965",
        artist: 'Zella Day',
        url: 'https://sharefs.yun.kugou.com/202008261143/c97e484cf20b88d1aab47a5ef220557a/G111/M06/0C/1B/D4cBAFvm_jaAM-KdADU1t9Z612M078.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      }
    ]
});

