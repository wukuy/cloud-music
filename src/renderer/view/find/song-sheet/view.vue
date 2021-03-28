<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import { getSongSheet, getSongSheetClass, gethotSheetClass } from '@models/find.js';

export default {
    data() {
        return {
            songSheetClass: {
                categories: {},
                sub: [],
                all: {}
            },
            currentClass: '',
            songSheets: [],
            showPopover: false,
            hotSheetClass: []
        }
    },
    methods: {
        async getSongSheetClass() {
            this.songSheetClass = await getSongSheetClass()
            console.log(this.songSheetClass)
        },
        async gethotSheetClass() {
            let data = await gethotSheetClass()

            this.hotSheetClass = data.tags
        },
        async getSongSheet() {
            let data = await getSongSheet({ cat: this.currentClass })
            this.songSheets = data.playlists
        },
        classesChange(val = '') {
            this.showPopover = false
            this.currentClass = val
            this.getSongSheet()
        },
        goPlaylistDetail(id) {
            this.$router.push({path: '/playlist_detail', query: {id}});
        },
    },
    created() {
        this.getSongSheetClass()
        this.getSongSheet()
        this.gethotSheetClass()
    }
}
</script>

