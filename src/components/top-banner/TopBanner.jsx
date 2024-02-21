/* eslint-disable react/prop-types */
import styles from "./topbanner.module.css";
import meeting from "../../assets/meeting.jpg";

function TopBanner({title, note}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          <p>{note}</p>
        </div>
      </div>
      <div className={styles.rightBox}>
        <img src={meeting} alt="" />
      </div>
    </div>
  );
}

export default TopBanner;
