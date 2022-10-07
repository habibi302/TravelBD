import React, { useRef, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import AdminHeader from '../../core-ui/adminHeader/AdminHeader';
import Axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';

export default function AdminUpdatePost(Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const title = useRef("");
  const imgurl = useRef("");
  const division = useRef("");
  const district = useRef("");
  const about = useRef("");
  const howToGo = useRef("");
  const howToStay = useRef("");
  const whereToEat = useRef("");
  const somePlaces = useRef("");

  const [isValid, setIsValid] = useState(false);
  const [errors,setError]=useState({
  title:'',
  imgurl:'',
  division:"",
  district:"",
  about:"",
  howToGo:"",
  howToStay:"",
  whereToEat:"",
  somePlaces:""
})

  function handleSubmit(){
    setError({
      title:'',
      imgurl:'',
      division:"",
      district:"",
      about:"",
      howToGo:"",
      howToStay:"",
      whereToEat:"",
      somePlaces:""
    })

    checkValidation();

    if(isValid){
     const data = {
        id:location.state.post._id,
        title:title.current.value,
        imgurl:imgurl.current.value,
        division:division.current.value,
        district:district.current.value,
        about:about.current.value,
        howToGo:howToGo.current.value,
        howToStay:howToStay.current.value,
        whereToEat:whereToEat.current.value,
        somePlaces:somePlaces.current.value
      }

      Axios.post("http://localhost:3001/update",data).then((response)=>{
        navigate("/adminhome");
      })
      .catch(err=>console.log(err));
    }
  }

  function checkValidation(){
      if(title.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            title:"Title must not be empty!"
          }
        });
      }
      if(imgurl.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            imgurl:"Imgurl must not be empty!"
          }
        });
      }

      if(division.current.value === "Select Division"){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            division:"You must select one division!"
          }
        });
      }

      if(district.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            district:"District must not be empty!"
          }
        });
      }
      if(about.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            about:"About must not be empty!"
          }
        });
      }
      if(howToGo.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            howToGo:"This field must not be empty!"
          }
        });
      }
      if(howToStay.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            howToStay:"This field must not be empty!"
          }
        });
      }
      if(whereToEat.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            whereToEat:"This field must not be empty!"
          }
        });
      }
      if(somePlaces.current.value === ""){
        setError(prevValue =>{
          setIsValid(false);
          return{
            ...prevValue,
            somePlaces:"This field must not be empty!"
          }
        });
      }
      else{
        setIsValid(true);
      }
      
  }
  return (
    <>
    <AdminHeader/>
      <Container className='mt-5 mb-5'>
      <h1 className='text-center'>Update Post</h1>
        <Form>
          <Form.Group className='mb-3'>
            
            <Form.Label htmlFor='title'>Title</Form.Label>
            <Form.Control id='title' type='text' ref={title} defaultValue={location.state.post.title} required/>
            {errors?<span className='help-block text-danger'>{errors.title}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='imgurl'>ImgURL</Form.Label>
            <Form.Control id='imgurl' type='text' ref={imgurl} defaultValue={location.state.post.imgurl} required/>
            {errors?<span className='help-block text-danger'>{errors.imgurl}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='division'>Division</Form.Label>
            <Form.Select aria-label='Default Division Select' ref={division} defaultValue={location.state.post.division}>
              <option value="Select Division">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensing">Mymensing</option>
            </Form.Select>
            {errors?<span className='help-block text-danger'>{errors.division}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='district'>District</Form.Label>
            <Form.Control id='district' type='text' ref={district} defaultValue={location.state.post.district} />
            {errors?<span className='help-block text-danger'>{errors.district}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='about'>About</Form.Label>
            <Form.Control id='about' as="textarea" rows="3" ref={about} defaultValue={location.state.post.about} />
            {errors?<span className='help-block text-danger'>{errors.about}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='how_to_go'>How to go</Form.Label>
            <Form.Control id='how_to_go' as="textarea" rows="3" ref={howToGo} defaultValue={location.state.post.how_to_go} />
            {errors?<span className='help-block text-danger'>{errors.howToGo}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='how_to_stay'>How to stay</Form.Label>
            <Form.Control id='how_to_stay' as="textarea" rows="3" ref={howToStay} defaultValue={location.state.post.how_to_stay} />
            {errors?<span className='help-block text-danger'>{errors.howToStay}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='where_to_eat'>Where to eat</Form.Label>
            <Form.Control id='where_to_eat' as="textarea" rows="3" ref={whereToEat} defaultValue={location.state.post.where_to_eat} />
            {errors?<span className='help-block text-danger'>{errors.whereToEat}</span>:""}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='some_places'>Some Places</Form.Label>
            <Form.Control id='some_places' as="textarea" rows="3" ref={somePlaces} defaultValue={location.state.post.some_places} />
            {errors?<span className='help-block text-danger'>{errors.somePlaces}</span>:""}
          </Form.Group>
          <Button variant='dark' className='w-100' onClick={handleSubmit}>Update</Button>
        </Form>
      </Container>
    </>
  )
}
