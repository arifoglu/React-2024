import { useState ,useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {

    const[blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'aa', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'bb', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'cc', id: 3 }
      ]);
 
      const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id );
        setBlogs(newBlogs);
      }
      
// useEffect   
    useEffect(() => {
        console.log('use effect ran');
    },[]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title= "All blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;