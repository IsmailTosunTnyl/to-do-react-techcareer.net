import Header from "./Components/Header/Header";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoListButtons from "./Components/TodoListButtons/TodoListButtons";
import TodoList from "./Components/TodoList/TodoList";
import {React,useEffect} from 'react'


function App() {
  console.log(' Render App');

  return (
    <div>
     <Container style={{maxWidth:"60%"}}>
      
      <Row className="justify-content-md-center header_row mt-3" >
        <Header />
      </Row>
      
      <Row>
        <Col >  <AddTodo /> </Col>
      </Row>
        
      <Row>
        <Col> <TodoListButtons/></Col>
      </Row>

      <Row>
      <Col> <TodoList/> </Col>
      </Row>
      
    </Container>

    </div>
  );
}

export default App;
