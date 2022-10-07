import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import {Button, Container, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import Axios from "axios"
import { useAuth } from '../../contexts/AuthContext'

function Header(Props){
  const navigate = useNavigate();

  const [char_,setChar] = useState("");

  function addChar(event){
    event.preventDefault();
    setChar(event.target.value);
  }


  function SearchPost(e){
    e.preventDefault();

    if(char_ !== ""){
      try {
        async function fatchData(){
    
            const response =  await Axios.get("/search/"+char_);
            navigate("/search", {state: {data: response.data}});
    }
    fatchData();
      } catch (error) {
        console.log(error);
      }
    }
  }



  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  


  return(
    <>
        <header class="p-3 bg-dark text-white">
            <Container>
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 me-lg-5 text-white text-decoration-none">
                    <h1>TravelBD</h1>
                    </Link>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" class="nav-link px-2 text-light">Home</Link></li>
                    <li>
                    <div class="dropdown">
                    <Link class="nav-link text-white dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Travel Bangladesh
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link class="dropdown-item" to={"/division/"+"dhaka"}>Dhaka</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"sylhet"}>Sylhet</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"chittagong"}>Chittagong</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"barisal"}>Barisal</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"khulna"}>Khulna</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"rajshahi"}>Rajshahi</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"rangpur"}>Rangpur</Link></li>
                      <li><Link class="dropdown-item" to={"/division/"+"mymensingh"}>Mymensingh</Link></li>
                    </ul>
                     </div>
                    </li>

                    <li>
                    <div class="dropdown">
                    <Link class="nav-link text-white dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Famous Places
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link class="dropdown-item" to={"/famous/"+"shimulbagan"}>Shimul Bagan</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"sajek"}>Sajek</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"jaflong"}>Jaflong</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"coxbazar"}>Cox's Bazar</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"sundarban"}>Sundarban</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"bholaganj"}>Bholaganj</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"rangamati"}>Rangamati</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"sentmartin"}>Sentmartin</Link></li>
                      <li><Link class="dropdown-item" to={"/famous/"+"niladrilake"}>Niladrilake</Link></li>
                    </ul>
                     </div>
                    </li>

                    <li><Link to="/gallery" class="nav-link px-2 text-white">Gallary</Link></li>
                    <li><Link to="/contact" class="nav-link px-2 text-white">Contact</Link></li>
                    </ul>

                    {
                        Props.showSearchBar ? 
                      <>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                          <input type="search" onChange={(e)=>{addChar(e)}} class="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search"/>
                        </form>
                        <div class="text-end">
                          <button onClick={(e)=>{SearchPost(e)}} type="button" class="btn btn-outline-light me-2">Search</button>
                        </div>
                      </>
                    :""
                    }

                    <div className="d-flex ms-4">
                      <Button className="btn btn-light fw-bold" onClick={handleLogout}>Log Out</Button>
                    </div>

                </div>
            </Container>
        </header>
    </>
  )
}

Header.defaultProps={
  SdhouldFocused: false,
  showSearchBar: true
}

export default Header;