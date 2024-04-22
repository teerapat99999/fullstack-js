import {useState, useEffect} from 'react';
import { Row, Container,Col,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setuser] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3333/user")
      .then(res => res.json())
      .then(
        (result) => {
          setuser(result);
        }
      )
  }, [])

  return (
    <div >
       <Container>
        <Row>
          {user.map(user => ( 
            <Col xs = {12} sm = {6}  key = {user.id} >
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.username_user}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
            </Col>
            ))}
          
        </Row>
       </Container>
    </div>
  );
}

export default App;
