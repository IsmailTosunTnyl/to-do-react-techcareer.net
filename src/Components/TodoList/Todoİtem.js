import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import {MdModeEditOutline,MdDelete} from 'react-icons/md';
import {GiConfirmed} from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { updateTodoAsync,deleteTodoAsync } from '../../Redux/todoSlicer';

function Todoİtem({todo}) {
  const dispatch = useDispatch();
  const [edit,setEdit] = useState(false);
  const [editText,setEditText] = useState(todo.content);


  const updateTodo = (e) => {
    e.preventDefault();
    const updatedTodo = {
      id: todo.id,
      content: editText,
      status: !todo.status,
    };
    dispatch(updateTodoAsync(updatedTodo));
    setEdit(false);
  };


  return (
    <Card className='mt-3'>

    <Card.Body style={{display:'flex',justifyContent:'space-between'}}>
      
     

      {  !edit && 
      <>
      <h2>{editText}</h2>
      <div style={{display:'flex',justifyContent:'flex-end',width:'25%'}} >

        <input type='checkbox' checked={todo.status} style={{transform:'scale(2)'}} onChange={updateTodo}></input>
        <MdModeEditOutline onClick={() => setEdit(true)} style={{fontSize:'1.7rem',color:'orange', height:"100%", marginLeft:'0.8rem'}}/>
        <MdDelete onClick={()=> dispatch(deleteTodoAsync(todo))} style={{fontSize:'1.7rem',color:'red', height:"100%",marginLeft:'0.4rem'}}/>

      </div></>  }

      { edit &&
            <>
            <input type='text' value={editText} onChange={(e)=> setEditText(e.target.value)}></input>
            <div style={{display:'flex',justifyContent:'flex-end',width:'25%'}} >
      
         
              <GiConfirmed style={{fontSize:'1.7rem',color:'green', height:"100%", marginLeft:'0.8rem'}} onClick={updateTodo} ></GiConfirmed>
      
            </div></>
        
      
     }

    </Card.Body>
  </Card>
  )
}

export default Todoİtem