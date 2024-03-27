import React, { useEffect, useState } from 'react'
import axios from 'axios' ; 


function Apitest() {
    const [message, setMessage] = useState('');

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/hello-world/')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
            setMessage(error.message)
          console.log(error);
        });

        axios.post('http://127.0.0.1:8000/api/register/', {
          username: 'deki123123', 
          first_name: 'deki',  
          last_name: 'deki', 
          email: 'deki@example.com', 
          password: 'deki',
        })
        .then(response => {
          console.log(response.data); // Handle successful registration
        })
        .catch(error => {
          console.error('Registration failed:', error); // Handle registration error
        });
    }, [message]);
  
  return (
    <div>
      Apitest
        <p>{message}</p>
    </div>
  )
}

export default Apitest