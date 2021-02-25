import User from './User'
import { Container , Row } from 'react-bootstrap'


const Grid = () => {
    return(
<Container style={{backgroundColor:"#0076c330"}} className="p-2 mt-3">
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