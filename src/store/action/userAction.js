import * as types from '../mutation-types'

//初始化所有user参数
export const initUser = ({ commit }) => {
    commit(types.INIT_USER)
}

//设置参数
export const setUser = ({ commit }, param) => {
    commit(types.SET_USER, param)
}