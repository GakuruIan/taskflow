import React from 'react'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Link to='/login' className='text-4xl text-center'>Login</Link>
    </div>
  )
}

export default Main