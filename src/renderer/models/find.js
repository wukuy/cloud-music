import Http from '@common/app.http.js'

module.exports = {
  // 获取banner
  getBanner: () => Http({
    url: '/banner'
  }),
  // 推荐歌单
  personalized: () => Http({
    url: '/personalized'
  }),
  // 获取
  playlistDetail: (data) => Http({
    url: '/playlist/detail',
    data
  }),
  // 获取音乐url
  getMusicUrl: (data) => Http({
    url: '/song/url',
    data
  }),
  // 独家放送
  getPrivatecontent: (data) => Http({
    url: '/personalized/privatecontent',
    data
  }),
  // 推荐mv
  personalizedMv: (data) => Http({
    url: '/personalized/mv',
    data
  }),
  // 获取歌单
  getSongSheet: (data) => Http({
    url: '/top/playlist',
    data
  }),
  // 热门歌单分类
  gethotSheetClass: (data) => Http({
    url: '/playlist/hot',
    data
  }),
  // 歌单分类
  getSongSheetClass: (data) => Http({
    url: '/playlist/catlist',
    data
  }),
  // 电台 - 分类
  getDJCatelist: (data) => Http({
    url: '/dj/catelist',
    data
  }),
  // 电台 - 分类推荐
  getDJRecommend: (data) => Http({
    url: '/dj/recommend/type',
    data
  }),
  // 全部电台
  getRadioHot: (data) => Http({
    url: '/dj/radio/hot',
    data
  }),
  // 所有榜单
  getTopList: (data) => Http({
    url: '/toplist',
    data
  })

}
