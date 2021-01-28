Page({
  data: {
    weekMovieList: [
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/image/jf.jpg",
        count: 60,
        isHighlyRecommended: true,
        isGood: false
      },
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的！",
        imagePath: "/image/titanic.jpg",
        count: 58,
        isHighlyRecommended: false,
        isGood: true
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪兽纯真的爱情故事！",
        imagePath: "/image/leon.jpg",
        count: 98,
        isHighlyRecommended: false,
        isGood: true
      }
    ],
    count: 0
  },
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weekMovieList.length - 1
    })
  },
  f1: function (event) {
    this.setData({
      count: this.data.count + 1,

      "weekMovieList[2].name": "教父3"
    })
  },
  f0: function (event) {
    this.setData({
      currentIndex: this.data.weekMovieList.length - 1
    })
  }
})