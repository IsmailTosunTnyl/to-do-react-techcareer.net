import React from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap';
import {BiSolidBookBookmark} from 'react-icons/bi'
import { useState } from 'react';
import { addTodoAsync,allTodos } from '../../Redux/todoSlicer';
import { useDispatch } from 'react-redux';


function AddTodo() {
  console.log(' Render AddTodo');
  const [toDoText, setToDoText] = useState('');
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      content: toDoText,
      status: false,
    };
    console.log(todo);
    setToDoText('');
    dispatch(addTodoAsync(todo));
    dispatch(allTodos());
  
  };

  return (
    <form className="d-grid gap-1 mt-3" onSubmit={addTodo} style={{border:'1px solid gray',padding:'1.5rem', borderRadius:'0.5rem'}}>
        <InputGroup className="mb-3" >
            <InputGroup.Text id="basic-addon1" ><BiSolidBookBookmark style={{color:'blue'}} /></InputGroup.Text>
            <Form.Control
              value={toDoText}
              onChange={(e) => setToDoText(e.target.value)}
              placeholder="Add ToDo"
              aria-label="Add ToDo"
              aria-describedby="basic-addon1"
              
            />
          </InputGroup>
          <Button variant="primary" style={{ padding: '0',fontSize: '1.2rem' }} 
            size="sm"
            type='submit' >
            Add ToDo
         </Button>
        
    </form>
  )
}

export default AddTodo