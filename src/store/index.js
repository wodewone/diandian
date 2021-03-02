import { createStore } from '@mpxjs/core'
import fetch from '@/plugins/fetch'

export default createStore({
    state: {
        openId: null,
        shareId: null,
        userInfo: {
            loading: true
        },
        loginState: null,
        photoData: {
            max: 0,
            url: null,
            scope: null,
            token: null
        }
    },
    mutations: {
        setUserOpenId (s, data) {
            s.openId = data
        },
        setShareId (s, data) {
            s.shareId = data
        },
        setUserInfo (s, data) {
            s.userInfo = data
        },
        setLoginState (s, state) {
            s.loginState = state
        },
        setPhotoData (s, data) {
            s.photoData = data
        }
    },
    actions: {
        async getPhotoToken ({ commit }) {
            const { success, data, msg } = await fetch.get('/get/uptoken')
            if (success) {
                commit('setPhotoData', data)
            } else {
                msg && wx.showToast({ title: msg, icon: 'none', duration: 2000 })
            }
        }
    },
    getters: {
        checkAdmin (s) {
            const { openId, shareId } = s
            return shareId ? openId === shareId : true
        }
    }
})
