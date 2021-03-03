export const obj2str = (obj) => {
    let str = ''
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            str += (str ? str + '&' : '')
            str += `${item}=${obj[item]}`
        }
    }
    return str
}

export const toLogin = (payload) => {
    return wx.navigateTo({
        url: '/pages/login/index',
        ...payload
    })
}
