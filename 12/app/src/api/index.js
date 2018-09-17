import axios from "axios";



let baseUri = ''

baseUri = '/api'

// 后台验证码接口
export const verifiy = baseUri + '/verifiy.gif'

/**
 * register
 * 后台用户注册api
 * @author ranyunlong<549510622@qq.com>
 * @param {*} data 
 * 2018-09-17
 */
export function register(data) {
    return axios.post(baseUri + '/register', data)
}


/**
 * login
 * 后台用户登录api
 * @author ranyunlong<549510622@qq.com>
 * @param {*} data 
 * 2018-09-17
 */
export function login(data) {
    return axios.post(baseUri + '/login', data)
}