<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import { getTopList } from '@models/find.js'

export default {
    data() {
        return {
            topList: []
        }
    },
    methods: {
        init() {
            this.getTopList()
        },
        async getTopList() {
            const data = await getTopList()
            this.topList = data.list.slice(0, 5)
        }
    },
    mounted() {
        this.init()
    }
}
</script>

