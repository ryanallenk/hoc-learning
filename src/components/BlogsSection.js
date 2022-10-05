const BlogsSection = ({ blogs = [], title, children }) => {
  return (
    <div className="blogs-section">
      <div className="blogs-section__header-container">
        <h2 className="blogs-section__header-container__header">
          {title}
        </h2>
        {children}
      </div>
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