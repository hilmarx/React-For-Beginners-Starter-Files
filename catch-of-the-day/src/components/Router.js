import React from 'react'

// Import Router Component from library
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import React Components that we want to render
import StorePicker from "./StorePicker"
import App from "./App"
import NotFound from "./NotFound"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            { /* storeId is a parameter for an arbbitrary input */}
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound}/>
        </Switch>
    
    
    </BrowserRouter>
); 

export default Router;