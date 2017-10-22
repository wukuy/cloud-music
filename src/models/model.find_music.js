import Http from 'common/app.http.js'

export default {
	// 获取歌单
	getSongSheet: new Http({
		url: '/top/playlist'
	}),

	// 获取歌单
	getSongSheetDetail: new Http({
		url: '/playlist/detail'
	}),

	// 歌曲评论
	getComment: new Http({
		url: '/comment/playlist'
	}),

	// 获取音乐详情
	getMusiceDetail: new Http({
		url: '/song/detail'
	}),

	// 获取音乐歌词
	getMusicelyric: new Http({
		url: '/lyric'
	})
}
