import React, { useState, useEffect } from "react";

function Profile (props) {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })
  useEffect(() => {
    console.log('*******')
    return () => {
      console.log('*****++++')
    }
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })
  useEffect(() => {
    console.log('*******22222')

  })


  return (
    <div>
      <input onChange={(e) => setFields({...fields, email: e.target.value})} />
      <input onChange={(e) => setFields({...fields, password: e.target.value})} />
      <p>{JSON.stringify(fields)}</p> 
    </div>
  )
}

export default Profile
