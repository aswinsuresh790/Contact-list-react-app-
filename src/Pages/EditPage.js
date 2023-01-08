import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import ContactRedux from '../Redux/ContactRedux'
import {AiFillContacts} from 'react-icons/ai'
import '../css/editpage.css'


const EditPage = () => {
    const Navigate=useNavigate()
    // Navigate allow to go to another route 


const contacts=useSelector(state=>state)
// contacts is a get the state from conactRedux ,The selector will be called with the entire Redux store state as its only argument.useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched. 

const dispatch=useDispatch()
// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
const[name,setName]=useState("")   

const[email,setEmail]=useState("")
const[phone,setPhone]=useState("")

// Named,Phone,email are the hooks used to  extract stateful logic from a component so it can be tested independently and reused 
const {id}=useParams()
// The useParams() hook is a React Router hook that allows you to access the parameters of the current URL
const currentcontactUser=contacts.find((contact)=>contact.id===parseInt(id))
// currentcontactUser is a used to find the current of contact id when we select any contact 

useEffect(() => {
    if (currentcontactUser) {
        setName(currentcontactUser.name);
        setEmail(currentcontactUser.email);
        setPhone(currentcontactUser.phone);
    }

}, [currentcontactUser]);
// in this useeffect hook the currentcontactUser can change the value using setState hook 
const updataData=((e)=>{
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/users/",{
        method:"PUT"
        // this is dummy fuction to update the given field value
    })
    
    const  findEmail=contacts.find((contact)=>contact.id!==parseInt(id) && contact.email===email )
    const findphone=contacts.find((contact)=>contact.id!==parseInt(id) && contact.phone===parseInt(phone) )  
    // Error chance if not getting the proper id for the object or getting the already presented email and phone
    const data = {
        id: parseInt(id),
        name,
        email,
        phone
    } 
    // the data consist of details of name ,amil and phone 
    if (findEmail) {
        console.log("This email already Exists!");
        
    }
    // the case of email already existing 
    if (!name ||!phone|| !email ){
        console.log("Please fill all data")
    }
    // this condition state that every feild should have a value
    dispatch({type:'UPDATE_CONTACT', payload:data})
    // update contact is an action perform using dispatch to update the details  
    Navigate('/')
// goto home component and show the new updated details 
})

    return (
    <div className='edit-section'>
        <div className="edit-box">
            <div>
                <h2> Edit Contact &nbsp;< AiFillContacts color='blue' /></h2>
            </div>
<form onSubmit={updataData}>
<div>
    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
</div>
<div>
    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
</div>
<div>
    <input type='text' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
</div>
<div>
    <button className='btn btn-success'>Update </button>
    <button className='btn btn-danger'>Cancel</button>
</div>
</form>
        </div>
      
    </div>
  )     
}

export default EditPage
