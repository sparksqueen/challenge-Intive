import React, { useState } from 'react';
import { Jumbotron , Container , Image , Row , Col , Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const DetailedUser = () => {
  
    return (

        <>

<Button className="m-3" as={NavLink} to="/">← Atras</Button>

        <Jumbotron fluid>
            <Container>
            <Row>
    <Col xs={6} md={4} lg={4} xl={4}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Ibm_px_xt_color.jpg" thumbnail />
    </Col>
    <Col xs={6} md={8} lg={8} xl={8}>
    <h1>Nombre , Apellido</h1>
  <h1>usuario</h1> 
  <p>city , country</p>

  <Button href='mailto:example@example.com'>Contactar</Button> 
    </Col>
    </Row>




  </Container>
      
</Jumbotron>

        </>
    )
}
export default DetailedUser;