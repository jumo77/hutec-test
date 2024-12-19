import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from "./Const";

const PrivateRoute = () => {
    return window.localStorage.getItem('token') ? <Outlet/>
        :<Navigate to={LOGIN}/>
}

export default PrivateRoute