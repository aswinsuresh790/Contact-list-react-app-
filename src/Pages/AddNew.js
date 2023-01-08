import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const AddNew = () => {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    //  this 3 hook is used make  the stateful component  ,it can change the value of name ,email and phone    
    const Navigate=useNavigate()
    
    const contacts=useSelector(state=>state)
    const dispatch=useDispatch()
    const SubmitHandling=((e)=>{
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/users/",{
            method:'POST'
            //Post is dummy function to add new contact 
        })
        const searchEmail=contacts.find(contact=>contact.email===email && email)
        const searchPhone=contacts.find(contact=>contact.phone===phone &&phone)
        // this  used to find the email and phone if it exist or not 
        if (!email || !phone|| !name) {
            console.log("Please fill in all fields!");
            // chec all field have an value 
        }
        const data={
            name,
            email,
            phone,
            id: contacts[contacts.length - 1].id + 1,

        }
        // the data is a details of new conact 
        dispatch({type:"ADD_CONTACT",payload:data})
        // new action to add new contact 
        Navigate('/')
    })






  return (
    <div className='container ' style={{width:'500px', marginTop:'30px'}}>
    <h3>Add New Contact </h3>
    <form onSubmit={SubmitHandling}>
    <div className="mb-3">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email" value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className="form-control"
        placeholder="Enter email"
      />
    </div>
 
    <div className="mb-3">
      <label>Phone</label>
      <input
        type="text" alue={phone}
        onChange={(e)=>{setPhone(e.target.value)}}
        className="form-control"
        placeholder="Enter Phone number"
      />
    </div>
    
    
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Add New
      </button>
      <button className='btn btn-danger' style={{marginTop:'20px'}}>
        Cancel
      </button>
    </div>
    
  </form>
      
    </div>
  )
}

export default AddNew
