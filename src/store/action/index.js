import { initUser } from './userAction'
import { initVux } from './vuxAction'

export const initALL = function(ref) {
    //初始化各个模块的值
    initUser(ref)
    initVux(ref)
}

export {
    setUser
}
from './userAction'

export {
    setVux
}
from './vuxAction'
