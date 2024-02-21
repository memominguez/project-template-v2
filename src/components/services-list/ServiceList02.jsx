/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { FaSquareFull } from "react-icons/fa";
//import service2 from "../../assets/Service-2.png";
//import service3 from "../../assets/Service-3.png";
//import service4 from "../../assets/Service-4.png";
import service5 from "../../assets/Service-5.png";
import service6 from "../../assets/Service-6.png";
import service7 from "../../assets/Service-7.png";
import styles from "./servicesList.module.css";

export default function ServiceList02() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.gridContainer}>
        
        {/* Cell 4 */}
        {inView && (
          <div className={styles.cell}>
            <div className={styles.contentType1}>
              <img src={service5} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>PPC & Online Advertising</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Keyword Research</li>
                <li>Ad Campaign Creation</li>
                <li>Ad Copywriting</li>
                <li>Ad Extensions</li>
                <li>Bid Management</li>
              </ul>
            </div>
          </div>
        )}

        {/* Cell 5 */}
        {inView && (
          <div className={styles.cell}>
            <div className={styles.contentType2}>
              <img src={service6} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>Analytics & Data Analysis</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Data Collection</li>
                <li>Data Processing</li>
                <li>Data Visualization</li>
                <li>Descriptive Analytics</li>
                <li>Diagnostic Analytics</li>
              </ul>
            </div>
          </div>
        )}

        {/* Cell 6 */}
        {inView && (
          <div className={styles.cell}>
            <div className={styles.contentType3}>
              <img src={service7} alt="" className={styles.serviceImg} />
              <div className={styles.title}>
                <FaSquareFull className={styles.square} />
                <h2>Brand Strategy & Production</h2>
              </div>
              <div className={styles.comment}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper.
                </p>
              </div>

              <ul>
                <li>Brand Identity</li>
                <li>Brand Values</li>
                <li>Brand Purpose</li>
                <li>Target Audience</li>
                <li>Positioning</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
