import BlogList from "./BlogList";
import getData from "../getData";

const Home = () => {
  const { error, isPending, data: blogs } = getData('http://localhost:5000/blogs')

  return (
    <div className="home">
      { error && <h2 className="error">{ error }</h2> }
      { isPending && <h2 className="loading">Loading...</h2> }
      { blogs && <BlogList blogs={ blogs } /> }
    </div>
  );
}
 
export default Home;
