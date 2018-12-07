<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import {playlistDetail} from '@models/find.js';

export default {
    data() {
        return {
            playlist: []
        }
    },
    methods: {
        init() {
            this.playlistDetail(this.$route.query.id);
        },
        async playlistDetail(id) {
            let data = await playlistDetail({id});
            if(data) {
                this.playlist = data.playlist.tracks;
            }
        }
    },
    created() {
        this.init();
    }
}
</script>

