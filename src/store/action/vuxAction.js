import * as types from '../mutation-types'

//初始化所有vux参数
export const initVux = ({ commit }) => {
    commit(types.INIT_VUX)
}

//设置参数
export const setVux = ({ commit }, param) => {
    commit(types.SET_VUX, param)
}