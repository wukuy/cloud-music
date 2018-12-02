<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-button-group';

export default {
    props: {
        vertical: Boolean
    },
    computed: {
        classes() {
            return [
                prefix,
                {[`${prefix}-vertical`]: this.vertical}
            ];
        }
    }
}
</script>
