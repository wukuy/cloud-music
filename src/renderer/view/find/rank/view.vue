<template src="./view.html"></template>
<style src="./view.scss" lang="scss" scoped></style>

<script>
import { getTopList, playlistDetail } from "@models/find.js";

export default {
    data() {
        return {
            topList: [],
        };
    },
    methods: {
        init() {
            this.getTopList();
        },
        async getTopList() {
            let data = await getTopList();

            data = data.list.slice(0, 5)

            for (let idx in data) {
                let item = data[idx]
                let playlistData = await this.playlistDetail(item.id)

                item.playList = playlistData.playlist.tracks
            }
            this.topList = data
        },
        async playlistDetail(id) {
            return await playlistDetail({ id })
        },
        playListClick(item, playList) {
            this.$store.commit('setPlayList', playList)
            this.$store.commit("setMusicInfo", item);
        }
    },
    mounted() {
        this.init();
    },
};
</script>

