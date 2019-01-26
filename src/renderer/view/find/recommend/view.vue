<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import { getBanner, personalized, getPrivatecontent, personalizedMv } from '@models/find.js';

export default {
    data() {
        return {
            bannerList: [],
            // 推荐歌单
            recommendList: [],
            // 独家放送
            privatecontentList: [],
            recommendMvList: [],
        }
    },
    methods: {
        init() {
            this.getBanner();
            this.personalized();
            this.getPrivatecontent();
            this.personalizedMv();

            this.setDefaultVal();
        },
        pushData(arr, count, data = {}) {
            for(let idx = 0; idx < count; idx++) arr.push(data);
        },
        setDefaultVal() {
            // 页面占位
            this.pushData(this.bannerList, 5);
            this.pushData(this.recommendList, 10);
            this.pushData(this.privatecontentList, 3);
            this.pushData(this.recommendMvList, 4);
        },
        async getBanner() {
            let data = await getBanner();
            if(data) {
                this.bannerList = data.banners;
            }
        },
        async personalized() {
            let data = await personalized();
            if(data) {
                this.recommendList = data.result.slice(0, 10);
            }
        },
        goPlaylistDetail(id) {
            this.$router.push({path: '/playlist_detail', query: {id}});
        },
        async getPrivatecontent() {
            let data = await getPrivatecontent();
            if(data) {
                this.privatecontentList = data.result.slice(0, 10);
            }
        },
        async personalizedMv() {
            let data = await personalizedMv();
            if(data) {
                this.recommendMvList = data.result.slice(0, 10);
            }
        },

        
    },
    created() {
        this.init();
    }
}
</script>

