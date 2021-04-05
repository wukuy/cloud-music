<template>
    <div>
        <Table :data="data">
            <TableCol name="音乐名称" field="name" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="歌手" field="singer" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="专辑" field="album" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="时长" field="duration" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
        </Table>

        <H3>表头固定</H3>
        <Table :data="data" height="100px">
            <TableCol name="音乐名称" field="name" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="歌手" field="singer" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="专辑" field="album" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
            <TableCol name="时长" field="duration" width="20%">
                <template slot-scope="{fieldData}">
                    {{fieldData}}
                </template>
            </TableCol>
        </Table>
    </div>
</template>
<script>
import {Table, TableCol} from '../index'

export default {
  components: {
    Table,
    TableCol
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.data = [{
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }, {
        name: '贼',
        singer: '戴佩妮',
        album: '贼',
        duration: '03:39',
        test: 'test1'
      }, {
        name: '温水',
        singer: '钰下单',
        album: '小兵',
        duration: '04:20',
        test: 'test2'
      }]
    }, 3000)
  }
}
</script>
<style >
h3 {
  line-height: 60px;
}
</style>
