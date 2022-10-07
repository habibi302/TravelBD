import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const AdminPost = ({ posts, loading, setLoading}) => {

    const navigate = useNavigate();
    
  if (loading) {
    return <h2>Loading...</h2>;
  }

  function handleDelete(id){
    const postID = {
      _id: id
    }
    Axios.post("/delete",postID).then((response)=>{
        setLoading(true);
    })
  }

  return (
    <>
      {posts.map((post,key)=>{
        return(
            <tr>
                    <td>{key+1}</td>
                    <td>{post.title}</td>
                    <td>{post.division}</td>
                    <td>{post.district}</td>
                    <td className='d-flex justify-content-around'>
                    <Button variant='success' className='me-2' onClick={(e)=>{navigate("/update",{state:{post:post}})}}>Update</Button>
                    <Button variant='danger' onClick={()=>{handleDelete(post._id)}}>Delete</Button>
                    </td>
                  </tr>
        )
      })}
    </>
  );
};

export default AdminPost;