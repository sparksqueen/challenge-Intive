import React, { useContext } from 'react';
import { Jumbotron , Container , Row , Button } from 'react-bootstrap';
import { NavLink , useParams , Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Detail from './Detail';

//comenté los console.log en el caso de que deseen activarlos para hacer comprobaciones

const DetailGrid = () => {
  
  const { users } = useContext( GlobalContext )
  const { username } = useParams();
  //  console.log(users)
  const user = users.find(element => {return element.login.username === username})

  if(!user){
    return(
    <Redirect to="/" />
    )
  }
  
    return (
      <>
      <Button style={{backgroundColor:"#df1676", border:'none'}} className="m-3" as={NavLink} to="/"><i className="fas fa-home"></i></Button>
  
      <Jumbotron className="mx-3" style={{backgroundColor:"#0076c330"}} fluid>
        <Container>
          <Row>
            <Detail user={user}/>
          </Row>
        </Container>
      </Jumbotron>
    </>
    )

  


}
export default DetailGrid;