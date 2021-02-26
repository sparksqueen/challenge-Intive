import React, { useContext , useEffect } from 'react';
import { Jumbotron , Container , Image , Row , Col , Button } from 'react-bootstrap';
import { NavLink , useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Detail from './Detail';



const DetailedUser = () => {
  
const { users , setUsers } = useContext( GlobalContext ); 

const { email } = useParams();
console.log(users)



useEffect(() => {
  const  user = users.find(element => {return new Array(element.email == email)})
  console.log(user)
  return user
  
  })




    return (
    <>
      <Button style={{backgroundColor:"#df1676", border:'none'}} className="m-3" as={NavLink} to="/"><i className="fas fa-home"></i></Button>
        <Jumbotron className="mx-3" style={{backgroundColor:"#0076c330"}} fluid>
          <Container>
            <Row>
              <Col xs={6} md={4} lg={4} xl={4}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Ibm_px_xt_color.jpg" thumbnail />
              </Col>

              <Col xs={6} md={8} lg={8} xl={8}>
                <h1>Titulo</h1>
                <h1>usuario</h1> 
                <p>City , Country</p>

                <Button href='mailto:example@example.com'>Contactar</Button> 
              </Col>
          </Row>
        </Container>
      </Jumbotron>

  </>
  )
}
export default DetailedUser;