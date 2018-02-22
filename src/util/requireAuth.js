import {getLocalStorage} from "./http"
import {message} from "antd";
// import { browserHistory } from "react-router"
import {push} from "react-router-redux"

export default function requireAuth(store) {
    return function (nextState, replace) {
        const token = getLocalStorage('user').token;
        if (!token) {
            message.error("您还没登录",2)
            setTimeout(function () {
                store.dispatch(push("/login/sign-in"))
            },2000)
            console.log(store)
        }
    }
}