<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-slider';

export default {
    props: {
        vertical: Boolean,
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        tip: Boolean
    },
    data() {
        return {
            prefix
        }
    },
    computed: {
        classes() {
            return [
                `${prefix}`,
                {[`${prefix}-vertical`]: this.vertical}
            ];
        }
    },
    methods: {
        ctrlMousemove(event) {
            console.log(event);
            
        },
        ctrlMousedown() {
            window.addEventListener('mousemove', this.ctrlMousemove);
        },
        ctrlMouseup() {
            console.log('弹起s');
            window.removeEventListener('mousemove', this.ctrlMousemove);
        }
    }
}
</script>
