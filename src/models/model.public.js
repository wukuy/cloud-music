import Http from 'common/app.http.js'

export default {
	// 获取歌曲的URL地址
	getSongUrl: new Http({
		url: '/music/url'
	})
}
