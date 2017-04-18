import * as types from '../mutation-types'


const state = {
    name: ''

}

// mutations
const mutations = {
    //初始化home参数
    [types.INIT_USER](state) {
        //登录或者登出时初始化所有参数
        state.name = '';
    },
    //设置参数
    [types.SET_USER](state, param) {
        state[param.name] = {}
        state[param.name] = param.pa;
    },
}

export default {
    state,
    mutations
}