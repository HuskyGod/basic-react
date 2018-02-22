import axios from 'axios';
import { message } from 'antd';
import { browserHistory } from 'react-router';

import {
    SUCCESS_CODE,
    NO_LOGIN_CODE,
    NO_LOGIN
} from '../gload/code'

export function resolve_fn ({status,data}) {
    return  new Promise((resolve,reject) => {
        if (status === SUCCESS_CODE){
            if (data.code === SUCCESS_CODE) {
               resolve(data);
            } else if(data.code === NO_LOGIN_CODE) {
                setTimeout(() => {
                    closeStorage(browserHistory)
                },3000)
               reject('请先登录~')
            } else if (data.code === NO_LOGIN) {
                reject('用户名或密码错误')
            }
        } else {
            reject('系统错误请,稍后再试试')
        }
    })
}

export function getLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
}

export function setLocalStorage (key,value) {
    return localStorage.setItem(key,JSON.stringify(value))
}

export function closeStorage (browserHistory) {
    localStorage.removeItem("user");
    browserHistory.push('/')
}

export function post (url,parameter = {}) {
    const token = getLocalStorage('user').token;
    return axios.post(url,parameter,{
        headers: {
            "Cache-Control": "no-cache",
            Accept:          "application/json",
            "Content-Type":  "application/json",
            Authorization: `BEARER ${token}`
        }
    })
        .then((data) => {
            return resolve_fn(data)
                .then(({data}) => {
                    return Promise.resolve(data)
                })
                .catch((error) => {
                    message.error(error);
                    return Promise.reject()
                })
        })
        .catch((e) => {
            if (e) {
                message.error("请求出现问题请检查参数或者网络");
            }
        })
}