import React  from 'react'
import BlogItem from './BlogItem';

const BlogList = ({posts, deletePost, updatePost}) => {
  

  return (
    

      <div className="mt-8">
        {posts.map((item) => (
          <BlogItem item={{ ...item }} key={item.id} deletePost={deletePost} 
          updatePost={updatePost}/>
        ))}
      </div>
    
  );
}

export default BlogList;
