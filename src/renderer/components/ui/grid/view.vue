<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = "c-grid";

export default {
    props: {
        // 显示列数
        columnCount: {
            type: Number,
            default: 5
        },
        horizontalAxisPadding: {
            type: String,
            default: "20px"
        },
        verticalAxisPadding: {
            type: String,
            default: "20px"
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            prefix
        };
    },
    methods: {},
    computed: {
        classes() {
            return [prefix];
        },
        list() {
            return JSON.parse(JSON.stringify(this.data))
		},
		styles() {
			return {
				'grid-template-columns': `repeat(${this.columnCount}, 1fr)`,
				'grid-gap': `${this.verticalAxisPadding} ${this.horizontalAxisPadding}`,
			}
		}
    }
};
</script>
