import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import 'antd/dist/antd.css';
import Header from "./component/Header/Header";
// Lazy load - Code splitting
const Photo = React.lazy(() => import("./Features/Photo"));

function App() {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
              <BrowserRouter>
                <Header />
                <Switch>
                  <Redirect exact from="/" to="/photos" />
                  <Route path="/photos" component={Photo} />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
