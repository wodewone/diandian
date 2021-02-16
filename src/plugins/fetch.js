// const baseUrl = 'http://localhost:3001/point/v1'
const baseUrl = 'https://www.wodewone.com/point/v1'

let header = null

const _http = (method, api, data) => {
    return new Promise((resolve, reject) => {
        if (!header) {
            header = {
                'Content-type': 'application/json',
                'Authorization': wx.getStorageSync('token')
            }
        }
        wx.request({
            url: baseUrl + api,
            data,
            method,
            header,
            success ({ data }) {
                resolve(data)
            },
            fail (err) {
                reject(err)
            },
            complete (res) {
                if (res.errMsg !== 'request:ok') {
                    console.warn('[Utils] http complete: ', res.errMsg)
                }
            },
            timeout: 20000,
            enableCache: false
        })
    }).catch(e => {
        console.error('[Utils] http promise: ', e)
        return { success: false, data: {}, code: 500 }
    })
}
const _wx = (method, ...arg) => {
    return new Promise((resolve, reject) => {
        wx[method]({
            ...arg,
            success (res) {
                resolve(res)
            },
            fail (e) {
                reject(e)
            }
        })
    })
}
export default {
    get: (api, params) => _http('GET', api, params),
    post: (api, data) => _http('POST', api, data),
    wx: _wx
}
