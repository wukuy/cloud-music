import Http from '@common/app.http.js';


module.exports = {
    personalized: () => Http({
        url: '/personalized'
    }),
    playlistDetail: (data) => Http({
        url: '/playlist/detail',
        data
    }),
    getMusicUrl: (data) => Http({
        url: '/song/url',
        data
    }),
}
