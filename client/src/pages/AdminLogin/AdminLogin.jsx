import React,{useRef,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from 'react-bootstrap'

export default function AdminLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }


  return (
    <>
            <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
                <div className='card p-3 pt-5 pb-5' style={{width:"26rem"}}>
                <h2 className='card-title text-center mb-3'>Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                    <div className='card-body'>
                    <form>
                        <label className='form-label' for='email'>Email</label>
                        <input className='form-control mb-2' id="email" type="email" ref={emailRef} required/>
                        <label className='form-label' for='password'>Password</label>
                        <input className='form-control' id="password" type="password" ref={passwordRef} required/>
                        <div className='d-flex justify-content-around mt-2'>
                          <Link to="/forgotpass">Forgot Password?</Link>
                          <Link to="/signup">Don't have any account?</Link>
                        </div>
                    </form>
                    <div className='text-center mt-3'>
                        <button className='btn btn-dark w-25' disabled={loading}  onClick={handleSubmit}>Login</button>
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}
