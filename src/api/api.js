import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f9e22451-965d-409c-8501-af63f6f6b7d2'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method please profileAPI object')
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};