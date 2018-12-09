<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-table';

export default {
    name: 'TableCol',
    props: {
        name: String,
        width: {
            type: String,
            default: '20%'
        }
    },
    computed: {
        classes() {
            return [
                `${prefix}`,
            ];
        }
    },
}
</script>
