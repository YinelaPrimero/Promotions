import HeroSlider from '../components/HeroSlider';
import FeaturedArticles from '../components/FeaturedArticles';
import RecentPosts from '../components/RecentPosts';

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Recent Posts Section */}
      <RecentPosts />

      {/* Featured Articles Section */}
      <FeaturedArticles />
    </div>
  );
};

export default Home;