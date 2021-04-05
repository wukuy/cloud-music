<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = "c-tabs";

export default {
    props: {
		value: [ String, Number ],
        data: {
            type: Array,
            default: () => []
        },
        // card, line
        type: {
            type: String,
			default: "card",
        }
    },
    data() {
        return {
            useSlotScope: false,
			prefix,
			active: ''
        };
    },
    methods: {
        init() {
            this.setDefaultState();
            this.useSlotScope = this.$slotScope;
        },
        setDefaultState() {
            this.data.forEach((item, idx) => {
                this.$set(item, "$active", !!item.$active);
            });
        },
        handleClick(item, idx) {
            item.$active = !item.$active;

            this.data.forEach(el => {
                if (item !== el) el.$active = false;
			});
			
			this.$emit("change", item, idx)
			this.$emit('input', item.id)
        }
    },
    mounted() {
        this.init();
    },
    computed: {
        classes() {
            return [`${prefix}`, { [`${prefix}-${this.type}`]: this.type }];
        }
    },
    watch: {
		value: {
			handler(val) {
				this.active = val
			},
			immediate: true
		},
        data: {
            handler() {
                this.setDefaultState();
            },
            deep: true
        }
    }
};
</script>
