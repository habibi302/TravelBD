import React,{useState} from 'react';
import Card from '../../core-ui/card/Card'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post,key)=>{
        return(
            <div className='col-sm-12 col-md-4 col-lg-3'>
            <Card title={post.title} content={post.about} imgurl={post.imgurl} allData={post}/>
            </div>
        )
      })}
    </>
  );
};

export default Posts;