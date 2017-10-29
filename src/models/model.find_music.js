import Http from 'common/app.http.js'

export default {
	// 获取歌单
	getSongSheet: new Http({
		url: '/top/playlist'
	}),

	// 获取歌单详情
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
	}),

	// 获取banner
	getBanner: new Http({
		url: '/banner'
	}),

	// 获取推荐歌单
	getRecommendSong: new Http({
		url: '/personalized'
	}),

	// 独家放送
	getBroadcast: new Http({
		url: '/personalized/privatecontent'
	}),

	// 最新音乐
	getNewMusic: new Http({
		url: '/personalized/newsong'
	}),

	// 推荐MV
	getRecommendMv: new Http({
		url: '/personalized/mv'
	}),

	// 主播电台
	getRadioStation: new Http({
		url: '/personalized/djprogram'
	})
}
