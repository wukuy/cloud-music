<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import {getxxx} from '@model/find.js';

export default {
    data() {
        return {
            navList: [
                {
                    name: '个性推荐',
                    path: '/find/recommend'
                },
                {
                    name: '歌单',
                    path: '/find/singer'
                },
                {
                    name: '主播电台',
                    path: '/find/radio'
                },
                {
                    name: '排行榜',
                    path: '/find/rank'
                },
                {
                    name: '歌手',
                    path: '/find/song-sheet'
                },
                {
                    name: '最新音乐',
                    path: '/find/new-music'
                }
            ]
        }
    },
    methods: {
    },
    async mounted() {
        await getxxx();
    }
}
</script>

