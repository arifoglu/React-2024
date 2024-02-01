
///////////////////////////////////Delete Function HomePage
const handleDelete = (id)=>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id );
    setBlogs(newBlogs);
  }
//  <BlogList   handleDelete={handleDelete} />

///////////////////////////////////////////////////////////////

///////////////////////////////// Delete Button bloglist page

  <button onClick={()=> handleDelete(blog.id) }>delete blog</button>