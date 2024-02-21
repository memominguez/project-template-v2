/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styles from "./latestblogs.module.css";

function BlogCard({ date, blogTitle, paragraph, blogImage, animationType }) {
    
  // This gadget thanks to ChatGPT
  const dynamicClassName = styles[animationType];

  return (
    <>
      <div className={styles.box}>
        <div className={dynamicClassName}>
          <div className={styles.imageContainer}>
            <img src={blogImage} alt="" className={styles.blogImage} />
          </div>
          <div className={styles.blogSummary}>
            <div className={styles.overTitle}>
              <div className={styles.overTitleLeft}>
                <FaRegCalendarAlt className={styles.blogIcon} />
                <p>{date}</p>
              </div>
              <div className={styles.overTitleRight}>
                <FaBlog className={styles.blogIcon} />
                <p>Blog</p>
              </div>
            </div>
            <h2>{blogTitle}</h2>
            <p className={styles.blogText}>{paragraph}</p>
            <div className={styles.footr}>
              <h4>READ MORE</h4>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
