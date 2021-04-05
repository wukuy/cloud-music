<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
export default {
    props: {},
    data() {
        return {
            tabsCardData: [
                {
                    text: "播放列表",
                    id: 1
                },
                {
                    text: "历史记录",
                    id: 2
                }
			],
			currentCard: 1
        };
    },
    computed: {
        playList() {
			if(this.currentCard === 1) {
				return this.$store.state.playList;
			}else if(this.currentCard === 2) {
				return this.$store.state.historyPlayList;
			}
        }
    },
    methods: {
        tabRowClick(item) {
			this.$store.commit("setMusicInfo", item);
		}
    },
    watch: {
        value(val) {
            this.showList = val;
        }
    }
};
</script>

