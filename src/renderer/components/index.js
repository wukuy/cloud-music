import './styles/index.styl';
import Button from './ui/button/view.vue';
import ButtonGroup from './ui/button-group/view.vue';
import Icon from './ui/icon/view.vue';
import Input from './ui/input/view.vue';
import Search from './ui/search/view.vue';
import Card from './ui/card/view.vue';
import History from './ui/history/view.vue';
import Menu from './ui/menu/view.vue';
import MenuGroup from './ui/menu-group/view.vue';
import MenuItem from './ui/menu-item/view.vue';

const components = {
    Button,
    ButtonGroup,
    Icon,
    Input,
    Search,
    Card,
    History,
    Menu,
    MenuGroup,
    MenuItem,
    install,
};

function install(Vue) {
    Object.keys(components).forEach(name => {
        Vue.component(name, components[name]);
    });
}

module.exports.default = module.exports = components;