import { Container , Row } from 'react-bootstrap'
import User from './User'
import LoadMore from './LoadMore'
import React, { useContext , useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { getUsers } from '../services/UserServices'
 

const Grid = () => {

    const { users, setUsers } = useContext( GlobalContext )

//retorna los datos del JSON solicitado en UserServices
        useEffect(() => {
            if(users.length === 0){
                async function GetUsersAsync () {
                    const data = await getUsers()
                    setUsers(data);
                }

                GetUsersAsync()
            }   
        }, [])
//        console.log(users)

    return (
    <>
        <Container style={{backgroundColor:"#0076c330"}} className="p-2 mt-3">
            <Row xs={1} sm={2} md={3} lg={4}>        
            {
            users.map( (user, index) => (
                <User user={user} key={index} />
            ))
            }
            </Row>
            
            <LoadMore/>
        </Container>
    </>
    )
}
export default Grid;