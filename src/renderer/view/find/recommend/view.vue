<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import {personalized} from '@models/find.js';

export default {
    data() {
        return {
            recommendList: []
        }
    },
    methods: {
        init() {
            this.personalized();
        },
        async personalized() {
            let data = await personalized();
            if(data) {
                this.recommendList = data.result;
            }
        },
        goPlaylistDetail(id) {
            this.$router.push({path: '/playlist_detail', query: {id}});
        },
    },
    mounted() {
        this.init();
    }
}
</script>

