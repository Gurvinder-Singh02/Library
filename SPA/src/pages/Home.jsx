import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <Link to="/About">Kitchen</Link>
    </div>
  )
}

export default Home