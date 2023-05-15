import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [user,setUser] = useState({
        name:'',
        password:'',
        image:'',
        address:''
    })

    const handleUser = (e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    const handleUserImage = (e)=>{
        setUser({...user, image : e.target.files[0]})
    }
//   console.log(user)
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('name',user.name)
        formData.append('password',user.password)
        formData.append('image',user.image)
        formData.append('address',user.address)

        const response = await axios.post('http://localhost:3001/api/register',formData)
        console.log(response)
    }
  return (
    <div >
      <form onSubmit={handleSubmit} encType='multipart/form-data' >
        <input
         type="text" 
         placeholder='Name' 
         name='name'
         value={user.name}
         onChange={handleUser} 
        />
        <input
         type="password" 
         placeholder='Password'
         name='password'
         value={user.password} 
         onChange={handleUser} 
        />
        <input
         type="file" 
         accept='.png, .jpg, .jpeg' 
         name='image' 
         onChange={handleUserImage}  
        />
        <input
         type="text" 
         placeholder='Addresss'
         name='address'
         value={user.address}
         onChange={handleUser}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form;
