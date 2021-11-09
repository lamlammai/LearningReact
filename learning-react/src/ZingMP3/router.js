import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Skeleton } from "antd";
import store from "../Redux/store";
import { Provider } from "react-redux";
const HomePage = lazy(() => import("../ZingMP3/HomePage/Organisms/Home/Home"));
const Follow = lazy(() => import("../ZingMP3/Follow/Follow"));
const User = lazy(() => import("../ZingMP3/User/User"));
const SignIn = lazy(() => import("../ZingMP3/Signin/Signin"));

const RoutePage = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Skeleton active />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/follow" exact>
              <Follow />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/Signin" exact>
              <SignIn />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};
export default RoutePage;
