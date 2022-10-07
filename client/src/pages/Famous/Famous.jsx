import React, {useState, useEffect} from 'react'
import Header from '../../core-ui/header/Header'
import Footer from '../../core-ui/footer/Footer'
import { useParams } from 'react-router-dom'
import Axios from "axios"

export default function Famous({title, content, imgurl}) {
    const name = useParams();

    const [data, setData] = useState([]);
    const [allcontent, setContent] = useState([]);

    useEffect(()=>{
  try {
    async function fatchData(){

        const response =  await Axios.get("http://localhost:3001/famousplaces/"+name.famousplaces);
        console.log(response.data);
     setData(response.data);
}
fatchData();
  } catch (error) {
    console.log(error);
  }
  
    },[name])


    return (
        <>
            <Header />
         <div style={{minHeight:"100vh"}} className='container'>
            <div className='d-flex justify-content-center mb-5' style={{width:"100%"}}>
            <div style={{maxWidth:"900px", position:"relative"}}>
            <img style={{maxWidth: "900px", borderRadius:"10px", border:"5px solid white", boxShadow:"0px 0px 7px"}} className='card-img' src={data.imgurl} alt='post img'/>
            <h6 style={{background:"white", padding:"3px", position:"absolute", borderRadius:"5px", bottom:"0", marginLeft:'10px'}}>{data.district}</h6>
            </div>
            </div>
            <h3>{name.famousplaces.toUpperCase()}</h3>
            <p className='mb-4'>{data.about}</p>
            <h3>How to go</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${name.famousplaces}&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
        </div>
            <p className='mb-4'>{data.how_to_go}</p>
            <h3>How to stay</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${name.famousplaces}+hotels&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
             </div>
            <p className='mb-4'>{data.how_to_stay}</p>
            <h3>where to eat</h3>
            <div className="bg-light">
            <iframe className="map w-100 start-50 rounded" title="map" src={`https://maps.google.com/maps?q=${name.famousplaces}+restaurants&t=k&z=13&ie=UTF8&iwloc=&output=embed`} width="400" height="300"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
             </div>
            <p className='mb-4'>{data.where_to_eat}</p>
            <h3>Some places to visit in {data.district}</h3>
            <p className='mb-4'>{data.some_places}</p>
    
         </div>

         <Footer/>
        </>
      )
}
