/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { blogListShort, blogListLong } from "./BlogsData";
import BlogCard from "./BlogCard";
import { FaSquare } from "react-icons/fa6";
import styles from "./latestblogs.module.css";

function BlogsMap({ longList }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    delay: 300,
    triggerOnce: true,
  });

  let selectedList;

  if (longList == true) {
    selectedList = blogListLong;
  } else {
    selectedList = blogListShort;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <div className={styles.topTitleLeft}>
          <p>OUR BLOG</p>
          <h1>Stay Ahead with Our Latest Blog Posts</h1>
        </div>
        <div className={styles.topTitleRight}>
          <p className={styles.topParagraph}>
            Morbi porta, nibh eu semper semper, orci felis volutpat orci, vel
            blandit magna massa vitae lacus. Ut erat neque, facilisis in laoreet
            id.
          </p>

          <div className={styles.linkToBlogs}>
            <FaSquare className={styles.topIcon} />
            <p>VIEW ALL BLOGS</p>
          </div>
        </div>
      </div>

      <div ref={ref} className={styles.gridContainer}>
        {selectedList.map((blog) => (
          <div key={blog.id}>
            {inView && (
              <BlogCard
                animationType={blog.animationType}
                blogImage={blog.blogImage}
                paragraph={blog.paragraph}
                date={blog.date}
                blogTitle={blog.blogTitle}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsMap;
