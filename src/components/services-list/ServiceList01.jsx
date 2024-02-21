/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import styles from "./servicesList.module.css";
import { FaSquareFull } from "react-icons/fa";
import service2 from "../../assets/Service-2.png";
import service3 from "../../assets/Service-3.png";
import service4 from "../../assets/Service-4.png";

export default function ServiceList01() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.container}>
        <div className={styles.spacer}></div>
      {inView && (
        <div className={styles.gridContainer}>

          {/* Cell 1 */}
          <div className={styles.cell}>
            <div className={styles.contentType1}>
              <img src={service2} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>Website Design & Development</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Layout & Structure</li>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
              </ul>
            </div>
          </div>

          {/* Cell 2 */}
          <div className={styles.cell}>
            <div className={styles.contentType2}>
              <img src={service3} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>Search Engine Optimization</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Keyword Research</li>
                <li>Content Optimization</li>
                <li>Technical SEO</li>
                <li>Technical Website Audits</li>
                <li>SEO Analytics & Monitoring</li>
              </ul>
            </div>
          </div>

          {/* Cell 3 */}
          <div className={styles.cell}>
            <div className={styles.contentType3}>
              <img src={service4} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>Content & Social Media Marketing</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Content Strategy</li>
                <li>Audience Research</li>
                <li>Content Creation</li>
                <li>Platform Selection</li>
                <li>Profile Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
