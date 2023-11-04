import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Todoİtem from './Todoİtem';
import { Button } from 'react-bootstrap';

function TodoList() {
  return (
     <>
    <div>
        <Todoİtem/>
    </div>
    <Container className='mt-3' style={{padding:'0'}}>
        <Row style={{display:'flex',justifyContent:'space-between',padding:'0'}}>
            <Col style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}  > <Button variant="danger" size="lg" style={{padding: '0.4rem',width:'90%'}}> TEST Button</Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}> <Button variant="danger" size="lg" style={{padding: '0.4rem',width:'90%'}}> TEST Button</Button> </Col>


        </Row>

    </Container>
    </>
  )
}

export default TodoList