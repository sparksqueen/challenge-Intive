import React, { useContext , useEffect } from 'react';
import { Jumbotron , Container , Row , Button } from 'react-bootstrap';
import { NavLink , useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Detail from './Detail';

//comenté los console.log en el caso de que deseen activarlos para hacer comprobaciones

const DetailedUser = () => {
  
  const { users } = useContext( GlobalContext )
  const { userData , setUserData } = useContext ( GlobalContext)
  const { email } = useParams();
//    console.log(users)

    useEffect(() => {
      const  user = users.find(element => {return element.email === email})
//      console.log(user)
      setUserData(user)     
      }, [])
 //     console.log(userData)

  return (
  <>
    <Button style={{backgroundColor:"#df1676", border:'none'}} className="m-3" as={NavLink} to="/"><i className="fas fa-home"></i></Button>

    <Jumbotron className="mx-3" style={{backgroundColor:"#0076c330"}} fluid>
      <Container>
        <Row>
          <Detail/>
        </Row>
      </Container>
    </Jumbotron>
  </>
  )
}
export default DetailedUser;