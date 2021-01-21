const baseUrl = 'http://localhost:3001/v1'
const header = {
    'content-type': 'application/json',
    'authorization': wx.getStorageSync('token')
}

const _http = (method, api, data) => {
    return new Promise((resolve, reject) => {
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
    })
}
const _wx = (method, ...arg) => {
    return new Promise((resolve, reject) => {
        wx[method]({ ...arg,
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
