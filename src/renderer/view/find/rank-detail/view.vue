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
            console.log(data)
            for (let idx in data) {

                let item = data[idx]
                let playlistData = await this.playlistDetail(item.id)

                item.playList = playlistData.playlist.subscribers
            }
            this.topList = data
        },
        async playlistDetail(id) {
            return await playlistDetail({ id })
        },
    },
    mounted() {
        this.init();
    },
};
</script>

