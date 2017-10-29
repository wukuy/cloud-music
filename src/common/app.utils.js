export default {
	// 设置播放参数
	setPlay (data, _this) {
		_this.$store.commit('play', Object.assign({}, _this.$store.state.play, data))
	},
	// 获取播放参数
	getPlay (data, _this) {
		return _this.$store.state[data]
	}
}
