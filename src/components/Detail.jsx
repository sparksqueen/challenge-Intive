import React, { useContext } from 'react'
import { Image , Col , Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';

const Detail = () => {
    const { userData } = useContext (GlobalContext)
 //   console.log(userData)

    return ( 
        <>
            <Col xs={6} md={4} lg={4} xl={4}>
                <Image src={userData[10].large} thumbnail />
            </Col>

            <Col xs={6} md={8} lg={8} xl={8}>
                <h1>{`${userData[1].first} ${userData[1].last}`}</h1>
                <h1>{userData[4].username}</h1> 
                <p>Gender: {userData[0]}</p>
                <p><i className="fas fa-mobile-alt">&nbsp;</i>{userData[7]}</p>

                <Button href={'mailto:' + userData[3]}>Send Mail</Button> 
            </Col>
        </>
)
}
export default Detail;
