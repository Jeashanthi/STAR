import React, { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import TopBar from './TopBar';
import "./App.css";



const Shop = () => {
    const [category, setCategory] = useState(
        {
            id:1,
            category:"Grocery",
            img:"./images/grocery",
        }
    );
  return (
    <div>
    <Container fluid>
    <TopBar/>
  </Container>
  <Container fluid pt-5>
    <img src={require ('./images/banner.png')} />
  </Container>
  <Container>
    <h1>List of Category</h1>
    <div>
        <img src={require ('./images/cat1.png')}/>
    </div>
  </Container>

  </div>
    )
}

export default Shop;