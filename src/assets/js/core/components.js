import Vue from 'vue'
import {
    Group, 
    Cell,
    Tabbar, 
    TabbarItem,
    Search,
    Scroller,
    Flexbox,
    FlexboxItem,
    XHeader,
    PopupPicker,
    Popup,
    Radio,
    XTextarea,
    XInput,
    AlertPlugin,
    ToastPlugin,
    Panel,
    Swipeout, 
    SwipeoutItem, 
    SwipeoutButton,
    Previewer,
    Grid,
    GridItem,
    Tab,
    TabItem,
    LoadingPlugin,
    Actionsheet,
    XButton,
    Checker,
    CheckerItem,
    Datetime,
    Rater,
    XSwitch,
    ConfirmPlugin,
    Swiper,
    XImg
 } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

Vue.component('group', Group);
Vue.component('cell', Cell);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('search', Search);
Vue.component('scroller', Scroller);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('x-header', XHeader);
Vue.component('popup-picker', PopupPicker);
Vue.component('popup', Popup);
Vue.component('radio', Radio);
Vue.component('x-textarea', XTextarea);
Vue.component('x-input', XInput);
Vue.component('panel', Panel);
Vue.component('swipeout', Swipeout);
Vue.component('swipeout-item', SwipeoutItem);
Vue.component('swipeout-button', SwipeoutButton);
// Vue.component('previewer', Previewer);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);
Vue.component('actionsheet', Actionsheet);
Vue.component('x-button', XButton);
Vue.component('checker', Checker);
Vue.component('checker-item', CheckerItem);
Vue.component('datetime', Datetime);
Vue.component('rater', Rater);
Vue.component('x-switch', XSwitch);
Vue.component('swiper', Swiper);
Vue.component('x-img', XImg);

import previewer from '../../../components/elements/previewer/index.vue'
import treeList from '../../../components/elements/treeList.vue'

Vue.component('previewer', previewer);
Vue.component('tree-list', treeList);