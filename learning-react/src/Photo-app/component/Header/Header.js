import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.css';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between header-content">
          <Col xs="auto">
              Easy Frontend
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;