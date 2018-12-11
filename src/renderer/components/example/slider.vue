<template>
    <div style="padding: 40px;">
        <Slider>
            <template slot="prefix">00:46</template>
                <template slot="suffix">03:46</template>
        </Slider>
        <Slider vertical style="margin-top: 40px;"/>
    </div>
</template>
<script>
import {Slider} from '../index';

export default {
    components: {
        Slider
    }
}

</script>
