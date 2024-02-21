/* eslint-disable react/prop-types */

import { LuQuote } from "react-icons/lu";
import styles from "./slide.module.css";

function Slide({ citation, image, name, title }) {  

  return (
    <>
      <div className={styles.left}>
        <LuQuote className={styles.quoteIcon} />
      </div>
      <div className={styles.right}>
        <p className={styles.citation}>&#34; {citation} &#34;</p>
        <div className={styles.person}>
          <img src={image} alt="" />
          <div className={styles.personData}>
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
