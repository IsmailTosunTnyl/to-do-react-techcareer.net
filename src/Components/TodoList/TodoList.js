import {React,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Todoİtem from './Todoİtem';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import { selectAllTodos,selectTodoError,selectTodoStatus,deleteAllTodoAsync,deleteDoneTodoAsync } from '../../Redux/todoSlicer';
import './TodoList.css';

function TodoList() {

  const dispatch = useDispatch();
  console.log(' Render TodoList');
  const data = useSelector(selectAllTodos);
  const status = useSelector(selectTodoStatus);
  const error = useSelector(selectTodoError);

  const deleteAllTodos = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')){
      dispatch(deleteAllTodoAsync());
    }
  }

  const deleteDoneTodos = () => {
    if (window.confirm('Are you sure you want to delete all done tasks?')){
      dispatch(deleteDoneTodoAsync());
    }
  }



  return (
     <>
     
    <div className='todo_list'>
       {status ==='succeeded' && !error && data.filter((todo) => todo.visible).map((todo) => (
        <Todoİtem key={todo.id} todo={todo} />
        ))}
    </div>
    <Container className='mt-3' style={{padding:'0'}}>
        <Row style={{display:'flex',justifyContent:'space-between',padding:'0'}}>
            <Col style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}  > <Button variant="danger" size="lg" onClick={deleteDoneTodos} style={{padding: '0.4rem',width:'90%'}}> Delete Done Task</Button> </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}> <Button variant="danger" size="lg" onClick={deleteAllTodos} style={{padding: '0.4rem',width:'90%'}}> Delete All Task</Button> </Col>
        </Row>

    </Container>
    </>
  )

}

export default TodoList