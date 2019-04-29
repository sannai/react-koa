import axios from "axios";
// const qs = require('qs')

export const instance = axios.create({
	baseURL: "https://api.zzp96.cn/",
});

const request = {
	get: async (url, data) => {
		const res = await instance.get(url, {
			params: data,
		});
		return res.data;
	},
	post: async (url, data) => {
		const res = await instance.post(url, data);
		return res.data;
	},
	put: async (url, data) => {
		const res = await instance.put(url, data);
		return res.data;
	},
	del: async url => {
		const res = await instance.delete(url);
		return res.data;
	},
};

const auth = {
	HomeList: data => request.get("/main/list", data),
	getArticleDetail: (id, data) =>
		request.get(`main/article-detail/${id}`, data),
};

export default {
	auth,
};
