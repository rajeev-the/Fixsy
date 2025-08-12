import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'



const Loginuser = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData , setUserData] = useState({})
  const navigate = useNavigate()

  const {user, setUser} = React.useContext(userDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();

//    const userData ={
//     email: email,
//     password: password
//    }

//     const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

// if(res.status === 200){
//   const data = res.data
//   setUser(data)
//   localStorage.setItem('token', data.token)
//   navigate('/home')
// }
  navigate('/home')

    setEmail('')
    setPassword('')
  }

  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-[100px] sm:w-[100px]  mb-4' src="https://ik.imagekit.io/vuavxn05l/Fixsy%20Logo%20with%20Worker%20Silhouette.png?updatedAt=1754424720663" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Loginuser
