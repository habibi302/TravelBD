import React, { useState } from "react";
import Header from "../../core-ui/header/Header"

function Contact(){
    const [subject,setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    
    function handleSubject(e){
        setEmail(e.target.value);
    }

    function handleMessage(e){
        setMessage(e.target.value);
    }

    function handleName(e){
        setName(e.target.value);
    }



    return(
        <>
        <Header showSearchBar={false} />
        <div className="container position-relative">

        <div className="position-relative">
            <h1 className="text-dark fw-bolder text-center mt-5 mb-5 display-1">TravelBD</h1>

            <div className="text-center">
            </div>
         <div id="contact" className="form p-2 ">
                <h1 className="text-center text-dark fw-reguler"> Drop us a line! </h1>
                <br/>

        <form action= {`mailto:example@gmail.com?subject=${subject}&body=${"Name: "+name+'%0AMessage: '+message}`} method="POST" encType="text/html" className="m-5"  >
            <label className="form-label" htmlFor="namebox">Name :</label> <br />  
        <input id="namebox" className="form-control w-100 input" type="text" name="" value={name} placeholder="Name" onChange={handleName} /><br/>
        <br/>

            <label className="form-label" htmlFor="subjectbox">Subject :</label>
         <input id="subjectbox" className="form-control w-100" type="text" name="" value={subject} placeholder="Subject" onChange={handleSubject} /><br/>
        <br />
            <label className="form-label" htmlFor="messagebox">Massage :</label>
        <textarea id="messagebox" className='form-control w-100' name="" cols="30" rows="10" value={message} placeholder="Your Message" onChange={handleMessage}></textarea><br/>
    <br/>
    <input className="btn bg-dark text-white btn-lg position-absolute start-50 translate-middle-x"  type="submit" defaultChecked="false" value="Contact Us"/>

        </form>

            </div>

            <br/>
            <br/>
            </div>

        <div className="w-100 bg-warning">
            <iframe className="map w-100 position-absolute mb-5 start-50 translate-middle-x" title="map" src="https://maps.google.com/maps?q=Zindabazar&t=k&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
        </div>

        </div>
        </>
    )
}

export default Contact;