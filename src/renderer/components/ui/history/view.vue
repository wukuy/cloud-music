<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = "c-history";

export default {
    props: {},
    methods: {
        back() {
            if(this.$route.matched.length > 1) {
                window.history.back(-1)
            }
        },
        forward() {
            window.history.forward(1);
        },
    },
    created() {
        console.log(this.$route.matched)
    },
    computed: {
        classes() {
            return [`${prefix}`];
        },
    },
};
</script>
