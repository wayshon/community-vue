import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const route = new VueRouter({
    routes: [{
            name: '403',
            path: '/403',
            component: resolve => require.ensure([], () => {
                resolve(require('../../../components/lib/403'))
            }, 'lib')
        },
        {
            name: '404',
            path: '/404',
            component: resolve => require.ensure([], () => {
                resolve(require('../../../components/lib/404'))
            }, 'lib')
        },
        {
            name: 'default',
            path: '/default',
            component: resolve => require.ensure([], () => {
                resolve(require('../../../components/frame/default'))
            }, 'lib')
        },
        {
            name: 'menu',
            path: '/menu',
            component: resolve => require.ensure([], () => {
                resolve(require('../../../components/frame/menu'))
            }, 'menu'),
            children: [{
                name: 'home',
                path: 'home',
                component: resolve => require.ensure([], () => {
                    resolve(require('../../../components/frame/home/home'))
                }, 'home'),
                children: [{
                    name: 'homeMain',
                    path: 'homeMain',
                    component: resolve => require.ensure([], () => {
                        resolve(require('../../../components/frame/home/homeMain'))
                    }, 'home'),
                }]
            },{
                name: 'classify',
                path: 'classify',
                component: resolve => require.ensure([], () => {
                    resolve(require('../../../components/frame/classify/classify'))
                }, 'classify'),
                children: [{
                    name: 'classifyMain',
                    path: 'classifyMain',
                    component: resolve => require.ensure([], () => {
                        resolve(require('../../../components/frame/classify/classifyMain'))
                    }, 'classify'),
                }]
            },{
                name: 'post',
                path: 'post',
                component: resolve => require.ensure([], () => {
                    resolve(require('../../../components/frame/post/post'))
                }, 'post'),
                children: [{
                    name: 'postMain',
                    path: 'postMain',
                    component: resolve => require.ensure([], () => {
                        resolve(require('../../../components/frame/post/postMain'))
                    }, 'post'),
                }]
            },{
                name: 'mine',
                path: 'mine',
                component: resolve => require.ensure([], () => {
                    resolve(require('../../../components/frame/mine/mine'))
                }, 'mine'),
                children: [{
                    name: 'mineMain',
                    path: 'mineMain',
                    component: resolve => require.ensure([], () => {
                        resolve(require('../../../components/frame/mine/mineMain'))
                    }, 'mine'),
                }]
            }]
        },
        {
            path: '*',
            redirect: '/default'
        }
    ]
})

export default route;