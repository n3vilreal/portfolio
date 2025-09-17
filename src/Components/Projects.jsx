import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <div className='text-white'>Visit Github for projects</div>
      <Link to="https://github.com/n3vilreal" className='text-white'>Click here</Link>
    </div>
  )
}
