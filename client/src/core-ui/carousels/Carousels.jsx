import React from 'react'
import carousels_photos from '../../constants/carousels_photos';
import "../carousels/carousels_style.css";

export default function Carousels() {
    const carouselBanners = carousels_photos;
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
  
        {
          carouselBanners.map((val, key)=>{
          return(
              key === 0
              ?
              <div className="carousel-item active" key={key}>
                <img src={val.src} className="d-block w-100" alt="..."/>
              </div>
              :
              <div className="carousel-item" key={key}>
                <img src={val.src} className="d-block w-100" alt="..."/>
              </div>
          )
        })
        }
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
