import { Card, Col} from 'react-bootstrap'


const User = ({usuarios}) => {
   return(
        <>
    <Col className="mb-4" >
        <Card  >
            <div style={{height: 200}}>
            <Card.Img className="d-block mx-auto" style={{maxHeight: 200, width: "auto", maxWidth: "100%"}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Ibm_px_xt_color.jpg" />
            </div>
            <Card.Body>
                <Card.Title >Full Name</Card.Title> 
                <Card.Text>City, Country</Card.Text>

            </Card.Body>
        </Card>
        </Col>
</>

)
}
export default User;