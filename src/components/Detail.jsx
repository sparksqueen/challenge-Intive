import React, { useContext } from 'react'
import { Image , Col , Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';

const Detail = () => {
    const { userData } = useContext (GlobalContext)

    return ( 
        <>
            <Col xs={6} md={4} lg={4} xl={4}>
                <Image src="" thumbnail />
            </Col>

            <Col xs={6} md={8} lg={8} xl={8}>
                <h1>Name</h1>
                <h1>User</h1> 
                <p>Gender: {userData.gender}</p>
                <p><i className="fas fa-mobile-alt">&nbsp;</i>{userData.phone}</p>

                <Button href={'mailto:' + userData.email}>Send Mail</Button> 
            </Col>
        </>
)
}
export default Detail;
