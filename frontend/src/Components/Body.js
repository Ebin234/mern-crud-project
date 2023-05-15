import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Body() {
    const [users,setUsers] = useState([]);

    const fetchUsers = async()=>{
        const {data} = await axios.get('http://localhost:3001/api/users')
        console.log('userdata',data)
    }

    useEffect(()=>{
        fetchUsers()
        
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Body;