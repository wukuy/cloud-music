import './styles/index.scss'
import VueLazyload from 'vue-lazyload'
import defaultCover from './images/default_cover_2.jpeg'
import picLoading from './images/pic_loading.gif'

import Button from './ui/button/view.vue'
import ButtonGroup from './ui/button-group/view.vue'
import Icon from './ui/icon/view.vue'
import Input from './ui/input/view.vue'
import Search from './ui/search/view.vue'
import Card from './ui/card/view.vue'
import History from './ui/history/view.vue'
import Menu from './ui/menu/view.vue'
import MenuGroup from './ui/menu-group/view.vue'
import MenuItem from './ui/menu-item/view.vue'
import Table from './ui/table/view.vue'
import TableCol from './ui/table-col/view.vue'
import Tabs from './ui/tabs/view.vue'
import Slider from './ui/slider/view.vue'
import Grid from './ui/grid/view.vue'
import Carousel from './ui/carousel/view.vue'
import CarouselItem from './ui/carousel-item/view.vue'
import CImage from './ui/image/view.vue'

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
  Table,
  TableCol,
  Tabs,
  Slider,
  Grid,
  Carousel,
  CarouselItem,
  CImage
}

function install (Vue) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })

  // 图片懒加载配置
  Vue.prototype.$assets = {
    defaultCover,
    picLoading
  }

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 2,
    error: defaultCover, // 请求失败后显示的图片
    loading: picLoading // 加载的loading过渡图片
  })
}

export default install

export {
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
    Table,
    TableCol,
    Tabs,
    Slider,
    Grid,
    Carousel,
    CarouselItem,
    CImage
}
