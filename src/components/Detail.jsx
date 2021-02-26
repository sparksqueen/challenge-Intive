import { Image , Col , Button } from 'react-bootstrap';

const Detail = ({user}) => {

    return ( 
        <>
            <Col xs={6} md={4} lg={4} xl={4}>
                <Image src={user.picture.large} thumbnail />
            </Col>

            <Col xs={6} md={8} lg={8} xl={8}>
                <h1>{`${user.name.first} ${user.name.last}`}</h1>
                <h1>{user.login.username}</h1> 
                <p>Gender: {user.gender}</p>
                <p><i className="fas fa-mobile-alt">&nbsp;</i>{user.phone}</p>

                <Button href={'mailto:' + user.email}>Send Mail</Button> 
            </Col>
        </>
)
}
export default Detail;
