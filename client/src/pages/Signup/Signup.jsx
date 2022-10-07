import React,{useRef,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from 'react-bootstrap'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [passError, setpassError] = useState("")
  const [signUpError, setSignupError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      if(passwordRef.current.value.length < 6){
        return setpassError("password length must be grater than 6!")
    }
  }
    else if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setpassError("password dosen't match!")
    }

    try {
      setSignupError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setSignupError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    <>
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
        <div className='card p-3 pt-5 pb-5' style={{width:"26rem"}}>
        <h2 className='card-title text-center mb-3'>Signup</h2>
        {passError && <Alert variant="danger">{passError}</Alert>}
        {signUpError && <Alert variant="danger">{signUpError}</Alert>}
            <div className='card-body'>
            <form>
                <label className='form-label' for='email'>Email</label>
                <input className='form-control mb-2' id="email" type="email" ref={emailRef} required/>
                <label className='form-label' for='password'>Password</label>
                <input className='form-control mb-2' id="password" type="password" ref={passwordRef} required/>
                <label className='form-label' for='confirmpassword'>Confirm Password</label>
                <input className='form-control' id="confirmpassword" type="password" ref={passwordConfirmRef} required/>
                <div className='d-flex justify-content-around mt-2'>
                  <Link to="/signin">Already have an account?</Link>
                </div>
            </form>
            <div className='text-center mt-3'>
                <button className='btn btn-dark w-25' disabled={loading} onClick={handleSubmit}>Signup</button>
            </div>
            </div>
        </div>
    </div>
</>
  )
}
