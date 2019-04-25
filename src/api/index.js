import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://192.168.0.10:8084',
})

const request = {
    get: async url => {
        const res = await instance.get(url)
        return res.data
    },
    post: async (url, data) => {
        const res = await instance.post(url, data)
        return res.data
    },
    put: async (url, data) => {
        const res = await instance.put(url, data)
        return res.data
    },
    del: async url => {
        const res = await instance.delete(url)
        return res.data
    },
}

const auth = {
    login: data => request.post('/login', data),
    getCaptcha: () => request.get('/captchas/base64'),
}

export default {
    auth,
}
