<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-tabs';

export default {
    props: {
    },
    computed: {
        classes() {
            return [
                `${prefix}`,
            ];
        }
    }
}
</script>
