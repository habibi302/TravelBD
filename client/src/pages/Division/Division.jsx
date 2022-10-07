import React, {useState, useEffect} from 'react'
import Header from '../../core-ui/header/Header'
import Footer from '../../core-ui/footer/Footer'
import Post from '../../core-ui/post/Post'
import Pagination from '../../core-ui/pagination/Pagination';

import { useParams } from 'react-router-dom';
import Axios from "axios"

export default function Division() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);


   const id = useParams();


   useEffect(()=>{
 try {
   async function fatchData(){

       const response =  await Axios.get("/allplacesinadivision/"+id.divisionname);
       setLoading(true);
       setPosts(response.data);
       setLoading(false);
}
fatchData();
 } catch (error) {
   console.log(error);
 }
 
   },[id]);




  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <>
    <Header/>
    <div className='container mt-5' style={{minHeight:"80vh"}}>
        <h1 className='text-center display-5 fw-bold'>{id.divisionname.toUpperCase()}</h1>
      <div className='row d-flex justify-content-center w-100 m-0 mb-5 mt-5'>
      <Post posts={currentPosts} loading={loading}/>
      {/* {
        currentPosts.map((post, key)=>{
          return(
            <Card title={post.title} content={post.content} imgurl={post.url}/>
          )
        })
      } */}
      </div>
      </div>
      <Pagination
        postsPerPage = {postsPerPage}
        totalPosts = {posts.length}
        paginate = {paginate}
      />
      <Footer/>
    </>
  )
}
