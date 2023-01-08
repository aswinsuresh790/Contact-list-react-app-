import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Todolist from './Todolist';
import {AiFillDelete} from 'react-icons/ai'
import {FaUserEdit} from 'react-icons/fa'
import '../css/todoadd.css'


const Todoadd = () => {      

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE",
        // delete dummy fuction from the contact using DELETE method 
        })

        dispatch({ type: 'DELETE_CONTACT', payload: id });
    //  this action perform deletion of contact  
    }

    return (
        <div className='container'>
            <div className='row'>
               <h1 style={{textAlign:'center' ,marginBottom:"25px"}}>Contact list App</h1> 
                <div className='addbutton'>
                    <Link to='/add' className='btn btn-success'>Add Contact</Link>
                    {/* this button used to add new conatct  */}
                </div>
                <div className='table'>
                <Table striped bordered hover   >
                    {/* table with details name ,email, phone and delete/edit operation  */}
      <thead className='col-10'  >
        <tr className='col-9' >
          
          <th className='col-sm-2'>Name</th>
          <th className='email col-sm-2'>Email</th>
          <th className='col-sm-3'>Phone</th>
          <th className=' edit col-sm-3' >Edit/
          Delete</th>
          
        </tr>
      </thead>
      <tbody >
       
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id} className="col-sm-6">
                                      
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary me-2'><FaUserEdit size={28}/></Link>

                                            {/* edit route go to the edit page and edit the contact details  */}


                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'><AiFillDelete size={28}/></button>
                                        {/* using this button delete the selected contact */}
                                        </td>
                                    </tr>
                                ))
                            }
                     </tbody>
    </Table>
                </div>
            </div>
        </div >
    )
}

export default Todoadd;