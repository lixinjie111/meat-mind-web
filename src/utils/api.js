import axios from 'axios';
import baseUrl from './baseUrl';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = baseUrl + '/';
// 返回状态判断
axios.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res;
    } else {
        return Promise.reject(res);
    }
}, (error) => {
    return Promise.reject(error);
});

export default {
    postJson(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
        })
    },
    getJson(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params}).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err)
            });
        })
    },
    // 舆情列表
    getMarkList(params){
        return this.postJson('/publicSentiment/list',params)
    },
    // 舆情详情
    getMarkDetail(params){
        return this.postJson("/publicSentiment/detail",params)
    },
    //用户画像获取用户分组  
    getGroupsList(params){
        return this.postJson("/userProfile/getUserGroups",params)
    }

}