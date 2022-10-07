import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../core-ui/footer/Footer';
import Header from '../../core-ui/header/Header';


export default function Details() {

    const location= useLocation();

  return (
    <>
    <Header />
         <div style={{minHeight:"100vh"}} className='container'>
            <div className='d-flex justify-content-center mb-5' style={{width:"100%"}}>
            <div style={{maxWidth:"900px", position:"relative"}}>
            <img style={{maxWidth: "900px", borderRadius:"10px", border:"5px solid white", boxShadow:"0px 0px 7px"}} className='card-img' src={location.state.data.imgurl} alt='post img'/>
            <h6 style={{background:"white", padding:"3px", position:"absolute", borderRadius:"5px", bottom:"0", marginLeft:'10px'}}>{location.state.data.district.toUpperCase()}</h6>
            </div>
            </div>
            <h3>{location.state.data.title.toUpperCase()}</h3>
            <p className='mb-4'>{location.state.data.about}</p>
            <h3>How to go</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${location.state.data.title}&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
        </div>
            <p className='mb-4'>{location.state.data.how_to_go}</p>
            <h3>How to stay</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${location.state.data.title}+hotels&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
             </div>
            <p className='mb-4'>{location.state.data.how_to_stay}</p>
            <h3>where to eat</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${location.state.data.title}+restaurants&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
             </div>
            <p className='mb-4'>{location.state.data.where_to_eat}</p>
            <h3>Some places to visit in {location.state.data.district.toUpperCase()}</h3>
            <p className='mb-4'>{location.state.data.some_places}</p>
    
         </div>
         <Footer/>
    </>
  )
}
