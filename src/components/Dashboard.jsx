import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard page</h1>
      <Link to='/dashboard/user'>User</Link>
      <br/><br/>
      <Link to='/dashboard/group'>Group</Link>
      <Outlet/>
    </>
  )
}

export default Dashboard
