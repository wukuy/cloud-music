<template>
    <div>
        <h3>type</h3>
        <Button>defualt</Button>
        <Button type="primary">primary</Button>
        <Button type="text">text</Button>
        <Button type="info">info</Button>

        <h3>disabled</h3>
        <Button type="primary" disabled>disabled</Button>

        <h3>long</h3>
        <Button type="primary" long>disabled</Button>

        <h3>shape</h3>
        <Button shape="circle">disabled</Button>

        <h3>size</h3>
        <Button type="primary">default</Button>
        <Button size="small">small</Button>
        <Button type="info" size="large">large</Button>

        <h4>ButtonGroup</h4>
        <ButtonGroup>
            <Button type="primary">cancel</Button>
            <Button type="primary">confirm</Button>
            <Button type="primary">default</Button>
        </ButtonGroup>
        
    </div>
</template>
<script>
import {Button, ButtonGroup} from '../index'

export default {
  components: {
    Button, ButtonGroup
  }
}
</script>
