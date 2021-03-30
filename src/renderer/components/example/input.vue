<template>
    <div>
        <Input>
            <span slot="prefix">http://</span>
            <Button slot="suffix">
                <Icon name="search"/>
                搜索
            </Button>
        </Input>
    </div>
</template>
<script>
import {Input, Icon, Button} from '../index'

export default {
  components: {
    Input,
    Icon,
    Button
  }
}
</script>
