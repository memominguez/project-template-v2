/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { SingleSourceOfTruth } from "../SingleSourceOfTruth";
import styles from "./progressbardisplay.module.css";

function ProgressBarDisplay() {
  const [runBar1, setRunBar1] = useState(false);
  const [runBar2, setRunBar2] = useState(false);
  const [runBar3, setRunBar3] = useState(false);

  // progress bar duration, 3.6 seconds (3600 ms)
  let barTimeout = 3600;

  // Pre-calculate progress bar increment
  let deltaProgressbar = (0.1 / barTimeout) * 1000 * 100;

  // Progress bar color
  let color = "var(--white)"; // progress bar color

  // Progress bar limit values are the skill % self appraisal
  // Values shall be positive numbers, maximum = 100
  // These values are imported from the Single Source of Truth
  const DigitalMarketingSkill = SingleSourceOfTruth.DigitalMarketingSkill;
  const WebDevelopmentSkill = SingleSourceOfTruth.WebDevelopmentSkill;
  const UiUxDesignSkill = SingleSourceOfTruth.UiUxDesignSkill;

  useEffect(() => {
    let run1 = setTimeout(() => {
      setRunBar1(true);
    }, 750);

    return () => clearTimeout(run1);
  }, []);

  useEffect(() => {
    let run2 = setTimeout(() => {
      setRunBar2(true);
    }, 1500);

    return () => clearTimeout(run2);
  }, []);

  useEffect(() => {
    let run3 = setTimeout(() => {
      setRunBar3(true);
    }, 2250);

    return () => clearTimeout(run3);
  }, []);
  

  return (
    <div className={styles.container}>
      <ProgressBar
        label="Digital Marketing"
        pleaseGo={runBar1}
        increment={deltaProgressbar}
        barcolor={color}
        maxLimit={DigitalMarketingSkill}
      />
      <ProgressBar
        label="Web Development"
        pleaseGo={runBar2}
        increment={deltaProgressbar}
        barcolor={color}
        maxLimit={WebDevelopmentSkill}
      />

      <ProgressBar
        label="UI/UX Design"
        pleaseGo={runBar3}
        increment={deltaProgressbar}
        barcolor={color}
        maxLimit={UiUxDesignSkill}
      />
    </div>
  );
}

export default ProgressBarDisplay;
