import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./App.css";
 



const TopBar = () => {
  return (
    <Container>
    <Row>
      <Col>
      <img src={require ('./images/logo.png')}/>
      </Col>
    <Col>
    <input type="text" placeholder='Search for Products, Brands and More..'/></Col>
    <Col>
    <div><FaRegUserCircle />Login</div>
    </Col>
    <Col>
    <div><IoCartOutline /> Cart
    </div></Col>
    <Col></Col>
    </Row>
  </Container>  )
}

export default TopBar;