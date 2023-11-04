import React from 'react'
import Card from 'react-bootstrap/Card';
import {MdModeEditOutline,MdDelete} from 'react-icons/md';

function Todoİtem() {
  return (
    <Card className='mt-3'>

    <Card.Body style={{display:'flex',justifyContent:'space-between'}}>
      <h2>TodoList</h2>

      <div style={{display:'flex',justifyContent:'flex-end',width:'25%'}} >
      
      <input type='checkbox' style={{transform:'scale(2)'}}></input>
      <MdModeEditOutline style={{fontSize:'1.7rem',color:'orange', height:"100%", marginLeft:'0.8rem'}}/>
      <MdDelete style={{fontSize:'1.7rem',color:'red', height:"100%",marginLeft:'0.4rem'}}/>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Todoİtem