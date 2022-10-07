import React, {useState, useEffect} from 'react'
import Header from '../../core-ui/header/Header'
import Footer from '../../core-ui/footer/Footer'
import Post from '../../core-ui/post/Post'
import Axios from "axios"

import data from "../../constants/posts";
import Pagination from '../../core-ui/pagination/Pagination';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(()=>{
    try {
      async function fatchData(){
   
          const response =  await Axios.get("http://localhost:3001/getallplace/");
          setLoading(true);
          setPosts(response.data);
          setLoading(false);
   }
   fatchData();
    } catch (error) {
      console.log(error);
    }
    
      },[]);
   
   
   
   
     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
  return (
    <div>
      <Header/>
      <div className='container' style={{minHeight:"80vh"}}>
      <div className='row d-flex justify-content-center m-0 mb-5 mt-5'>
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
    </div>
  )
}
