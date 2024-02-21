/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import styles from "./maketogether.module.css";
import ctaImg from "../../assets/CTA-image.jpg";
import { FaSquare } from "react-icons/fa6";

function MakeTogether() {
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: 300,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.upperBox}>
        <div className={styles.imgContainer}>
          <img src={ctaImg} alt="" />
        </div>
      </div>

      {/* Animated element */}
      <div className={styles.lowerBox}>
        {inView && (
          <div className={styles.messageContainer}>          
            <div className={styles.gridContainer}>
              <div className={styles.messageLeft}>
                <h1>Let&#39;s Make Something Big Together!</h1>
              </div>

              <div className={styles.messageRight}>
                <p>
                  Tincidunt felis phasellus blandit vestibulum nulla, id
                  bibendum nunc ullamcorper nec aliquam.
                </p>
                <br />
                <div className={styles.contactUs}>
                  <FaSquare className={styles.smallSquare} />
                  <p>CONTACT US NOW</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MakeTogether;
