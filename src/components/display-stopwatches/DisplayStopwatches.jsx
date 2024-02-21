/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { SingleSourceOfTruth } from "../SingleSourceOfTruth";
import Stopwatch from "../stopwatach/Stopwatch";
import { periodCalc } from "../stopwatach/periodCalc";
import styles from "./displaystopwatches.module.css";

function DisplayStopwatches() {
  // The "count" values are imported from "SingleSourceOfTruth"

  // The stopwatches' speed is set depending on the "count" value.
  // For a higher "count" value, a higher stopwatch speed.

  // So the stopwatches should run during a period plus/minus 5 seconds,
  // before showing the final value

  const countYearsExperience = SingleSourceOfTruth.yearsExperience;
  const periodYearsExperience = periodCalc(countYearsExperience);

  const countProjectsCompleted = SingleSourceOfTruth.projectsCompleted;
  const periodProjectsCompleted = periodCalc(countProjectsCompleted);

  const countHappyClients = SingleSourceOfTruth.happyClients;
  const periodHappyClients = periodCalc(countHappyClients);

  const countWinAwards = SingleSourceOfTruth.winAwards;
  const periodWinAwards = periodCalc(countWinAwards);

  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: 300,
    triggerOnce: false
  });

  return (
    <div ref={ref} className={styles.container}>
      {inView && (
        <div className={styles.displayBox}>
          <h1>
            <Stopwatch
              maxCount={countYearsExperience}
              period={periodYearsExperience}
            />
            <sup> th</sup>
          </h1>
          <p>Years Experience</p>
        </div>
      )}

      {inView && (
        <div className={styles.displayBox}>
          <h1>
            <Stopwatch
              maxCount={countProjectsCompleted}
              period={periodProjectsCompleted}
            />
            <sup> +</sup>
          </h1>
          <p>Projects Completed</p>
        </div>
      )}

      {inView && (
        <div className={styles.displayBox}>
          <h1>
            <Stopwatch
              maxCount={countHappyClients}
              period={periodHappyClients}
            />
            <sup> +</sup>
          </h1>
          <p>Happy Clients &nbsp; &nbsp; &nbsp;</p>
        </div>
      )}

      {inView && (
        <div className={styles.displayBox}>
          <h1>
            <Stopwatch maxCount={countWinAwards} period={periodWinAwards} />
            <sup> +</sup>
          </h1>
          <p>Win Awards &nbsp;</p>
        </div>
      )}
    </div>
  );
}

export default DisplayStopwatches;
