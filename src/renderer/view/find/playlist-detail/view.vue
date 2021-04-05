<template src="./view.html"></template>
<style src="./view.scss" lang="scss" scoped></style>

<script>
import { playlistDetail } from "@models/find.js";
import Utils from "@common/utils/utils.js";

export default {
    data() {
        return {
            playlist: [],
            tabs: [
                {
                    text: "歌曲列表",
                    id: 1,
                    $active: true
                },
                {
                    text: "评论(1349)",
                    id: 2
                },
                {
                    text: "收藏者",
                    id: 2
                }
            ],
            info: {
                coverImgUrl: ""
            }
        };
    },
    methods: {
        init() {
            this.playlistDetail(this.$route.query.id);
        },
        async playlistDetail(id) {
            let data = await playlistDetail({ id });
            if (data) {
                let list = data.playlist.tracks;
                list.forEach(el => {
                    // 歌手名称
                    el.singer = el.ar.length ? el.ar[0].name : "未知";
                    el.album = el.al.name || "未知";
                    el.duration = Utils.getDuration(el.dt);
                });
                this.playlist = list;
                this.info = data.playlist;
            }
        },
        tabRowClick(item) {
			this.$store.commit("setMusicInfo", item);
			this.$store.commit('setPlayList', this.playlist)
        }
    },
    created() {
        this.init();
    }
};
</script>

