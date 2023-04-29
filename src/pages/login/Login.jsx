import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <form action="" className="loginForm">
        <span className="loginTitle">Login</span>
            <label>Email</label>
            <input type="text" className='loginInput' placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' />
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
        <Link className='link' to={'/register'}></Link>Register</button>
    </div>
  )
}
