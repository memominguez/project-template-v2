/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styles from "./weprovide.module.css";
import weProvideImg from "../../assets/About-Us-image-3.jpg";
import { FaSquareFull } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";

export default function WeProvide() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true
  });      

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p>ABOUT US</p>
          {/* animation1 */}
          {inView && (
            <h1> We Provide Creative Solutions for Your Creative Ideas</h1>
          )}
        </div>
        <div className={styles.headerRight}>
          <p>Nothing here</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          {/* Animation 2 */}
          {inView && <img src={weProvideImg} alt="" />}
        </div>

        <div className={styles.contentRight}>
          <p>
            Deleniti praesentium facere reiciendis quia corporis ullam iste
            illum cupiditate obcaecati placeat ipsa, consequuntur voluptatum
            neque maiores sapiente necessitatibus velit, itaque odit earum,
            libero dolorum tempora asperiores.
          </p>
          <p>
            Sapiente illum ipsa qui amet perspiciatis adipisci sint est omnis,
            nam, quos rerum! Tempore vero sit, deleniti sint neque ullam maxime
            laudantium culpa corrupti at aspernatur, odit error sapiente.
          </p>

          <div className={styles.foot}>
            <Link to="/about">
              <FaSquareFull className={styles.square} /> {/* transition */}
              <p>MORE ABOUT US</p>
            </Link>

            {/* animation3 */}
            {inView && (
              <div className={styles.banner1}>
                <p>
                  &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit, cumque! Sequi ex quos numquam quisquam?&#34;
                </p>
                <p>
                  <FaSignature style={{ fontSize: "2rem" }} />
                </p>
              </div>
            )}
          </div>

          {/* animation3 */}
          {inView && (
            <div className={styles.banner2}>
              <p>
                &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugit, cumque! Sequi ex quos numquam quisquam?&#34;
              </p>
              <p>
                <FaSignature style={{ fontSize: "2rem" }} />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
