import React, { useState } from 'react';
import { Jumbotron , Container , Image , Row , Col , Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const DetailedUser = () => {
  
    return (

        <>

        <Jumbotron fluid>
            <Container>
            <Row>
    <Col xs={6} md={4} lg={4} xl={4}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Ibm_px_xt_color.jpg" thumbnail />
    </Col>
    <Col xs={6} md={8} lg={8} xl={8}>
    <h1>Nombre</h1>
  <h1>Otro Dato</h1> 
  <p>Otro Dato</p>

  <Button href='mailto:example@example.com'>Contactar</Button> 
    </Col>
    </Row>


  </Container>
      
</Jumbotron>

        </>
    )
}
export default DetailedUser;