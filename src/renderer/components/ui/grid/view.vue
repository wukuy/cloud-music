<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-grid';

export default {
    props: {
        // 显示列数
        columnCount: {
            type: Number,
            default: 5
        },
        horizontalAxisPadding: {
            type: String,
            default: '20px',
        },
        verticalAxisPadding: {
            type: String,
            default: '20px'
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            prefix,
        }
    },
    methods: {
    },
    computed: {
        classes() {
            return [
                prefix,
            ];
        },
        list() {
            let count = this.data.length / this.columnCount;
            let list = [];

            for(let idx = 0; idx < count; idx++) {
                let start = idx * this.columnCount;
                list.push(this.data.slice(start, start + this.columnCount));
            }

            return list;
        }
    },
}
</script>
