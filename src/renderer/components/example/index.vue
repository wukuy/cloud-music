<template>
    <div class="p-example">
        <ul>
            <li v-for="(item, idx) in exampleList" :key="idx" @click="setCurrentExample(item.exampleName)"><h2>{{item.text}}</h2></li>
        </ul>
        <component v-bind:is="currentExample" />
    </div>
</template>
<script>
import ButtonExample from './button.vue';
import IconExample from './icon.vue';
import InputExample from './input.vue';
import SearchExample from './search.vue';
import CardExample from './card.vue';
import HistoryExample from './history.vue';
import MenuExample from './menu.vue';
import TableExample from './table.vue';
import TabsExample from './tabs.vue';

export default {
    data() {
        return {
            currentExample: 'ButtonExample',
            exampleList: [{
                text: 'button',
                exampleName: 'ButtonExample'
            }, {
                text: 'icon',
                exampleName: 'IconExample'
            }, {
                text: 'input',
                exampleName: 'InputExample'
            }, {
                text: 'search',
                exampleName: 'SearchExample'
            }, {
                text: 'card',
                exampleName: 'CardExample'
            },  {
                text: 'history',
                exampleName: 'HistoryExample'
            }, {
                text: 'menu',
                exampleName: 'MenuExample'
            }, {
                text: 'table',
                exampleName: 'TableExample'
            }, {
                text: 'tabs',
                exampleName: 'TabsExample'
            }]
        }
    },
    methods: {
        setCurrentExample(name) {
            this.currentExample = name;
        }
    },
    components: {
        ButtonExample,
        IconExample,
        InputExample,
        SearchExample,
        CardExample,
        HistoryExample,
        MenuExample,
        TableExample,
        TabsExample
    }
}
</script>

<style lang="stylus" scoped>
.p-example{
    padding: 10px;
    >ul{
        padding: 0;
        list-style: none;
        li{
            display: inline-block;
            padding: 0 20px;
            height: 28px;
            line-height: @height;
            border-left: 1px solid #bfbfbf;
            h2{
                margin: 0;
            }
        }
    }
}
</style>
