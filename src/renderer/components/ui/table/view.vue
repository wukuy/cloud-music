<style src="./view.scss" lang="scss"></style>

<script>
import TableCol from "../table-col/view.vue";
const prefix = "c-table";

export default {
    name: "Table",
    props: {
        data: {
            type: Array,
            default: () => []
        },
        useHeader: {
            type: Boolean,
            default: true
        },
        height: {
            type: String
        }
    },
    data() {
        return {
            ths: [],
            cols: [],
            list: []
        };
    },
    methods: {
        // 创建表头
        thCreate() {
            this.tableOptions.map(item => {
                this.cols.push(<col style={`width: ${item.width}`} />);
                this.ths.push(
                    <th style={`text-align: ${item.align || "left"}`}>
                        {item.name}
                    </th>
                );
            });
        },
        // 创建表内容
        tdCreate() {
            let td = (itemData, idx) =>
                this.tableOptions.map(item => {
                    let tdNode = item.$defaultScopedSlots
                        ? item.$defaultScopedSlots({
                              idx: idx,
                              index: idx,
                              item: itemData,
                              fieldData: itemData[item.field]
                          })
                        : itemData[item.field];

                    return (
                        <td style={`text-align: ${item.align || "left"}`}>
                            {tdNode}
                        </td>
                    );
                });

            return this.list.map((item, idx) => {
                return (
                    <tr
                        class={`${this.classes}-td-wrap`}
                        onClick={() => this.rowClick(item)}
                    >
                        {td(item, idx)}
                    </tr>
                );
            });
        },
        rowClick(item) {
            this.$emit("click", item);
        }
    },
    computed: {
        classes() {
            return [`${prefix}`];
        },
        tbodyStyles() {
            return {
                "overflow-y": this.height ? "auto" : "unset",
                height: this.height
            };
        },
        // 获取表格参数
        tableOptions() {
            return this.$slots.default
                .map(item => {
                    if (!item.componentOptions) return;

                    let { tag, propsData } = item.componentOptions;
                    let { attrs = {}, scopedSlots = {} } = item.data || {};
                    if (tag === "TableCol") {
                        return Object.assign(attrs, propsData, {
                            $defaultScopedSlots:
                                scopedSlots.default || undefined
                        });
                    }
                })
                .filter(item => item);
        }
    },
    components: {
        TableCol
    },
    mounted() {
        this.thCreate();
    },
    render(h) {
        return (
			<div class={this.classes}>
				{/* header */}
                {this.useHeader && (
                    <table>
                        <colgroup> {this.cols} </colgroup>

                        <thead>
                            <tr class={`${this.classes}-th-wrap`}>
                                {this.ths}
                            </tr>
                        </thead>
                    </table>
                )}

				{/* body */}
				<div style={this.tbodyStyles}>
					<colgroup> {this.cols} </colgroup>
					<table>
						<tbody>{this.tdCreate()}</tbody>
					</table>
				</div>
            </div>
        );
    },
    watch: {
        data: {
            handler(val) {
                this.list = JSON.parse(JSON.stringify(val));
            },
            deep: true,
            immediate: true
        }
    }
};
</script>
