import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../core-ui/header/Header";
import Axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder} from '@fortawesome/free-solid-svg-icons'



export default function Gallery(){

  const navigate = useNavigate();


  function navigateToTheGalleryPage(val){
    navigate("/gallery/"+val.name, {state: {data: val.photos}});
  }


    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
  try {
    Axios.get("http://localhost:3001/galleryphotos").then((response)=>{
      setPhotos(response.data);
      console.log(response.data);
    });
  } catch (error) {
    console.log(error);
  }
  
    }, []);


    return(
    <>
    <Header showSearchBar={false}/>
      <div className="container">

      <div className="row text-center mt-5">
      {
        photos.map((val)=>{
          return(
            <>
              <div onClick={()=>{navigateToTheGalleryPage(val)}} style={{cursor:"pointer"}} className="col-lg-3 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faFolder} size="10x"/>
              <h3 className="text-uppercase">{val.name}</h3>
              </div>
            </>
          )
        })
      }
      </div>
        
      </div>
    </>
    );
}