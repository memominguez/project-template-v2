/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import styles from "./thefaces.module.css";

function FaceCard({ animationType, teamImage, name, title }) {
  
   // This gadget thanks to ChatGPT
  const dynamicClassName = styles[animationType];

  return (
    <div className={styles.cell}>
      <div className={dynamicClassName}>
        <div className={styles.cellTop}>
          <img src={teamImage} alt="" />
        </div>
        <div className={styles.cellBottom}>
          <h2>{name}</h2>
          <p>{title}</p>
          <div className={styles.social}>
            <FaFacebookSquare className={styles.icon} />
            <FaSquare className={styles.iconBack} />
            <FaTwitterSquare className={styles.icon} />
            <FaSquare className={styles.iconBack} />
            <FaInstagramSquare className={styles.icon} />
            <FaSquare className={styles.iconBack} />
            <FaLinkedin className={styles.icon} />
            <FaSquare className={styles.iconBack} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaceCard;
