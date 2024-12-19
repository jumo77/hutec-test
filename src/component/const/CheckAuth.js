import {LOGIN} from "./Const";

export default function CheckAuth({navigate}){
    if (!window.localStorage.getItem("token")) navigate(LOGIN);
}