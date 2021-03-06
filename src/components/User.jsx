import { Card , Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const User = ({user}) => {
     

    return(
    <>
        <Col className="mb-4" >
            <Card as={NavLink} to={`/usr/${user.login.username}`} >
                <Card.Img className="d-block mx-auto" variant="top" src={user.picture.large}/>
                <Card.Body>
                    <Card.Title >{`${user.name.first} ${user.name.last}` }</Card.Title> 
                    <Card.Text><i className="far fa-flag"></i>{` ${user.location.country}, ${user.location.city}`}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}
export default User;