//modules
import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

const router = (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/classlist/:class" component={ClassList}/>
            <Route path="/student/:id" component={Student}/>
        </Switch>
)

export default router;