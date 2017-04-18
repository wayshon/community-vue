import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './action'
import * as getters from './getter'

import user from './modules/user'
import vux from './modules/vux'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user,
        vux
    },
    strict: false
})