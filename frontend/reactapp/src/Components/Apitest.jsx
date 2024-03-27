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
    }, [message]);
  
  return (
    <div>Apitest
        <p>{message}</p>
    </div>
  )
}

export default Apitest