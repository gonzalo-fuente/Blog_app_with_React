import { useNavigate, useParams } from "react-router-dom";
import getData from "../getData";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = getData('http://localhost:5000/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:5000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
     navigate('/');
    }) 
  }

  return (
    <div className="blog-details">
      { error && <h2 className="error">{ error }</h2> }
      { isPending && <h2 className="loading">Loading...</h2> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button className="btn" onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;