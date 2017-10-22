import newSong from 'modules/main/find_music/new_song/view.vue'
import ranking from 'modules/main/find_music/ranking/view.vue'
import recommend from 'modules/main/find_music/recommend/view.vue'
import singer from 'modules/main/find_music/singer/view.vue'
import single from 'modules/main/find_music/single/view.vue'
import transceiver from 'modules/main/find_music/transceiver/view.vue'
import songSheetDetail from 'modules/common/song_sheet_detail/view.vue'

export default [
	// 最新音乐
	{
		path: 'new_song',
		name: 'new_song',
		component: newSong
	},
	// 排行榜
	{
		path: 'ranking',
		name: 'ranking',
		component: ranking
	},
	// 推荐
	{
		path: 'recommend',
		name: 'recommend',
		component: recommend
	},
	// 歌曲 
	{
		path: 'singer',
		name: 'singer',
		component: singer
	},
	// 歌单
	{
		path: 'single',
		name: 'single',
		component: single
	},
	// 电台
	{
		path: 'transceiver',
		name: 'transceiver',
		component: transceiver
	},
	// 公用页面 歌单详情
	{
		name: 'songSheetDetail',
		path: 'common/songSheetDetail',
		component: songSheetDetail
	}
]
