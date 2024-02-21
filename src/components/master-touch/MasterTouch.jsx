/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { GiClassicalKnowledge } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { PiProjectorScreenLight } from "react-icons/pi";
import masterTouchImg from "../../assets/Why-Choose-Us-image.jpg";
import ProgressBarDisplay from "../progress-bar-display/ProgressBarDisplay";
import styles from "./mastertouch.module.css";

function MasterTouch() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true
  });  
 
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.leftBox}>
        <p className={styles.overTitle}>WHY CHOOSE US</p>
        {/* Animation 1 */}
        {
          inView &&
          <h1 className={styles.mainTitle}>The One with The Master Touch</h1>
        }
        <p className={styles.paragraph}>
          Tincidunt felis phasellus blandit vestibulum nulla, id bibendum nunc
          ullamcorper nec. Aliquam sodales dapibus orci, sed interdum augue
          dapibus non. Vestibulum porttitor rutrum dolor, eget porttitor risus
          tincidunt vitae.
        </p>

        <div className={styles.lowerLeft}>
          <div className={styles.cell}>
            <div className={styles.cellTitle}>
              <GiClassicalKnowledge className={styles.icon} />
              <h2>Expertise</h2>
            </div>
            <p>Duis at vehicula nibh vivan egestas vel ipsum con.</p>
          </div>

          <div className={styles.cell}>
            <div className={styles.cellTitle}>
              <IoDiamondOutline className={styles.icon} />
              <h2>Innovation</h2>
            </div>
            <p>Duis at vehicula nibh vivan egestas vel ipsum con.</p>
          </div>

          <div className={styles.cell}>
            <div className={styles.cellTitle}>
              <PiProjectorScreenLight className={styles.icon} />
              <h2>Results-Driven</h2>
            </div>
            <p>Duis at vehicula nibh vivan egestas vel ipsum con.</p>
          </div>
        </div>
      </div>

      {/* Animation 2 */}
      <div className={styles.rightBox}>
        <img src={masterTouchImg} alt="" />
      </div>     

      {/* Animation 3 */}
      {inView && (
        <div className={styles.progressBarContainer}>
          <ProgressBarDisplay />
        </div>
      )}
    </div>
  );
}

export default MasterTouch;