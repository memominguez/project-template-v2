import BlogsMap from "../components/latest-blogs/BlogsMap";
import TopBanner from "../components/top-banner/TopBanner";

function BlogPage() {
  return (
    <>
      <TopBanner title="Blog" note="Home / Blog" />
      <BlogsMap longList={true} />
    </>
  );
}

export default BlogPage;
