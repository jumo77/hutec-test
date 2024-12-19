import './App.css';
import {
    BrowserRouter as Router, Navigate, Route, Routes,
} from "react-router-dom";
import {
    ADMIN,
    BLOG,
    CATEGORY,
    EXPERT,
    GRADING, LOGIN,
    USER,
    SITE,
    SUPPORT,
    TEST,
    TRANSACTION
} from "./component/const/Const";

import Sidebar from "./component/sidebar/Sidebar";
import Login from "./page/Login/Login";
import User from "./page/User/User";
import Expert from "./page/Expert/Expert";
import Test from "./page/Test";
import Grading from "./page/Grading";
import Blog from "./page/Blog";
import Support from "./page/Support";
import Site from "./page/Site";
import Transaction from "./page/Transaction";
import Category from "./page/Category";
import Admin from "./page/Admin";
import PrivateRoute from "./component/const/PrivateRoute";
import UserDetail from "./page/User/Detail/UserDetail";
import ExpertDetail from "./page/Expert/Detail/ExpertDetail";

export default function App() {

    return (
        <Router>
            <Sidebar/>
            <Routes>
                <Route path={LOGIN} Component={Login}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Navigate to={USER.url}/>}/>
                    <Route path={USER.url} Component={User}/>
                    <Route path={USER.url+"/:id"} Component={UserDetail}/>
                    <Route path={EXPERT.url} Component={Expert}/>
                    <Route path={EXPERT.url+"/:id"} Component={ExpertDetail}/>
                    <Route path={TEST.url} Component={Test}/>
                    <Route path={GRADING.url} Component={Grading}/>
                    <Route path={BLOG.url} Component={Blog}/>
                    <Route path={SUPPORT.url} Component={Support}/>
                    <Route path={SITE.url} Component={Site}/>
                    <Route path={TRANSACTION.url} Component={Transaction}/>
                    <Route path={CATEGORY.url} Component={Category}/>
                    <Route path={ADMIN.url} Component={Admin}/>
                </Route>
            </Routes>
        </Router>
    )
}