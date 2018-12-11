const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'トリカゴ',
        artist: 'Kyle Xian',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/57/8/3372842215.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      },
      {
        name: 'Right Now (Na Na Na)',
        artist: 'Am1r',
        url: 'http://sg.sycdn.kuwo.cn/resource/n1/91/17/2649203588.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      },
      {
        name: '光るなら',
        artist: 'Goose house',
        url: 'http://other.web.rf01.sycdn.kuwo.cn/resource/n1/77/17/2299001074.mp3',
        cover: 'https://www.liukui.tech/images/haha.gif',
      },
    ]
});