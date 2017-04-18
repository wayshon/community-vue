<template>
    <div class="menu">
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="router-view"></router-view>
        </transition>
        <transition name="fade">
            <tabbar v-show="$route.name == 'homeMain' || $route.name == 'classifyMain' || $route.name == 'postMain' || $route.name == 'mineMain'">  
                <tabbar-item :selected="$route.name == 'homeMain'" link="/menu/home/homeMain">
                    <img slot="icon" src="../../assets/images/dog.jpeg">
                    <span slot="label" v-cloak>首页</span>
                </tabbar-item>
                <tabbar-item :selected="$route.name == 'classifyMain'" link="/menu/classify/classifyMain">
                    <img slot="icon" src="../../assets/images/dog.jpeg">
                    <span slot="label" v-cloak>分类</span>
                </tabbar-item>
                <tabbar-item :selected="$route.name == 'postMain'" link="/menu/post/postMain">
                    <img slot="icon" src="../../assets/images/dog.jpeg">
                    <span slot="label" v-cloak>发帖</span>
                </tabbar-item>
                <tabbar-item :selected="$route.name == 'mineMain'" link="/menu/mine/mineMain">
                    <img slot="icon" src="../../assets/images/dog.jpeg">
                    <span slot="label" v-cloak>我的</span>
                </tabbar-item>
            </tabbar>
        </transition>
    </div>
</template>
<script>
import { mapState } from 'vuex'
    export default {
        name: 'menu',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState({
                direction: state => state.vux.direction
            })
        },
        methods: {
            
        },
        mounted() {

        }
    }
</script>
<style lang="less">
    .menu {
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
            opacity: 0
        }
    }
</style>