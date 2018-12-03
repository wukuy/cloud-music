<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    classesName: '推荐',
                    menus: [
                        {name: '发现音乐'},
                        {name: '私人FM'},
                        {name: 'MV'},
                        {name: '朋友'},
                    ]
                },
                {
                    classesName: '我的音乐',
                    menus: [
                        {name: '本地音乐'},
                        {name: '下载管理'},
                    ]
                },
                {
                    classesName: '创建的歌单',
                    menus: [
                        {name: '我喜欢的音乐'},
                    ]
                },
            ],
            play: false
        }
    },
    methods: {
    }
}
</script>

