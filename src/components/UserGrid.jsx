import User from './User'
import { Container , Row } from 'react-bootstrap'


const Grid = () => {
    return(
<Container style={{background: "#ebebeb"}} className="p-2">
            <Row xs={1} sm={2} md={3} lg={4}>
         
<User/>
<User/>
<User/>
<User/>
<User/>
<User/>
<User/>
<User/>
<User/>
            </Row>
        </Container>

)
}
export default Grid;