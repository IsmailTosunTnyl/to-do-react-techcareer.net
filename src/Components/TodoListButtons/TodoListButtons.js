import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { doneTodos,allTodos,undoneTodos } from '../../Redux/todoSlicer';
import { useDispatch } from 'react-redux';

function TodoListButtons() {
  const dispatch = useDispatch();
  return (
    <Container className='mt-3'>
        <Row className="justify-content-md-center  header_row">
            <Col > <h1>Todo list</h1></Col>

        </Row>
        <Row className='mt-3 '>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}  > <Button variant="primary" size="lg" onClick={() => dispatch(allTodos())} style={{padding: '0.4rem',width:'60%'}}>All</Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Button variant="primary" size="lg" onClick={() => dispatch(doneTodos())}  style={{padding: '0.4rem',width:'60%'}}> Done </Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} > <Button variant="primary" size="lg" onClick={() => dispatch(undoneTodos())} style={{padding: '0.4rem',width:'60%'}}> Todo</Button> </Col>
        </Row>
        

    </Container>
  )
}

export default TodoListButtons