/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaSquare } from "react-icons/fa6";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import styles from "./someworks.module.css";

function WorkCard({animationType, workImage, footNote, footTitle }) { 

   // This gadget thanks to ChatGPT
   const dynamicClassName = styles[animationType]
    
  return (
    <div className={styles.cell}>
        <div className={dynamicClassName}>
      
          <div className={styles.imgContainer}>
            <img src={workImage} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>{footNote}</p>
          <h2>{footTitle}</h2>
        </div>
      </div>
  )
}

export default WorkCard
