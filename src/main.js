// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'
import App from './App'
import store from './store'
import router from './assets/js/core/router'
import components from './assets/js/core/components'
import axios from './assets/js/core/axios'
import myTool from './assets/js/tool/myTool'

// FastClick.attach(document.body)

sync(store, router)

//动画判断
// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
//   Vue.$vux.loading.show({
//     text: 'Loading'
//   })

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
      let direction = {
            name: "direction",
            pa: 'forward'
        };
        store.dispatch("setVux", direction);
    } else {
      let direction = {
            name: "direction",
            pa: 'reverse'
        };
        store.dispatch("setVux", direction);
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    let direction = {
            name: "direction",
            pa: 'forward'
        };
        store.dispatch("setVux", direction);
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
//   Vue.$vux.loading.hide()
})

Vue.mixin({
    data: function() {
        return {
            axios: axios,
            myTool: myTool
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
