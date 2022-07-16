import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "src/components/Layout";
import Dashboard from "src/pages/Dashboard";
import Profile from "src/pages/Profile";
import Posts from "src/pages/Posts";
import PostCreate from "src/pages/Posts/Create";
import Exit from "src/components/Exit";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/dashboard" exact={true} component={Dashboard} />
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/post/new" exact={true} component={PostCreate} />
      <Route path="/posts" exact={true} component={Posts} />
      <Route path="/posts/:id" exact={true} component={Posts} />
      <Route path="/exit" exact={true} component={Exit} />
    </Switch>
  </Layout>
);

export default AppRoutes;
