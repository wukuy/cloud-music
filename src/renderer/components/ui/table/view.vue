<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-table';
import TableCol from '../table-col/view.vue'

export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            tableOptions: []
        }
    },
    methods: {
        // 获取表格参数
        getTableOptions() {
            return this.$slots.default.map(item => {
                let opt = {};
                if(!item.componentOptions) return;

                let {tag, propsData} = item.componentOptions;
                let {attrs = {}, scopedSlots = {} } = item.data || {};
                if(tag === 'TableCol') {
                    return Object.assign(attrs, propsData, {$defaultScopedSlots: scopedSlots.default || undefined});
                }
            }).filter(item => item);
        },
        // 创建表头
        thCreate() {
            let th = this.tableOptions.map(item => {
                return <th  style={`text-align: ${item.align || 'center'}`}>{item.name}</th>
            });

            return <tr class={`${this.classes}-th-wrap`}>{th}</tr>
        },
        // 创建表内容
        tdCreate() {
            let td = (itemData) => this.tableOptions.map(item => {
                let tdNode = item.$defaultScopedSlots ? 
                            item.$defaultScopedSlots({item: itemData, fieldData: itemData[item.field]}) : 
                            itemData[item.field];

                return <td style={`text-align: ${item.align || 'center'}`}>{tdNode}</td>
            });

            return this.data.map(item => {
                return <tr class={`${this.classes}-td-wrap`}>{td(item)}</tr>
            });
        }
    },
    computed: {
        classes() {
            return [
                `${prefix}`,
            ];
        }
    },
    components: {
        TableCol
    },
    render(h) {
        this.tableOptions = this.getTableOptions();

        return (<table class={this.classes}>
            {this.thCreate()}
            {this.tdCreate()}
        </table>);
    }
}
</script>
