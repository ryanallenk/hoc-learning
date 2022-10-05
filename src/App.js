import './App.css';
import BlogsSection from './components/BlogsSection';
import {getArchivedBlogs, getPopularBlogs, getRecentBlogs} from './api';
import withSearch from './hocs/withSearch';

function App() {
  const recentBlogs = getRecentBlogs();
  const popularBlogs = getPopularBlogs();
  const archivedBlogs = getArchivedBlogs();

  const RecentBlogsSectionWithSearch = withSearch(BlogsSection, 'blogs', recentBlogs, ['title', 'body']);
  
  const PopularBlogsSectionWithSearch = withSearch(BlogsSection, 'blogs', popularBlogs, ['title', 'body']);

  const ArchivedBlogsSectionWithSearch = withSearch(BlogsSection, 'blogs', archivedBlogs, ['title', 'body']);

  return (
    <div className="App">
      <RecentBlogsSectionWithSearch blogs={recentBlogs} title="Recent Blogs"/>
      <PopularBlogsSectionWithSearch blogs={popularBlogs} title="Popular Blogs"/>
      <ArchivedBlogsSectionWithSearch blogs={archivedBlogs} title="Archived Blogs"/>
    </div>
  );
}

export default App;
