const BlogsSection = ({ blogs = [], title }) => {
  return (
    <div className="blogs-section">
      <h2>{title}</h2>
      <div className="blogs-section__blogs-container">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;