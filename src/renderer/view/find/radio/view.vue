<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import { getDJCatelist } from '@models/find.js' 

export default {
    data() {
        return {
            catelist: []
        }
    },
    methods: {
        init() {
            this.getDJCatelist()
        },
        async getDJCatelist() {
            const data = await getDJCatelist()
            this.catelist = data.categories 
        }
    },
    mounted() {
        this.init()
    }
}
</script>

