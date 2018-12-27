import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";

export default (
     <Switch>
          <Route path="/" component={Auth} exact/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/:id" component={Post} />
          <Route path="/new" component={Form} />
     </Switch>
);