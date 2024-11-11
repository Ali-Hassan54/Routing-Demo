import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetail = () => {
    const params=useParams();
    const navigate=useNavigate();
    const goHome=()=>{
        navigate('/');
    }
  return (
    <div>
      <strong>Id is:{params.id}</strong><br/><br/>
      <button onClick={goHome}>Go home</button>
    </div>
  )
}

export default StudentDetail
