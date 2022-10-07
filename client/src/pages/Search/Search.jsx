import React, {useState, useEffect} from 'react'
import Header from '../../core-ui/header/Header'
import Footer from '../../core-ui/footer/Footer'
import Post from '../../core-ui/post/Post'
import Axios from "axios"
import { useLocation } from 'react-router-dom'

import Pagination from '../../core-ui/pagination/Pagination';

export default function Search() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

   
     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = location.state.data.slice(indexOfFirstPost, indexOfLastPost);
   
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
  return (
    <div>
      <Header/>
      <div className='container' style={{minHeight:"80vh"}}>
      <div className='row d-flex justify-content-center m-0 mb-5 mt-5'>
      {
        location.state.data.length !== 0 ? <Post posts={currentPosts} loading={loading}/> : <h1 className='text-danger text-center'>Not Found!</h1>
      }
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
        totalPosts = {location.state.data.length}
        paginate = {paginate}
      />
      <Footer/>
    </div>
  )
}
