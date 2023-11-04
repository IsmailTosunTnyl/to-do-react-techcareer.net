import React from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap';

function AddTodo() {
  return (
    <div className="d-grid gap-1 mt-3" style={{border:'1px solid gray',padding:'1.5rem', borderRadius:'0.5rem'}}>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button variant="primary" style={{ padding: '0',fontSize: '1.2rem' }} 
            size="sm" >
            Block level button
         </Button>
        
    </div>
  )
}

export default AddTodo