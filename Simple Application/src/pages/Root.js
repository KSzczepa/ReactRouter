import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

//Outlet is a place - a marker which tells where the children should be render

function RootLayout() {
    return <Fragment>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </Fragment>
};

export default RootLayout;