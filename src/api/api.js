import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5fc817bd-20e9-4869-bd30-5ba423724883",
	},
});

export const authAPI = {
	authUser() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe) {
		return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data);
	},
};

export const profileAPI = {
	setUser(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},
	setStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status }).then(response => response.data);
	},
};

export const usersAPI = {
	getUsers(currentPage, getCountUsers) {
		return instance.get(`users?page=${currentPage}&count=${getCountUsers}`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},
};
