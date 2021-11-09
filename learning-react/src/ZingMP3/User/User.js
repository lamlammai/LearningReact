import React from "react";
import { Row, Col } from "antd";
import Menu from "../HomePage/Molecules/Menu/Menu";
import Logo from "../HomePage/Atoms/Logo/Logo";
import "antd/dist/antd.css";
import Header from "../HomePage/Molecules/Header/Header";
import ListLibrary from "../HomePage/Molecules/Library/ListLibrary";
import PlayControl from "../HomePage/Molecules/PlayControl/PlayControl";
import { useLocation } from "react-router-dom";
import "./User.css";
function HomePage() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Row>
        <Col className="left-content" span={4}>
          <Logo />
          <Menu defaultSelectedKeys={pathname} />
          <div className="Slidebar">
            <ListLibrary />
          </div>
        </Col>
        <Col className="right-content" span={20}>
          <Header />
          <div>
            <h1 className="UserText">Hi mn minh la ca nhan day</h1>
          </div>
        </Col>
      </Row>
      <PlayControl />
    </>
  );
}

export default HomePage;
