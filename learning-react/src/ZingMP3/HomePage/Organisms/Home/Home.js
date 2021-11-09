import React from "react";
import { Row, Col } from "antd";
import Menu from "../../Molecules/Menu/Menu";
import Logo from "../../Atoms/Logo/Logo";
import "./style.css";
import 'antd/dist/antd.css';
import Header from "../../Molecules/Header/Header";
import Content from "../Content/Content"
import ListLibrary from "../../Molecules/Library/ListLibrary";
import PlayControl from "../../Molecules/PlayControl/PlayControl";
import { useLocation } from "react-router-dom";
function HomePage() {
  const {pathname} = useLocation();
  console.log(pathname);
    return (
      <>
        <Row>
          <Col className="left-content" span={4}>
            <Logo/>
            <Menu defaultSelectedKeys={pathname}/>
            <div className ="Slidebar">
              <ListLibrary />
            </div>
            
          </Col>
          <Col className="right-content" span={20}>
            <Header/>
            <Row>
              <Col span={22} offset={1}>
                <Content/>
              </Col>
            </Row>
          </Col>
        </Row>
        <PlayControl/>
      </>
    );
  }

export default HomePage;
