const BlogList = ({ blogs ,title }) => {


    return (

        <div className="class-list">
            <h2>{ title }</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written bye {blog.author}</p>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;