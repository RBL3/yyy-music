import axios, { AxiosResponse } from 'axios'
import { AjaxResponse } from '@/types'

type Result = AxiosResponse<AjaxResponse>


export const instance = axios.create({
    timeout: 5000
})
instance.interceptors.request.use(config => {
    return config
})
// 响应拦截器
const responseState = [200, 801, 803, 802]
/**
 * 允许返回状态
 * 200 -> 成功
 * 801 -> 等待扫码状态
 * 802 -> 授权中
 * 803 -> 成功扫码状态
 */
instance.interceptors.response.use((data: Result) => {
    const { data: innerData } = data
    if (responseState.includes(innerData.code)) {
        if (innerData.result) 
            return innerData.result
        
        if (innerData.data) 
            return innerData.data
        
        if (innerData.lrc) 
            return innerData.lrc
        
        return innerData
    }
    return Promise.reject(data)
})

export default instance