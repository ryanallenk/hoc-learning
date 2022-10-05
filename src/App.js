import './App.css';
import BlogsSection from './components/BlogsSection';
import {getArchivedBlogs, getPopularBlogs, getRecentBlogs} from './api';

function App() {
  const recentBlogs = getRecentBlogs();
  const popularBlogs = getPopularBlogs();
  const archivedBlogs = getArchivedBlogs();

  return (
    <div className="App">
      <BlogsSection blogs={recentBlogs} title="Recent Blogs"/>
      <BlogsSection blogs={popularBlogs} title="Popular Blogs"/>
      <BlogsSection blogs={archivedBlogs} title="Archived Blogs"/>
    </div>
  );
}

export default App;
