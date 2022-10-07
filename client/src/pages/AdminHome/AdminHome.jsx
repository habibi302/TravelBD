import React, {useState, useEffect} from 'react'
import Pagination from '../../core-ui/pagination/Pagination';
import { Link } from 'react-router-dom';
import Axios from "axios"
import { Container, Table, Button } from 'react-bootstrap';
import AdminPost from '../../core-ui/AdminPost/AdminPost';
import AdminHeader from '../../core-ui/adminHeader/AdminHeader';

export default function AdminDivision() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);



   useEffect(()=>{
 try {
   async function fatchData(){

       const response =  await Axios.get("http://localhost:3001/getallplace");
       setLoading(true);
       setPosts(response.data);
       setLoading(false);
}
fatchData();
 } catch (error) {
   console.log(error);
 }
 
   },[loading]);




  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <AdminHeader/>
    <div className='container mt-5' style={{minHeight:"80vh"}}>
        <h1 className='text-center display-5 fw-bold'>All Post</h1>
      <Container>
      <Table striped bordered hover className='mt-5'>
      <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Division</th>
              <th>District</th>
              <th style={{width:"5vw"}}>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
      <AdminPost posts={currentPosts} loading={loading} setLoading={setLoading}/>
      {/* {
        currentPosts.map((post, key)=>{
          return(
            <Card title={post.title} content={post.content} imgurl={post.url}/>
          )
        })
      } */}
      </tbody>
      <Button variant='success'><Link to="/insert" className='text-white' style={{textDecoration:"none"}}>Add New Post</Link></Button>
      </Table>
      </Container>
      </div>
      <Pagination
        postsPerPage = {postsPerPage}
        totalPosts = {posts.length}
        paginate = {paginate}
      />
    </>
  )
}
