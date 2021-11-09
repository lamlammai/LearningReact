import React from "react";
import AddWork from "../components/addWork";
import ListWork from "../components/listWork";
import {Row, Col} from "antd";

const Todo = ()=>{
    return (
        <Row>
            <Col span={24}>
                <AddWork/>
                <ListWork/>
            </Col>
        </Row>
    )
}
export default React.memo(Todo);