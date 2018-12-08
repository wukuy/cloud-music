<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-table';

export default {
    props: {
        title: String
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
