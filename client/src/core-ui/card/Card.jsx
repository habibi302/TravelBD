import React from "react";
import {useNavigate} from "react-router-dom";
import "../card/Card.css";

function ProductCard(Props){
    const navigate = useNavigate();

   function navigatetoPosttDetails() {
        navigate("/"+Props.title, {state: {data: Props.allData}});
    }
    return(
        <div class="card col-sm-12 col-md-4 col-lg-3 m-1 w-100">
        <img src={Props.imgurl} style={{cursor:"pointer", minHeight:"13rem"}} onClick={navigatetoPosttDetails} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title" style={{cursor:"pointer"}} onClick={navigatetoPosttDetails} >{Props.title}</h5>
            <p class="card-text" style={{overflow:"hidden",maxHeight:"3.6rem", lineHeight:"1.2rem"}}>{Props.content}</p>
        </div>
        </div>
    )
}

export default ProductCard;