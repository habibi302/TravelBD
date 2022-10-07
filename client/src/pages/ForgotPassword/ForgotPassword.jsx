import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
       <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
                <div className='card p-3 pt-5 pb-5' style={{width:"26rem"}}>
                <h2 className='card-title text-center mb-3'>Forgot Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                    <div className='card-body'>
                    <form>
                        <label className='form-label' for='email'>Email</label>
                        <input className='form-control mb-2' id="email" type="email" ref={emailRef} required/>
                        <div className='d-flex justify-content-around mt-2'>
                          <Link to="/login">Log in</Link>
                          <Link to="/signup">Don't have any account?</Link>
                        </div>
                    </form>
                    <div className='text-center mt-3'>
                        <button className='btn btn-dark w-50' disabled={loading}  onClick={handleSubmit}>Reset Password</button>
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}