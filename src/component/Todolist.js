import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../css/todolist.css'
const Todolist = () => {
const[user,setUser]=useState('')


  return (
    <div className='todolist'>
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
        
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
   
    <tr>
       
    
          <td>name</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Lonewolf@gmail.com</td>
          <td style={{padding:'15px' }} className="buttons"><button className='btn btn-success'>Edit</button><button className='btn btn-danger'>Delete</button></td>
          </tr>
      
      
 
        
        </tbody>
    </Table>

        </div>
      
    </div>
  )
}

export default Todolist
