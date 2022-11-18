

import {useState} from "react";
import {Button,Nav,Navbar,Container,Row,Col} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {data} from "./data";


function App() {

    let [shoes] = useState(data);


  return (

    <div className="App">

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className ="main-bg" ></div>
        <Container>

            <Row>

               {/* <Card shoes={shoes[0]} i={1}></Card>
                <Card shoes={shoes[1]} i={2}></Card>
                <Card shoes={shoes[2]} i={3}></Card>*/}
                {
                    shoes.map((a,i)=>{
                        return (
                            <Card shoes={shoes[i]} i={i+1}></Card>
                        );
                    })
                }
            </Row>
        </Container>



    </div>
  );
}

function Card(props){
    return(
        <Col>
            <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>

    )

}


export default App;

