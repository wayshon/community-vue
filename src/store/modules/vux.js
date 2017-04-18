import * as types from '../mutation-types'


const state = {
    isLoading: false,
    direction: 'forward'
}

// mutations
const mutations = {
    //初始化home参数
    [types.INIT_VUX](state) {
        //登录或者登出时初始化所有参数
        state.isLoading = false;
    },
    //设置参数
    [types.SET_VUX](state, param) {
        state[param.name] = {}
        state[param.name] = param.pa;
    }
}

export default {
    state,
    mutations
}