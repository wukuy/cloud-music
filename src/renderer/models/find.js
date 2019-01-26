import Http from '@common/app.http.js';


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
}
