
import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './topNavbar.css';

function TopNavbar() {
  return (
    <>
      <Navbar className="topnavbar" fixed="top">
        <Container>
          <Navbar.Brand>
           <span id="brand">React-Bootstrap</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;