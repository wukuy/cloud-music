import Http from '@common/app.http.js'

// 获取banner
export const getBanner = () => Http({
    url: '/banner'
})

// 推荐歌单
export const personalized = () => Http({
    url: '/personalized'
})

// 获取
export const playlistDetail = (data) => Http({
    url: '/playlist/detail',
    data
})

// 获取音乐url
export const getMusicUrl = (data) => Http({
    url: '/song/url',
    data
})

// 独家放送
export const getPrivatecontent = (data) => Http({
    url: '/personalized/privatecontent',
    data
})

// 推荐mv
export const personalizedMv = (data) => Http({
    url: '/personalized/mv',
    data
})

// 获取歌单
export const getSongSheet = (data) => Http({
    url: '/top/playlist',
    data
})

// 热门歌单分类
export const gethotSheetClass = (data) => Http({
    url: '/playlist/hot',
    data
})

// 歌单分类
export const getSongSheetClass = (data) => Http({
    url: '/playlist/catlist',
    data
})

// 电台 - 分类
export const getDJCatelist = (data) => Http({
    url: '/dj/catelist',
    data
})

// 电台 - 分类推荐
export const getDJRecommend = (data) => Http({
    url: '/dj/recommend/type',
    data
})

// 全部电台
export const getRadioHot = (data) => Http({
    url: '/dj/radio/hot',
    data
})

// 所有榜单
export const getTopList = (data) => Http({
    url: '/toplist',
    data
})

