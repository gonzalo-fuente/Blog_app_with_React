import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      { blogs.length !== 0 ? (
        blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
          </div>
        ))
      ) : (
        <h2>No Blogs To Show...</h2>
      )
      }
    </div>
  );
}
 
export default BlogList;