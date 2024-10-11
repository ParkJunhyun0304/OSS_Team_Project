import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './common.css';

function Header() {
  const handleClick = () => {
    window.location.href = "./Main"; // home 화면으로 이동
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className="d-flex justify-content-start align-items-center h-100">
          <div className="brand-container" onClick={handleClick}>
            <span className="brand-text">Myshared</span>
            <Navbar.Brand href="./Main">
              <img
                alt=""
                src="//music.youtube.com/img/on_platform_logo_dark.svg"
                width="75"
                height="30"
                className="d-inline-block align-top brand-logo"
              /> 
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;