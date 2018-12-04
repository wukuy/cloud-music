<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-history';

export default {
    props: {
    },
    methods: {
        back() {
            console.log(this.$router);
        }
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
