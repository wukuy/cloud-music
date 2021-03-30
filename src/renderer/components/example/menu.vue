<template>
    <div>
        <Menu>
            <MenuGroup title="推荐">
                <MenuItem>
                    发现音乐
                </MenuItem>
                <MenuItem>
                    私人ＦＭ
                </MenuItem>
                <MenuItem>
                    ｍｖ
                </MenuItem>
                <MenuItem>
                    朋友
                </MenuItem>
            </MenuGroup>
             <MenuGroup title="我的音乐">
                <MenuItem>
                    发现音乐
                </MenuItem>
            </MenuGroup>
        </Menu>
    </div>
</template>
<script>
import {Menu, MenuGroup, MenuItem} from '../index'

export default {
  components: {
    Menu, MenuGroup, MenuItem
  }
}
</script>
