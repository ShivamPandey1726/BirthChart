import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ServicePage from "./ServicePage";
const WebsiteRouter = () =>
{
    return(
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/service" component={ServicePage}/>
                <Route path="/contact" component={ContactPage}/>
                <Redirect to="/" /> 
            </Switch>
        </>
    );
}
export default WebsiteRouter;