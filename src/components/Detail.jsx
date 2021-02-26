import { Image , Col , Button } from 'react-bootstrap';

const Detail = ({user}) => {

return ( 
    <>
<Col xs={6} md={4} lg={4} xl={4}>
<Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Ibm_px_xt_color.jpg" thumbnail />
</Col>

<Col xs={6} md={8} lg={8} xl={8}>
<h1>Titulo</h1>
<h1>usuario</h1> 
<p>City , Country</p>

<Button href='mailto:example@example.com'>Contactar</Button> 
</Col>
    </>
)
}
export default Detail;
