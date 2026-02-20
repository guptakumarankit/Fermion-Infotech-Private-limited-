import React from 'react'

const Login = () => {
  const handleSubmit = () => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='bg-blue-200 h-screen w-screen flex flex-col justify-center items-center'>
      <h1>Login</h1>
      <div className='flex flex-col'>
          <div className='flex flex-col'>
            <label htmlFor="">Enter Your Email</label>
            <input type="text"
              placeholder='Enter Your Email...' />
          </div>

          <div>
            <label htmlFor="">Enter Your Password</label>
            <input type="text" placeholder='Enter Your Password...'/>
          </div>
      </div>
    </form>
  )
}

export default Login