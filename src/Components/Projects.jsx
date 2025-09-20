import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='flex flex-col items-center p-4'>
      <div className='text-white text-center mb-2'>Visit Github for projects</div>
      <Link to="https://github.com/n3vilreal" className='text-white underline'>Click here</Link>
    </div>
  )
}
