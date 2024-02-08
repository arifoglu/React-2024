import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {

const { error , data :blogs ,isPending } = useFetch ('http://localhost:8000/blogs')   



    return ( 
        <div className="home">
            {error && <div> { error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title= "All blogs" />}
        </div>
     );
}
 
export default Home;