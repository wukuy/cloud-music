<template src="./view.html"></template>
<style src="./view.scss" lang="scss" scoped></style>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    text: "个性推荐",
					path: "/find/recommend",
					id: 0
                },
                {
                    text: "歌单",
					path: "/find/song-sheet",
					id: 1
                },
                {
                    text: "主播电台",
					path: "/find/radio",
					id: 2
                },
                {
                    text: "排行榜",
					path: "/find/rank",
					id: 3
                },
                {
                    text: "歌手",
					path: "/find/singer",
					id: 4
                },
                {
                    text: "最新音乐",
					path: "/find/new-music",
					id: 5
                }
			],
			currentTab: ''
        };
    },
    methods: {
        init() {
            this.setTabSelected();
        },
        setTabSelected() {
			this.navList.forEach(item => {
				if(item.path === this.$route.path) {
					this.currentTab = item.id
				}
			})
        },
        tabsChange(item) {
            this.$router.push(item.path)
        }
    },
    mounted() {
        this.init();
    }
};
</script>

