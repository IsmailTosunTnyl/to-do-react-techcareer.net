import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function TodoListButtons() {
  return (
    <Container className='mt-3'>
        <Row className="justify-content-md-center  header_row">
            <Col > <h1>Todo list</h1></Col>

        </Row>
        <Row className='mt-3 '>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}  > <Button variant="primary" size="lg" style={{padding: '0.4rem',width:'60%'}}> TEST Button</Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Button variant="primary" size="lg" style={{padding: '0.4rem',width:'60%'}}> TEST Button</Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} > <Button variant="primary" size="lg" style={{padding: '0.4rem',width:'60%'}}> TEST Button</Button> </Col>

        </Row>
        

    </Container>
  )
}

export default TodoListButtons