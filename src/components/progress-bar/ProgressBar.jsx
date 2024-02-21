/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./progressbar.module.css";

export default function ProgressBar({
  pleaseGo,
  increment,
  barcolor,
  maxLimit,
  label,
}) {
  const [percent, setPercent] = useState(0);
 
  useEffect(() => {
    let intervalId;
    if (pleaseGo) {
      intervalId = setInterval(() => {
        if (percent < (maxLimit * 0.95)) {
          setPercent((prevPercent) => prevPercent + increment);
        }
        if (percent > (maxLimit * 0.95) && percent < maxLimit) {
            setPercent((prevPercent) => prevPercent + increment/increment/4);
          }
      }, 100);     

      return () => clearInterval(intervalId);
    }

    if (!pleaseGo) {
      setPercent(0);
    }
  }, [increment, maxLimit, percent, pleaseGo]);

  const getColor = () => {
    return barcolor;
  };

  return (
    <>
      <div className={styles.progressBarLabel}>
        <p className={styles.labelText}>{label}</p>
        <p className={styles.labelPct}>{percent.toFixed(0)}%</p>
      </div>

      <div className={styles.progressbar}>
        <div
          className={styles.progressbarfill}
          style={{ width: `${percent}%`, backgroundColor: getColor() }}
        ></div>
      </div>
    </>
  );
}
