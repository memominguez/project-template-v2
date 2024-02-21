/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { SingleSourceOfTruth } from "../SingleSourceOfTruth";
import Stopwatch from "../stopwatach/Stopwatch";
import { periodCalc } from "../stopwatach/periodCalc";
import GetPersons from "./GetPersons";
import heroesImg from "../../assets/Hero-image-2.jpg";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import styles from "./heroesrev1.module.css";

function HeroesRev1() {
  // THE LOGIC BELOW FOR THE COMPONENT'S RIGHT COLUMN

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
    triggerOnce: true,
  });
 

  return (
    <div className={styles.container}>
      <div id={styles.content1} className={styles.leftColumn}>
        <div className={styles.leftContent}>
          <h1 className={styles.mainTitle}>Heroes of Pixels & Code</h1>
          <p className={styles.paragraph}>
            Donec interdum ipsum lorem, at semper nunc em malesuada eget. Sed
            feugiat tellus fringilla lequani condimentum, venenatis elementum
            est aliqua.
          </p>

          {/* Contact Information */}
          <div className={styles.contacting}>
            <div className={styles.iconContainer}>
              <FaPhone className={styles.icons} />
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+123-234-1234</p>
            </div>
            <div className={styles.iconContainer}>
              <FaRegEnvelope className={styles.icons} />
            </div>
            <div>
              <h4>Email Us</h4>
              <p>hello@awesomesite.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* *********** Center Column *********** */}
      <div id={styles.content2} className={styles.centerColumn}>
        <img src={heroesImg} alt="Heroes Image" className={styles.heroesImg} />
      </div>

      <div id={styles.content3}>
        <div className={styles.personsContainer}>
          <div className={styles.gridLeft}>
            <GetPersons />
          </div>
          <div className={styles.gridRight}>
            <h3>250 Business People</h3>
            <p>Already Registered</p>
          </div>
        </div>
      </div>

      {/* *********************** Right Column ******************** */}
      <div ref={ref} id={styles.content4} className={styles.rightColumn}>
        <div className={styles.infoBlock}>
          <h1>
            {inView && (
              <Stopwatch
                maxCount={countYearsExperience}
                period={periodYearsExperience}
              />
            )}
            <sup> th</sup>
          </h1>
          <p>Years Experience</p>
        </div>

        <div className={styles.infoBlock}>
          <h1>
            {inView && (
              <Stopwatch
                maxCount={countProjectsCompleted}
                period={periodProjectsCompleted}
              />
            )}
            <sup> +</sup>
          </h1>
          <p>Projects Completed</p>
        </div>

        <div className={styles.infoBlock}>
          <h1>
            {inView && (
              <Stopwatch
                maxCount={countHappyClients}
                period={periodHappyClients}
              />
            )}
            <sup> +</sup>
          </h1>
          <p>Happy Clients</p>
        </div>

        <div className={styles.infoBlock}>
          <h1>
            {inView && (
              <Stopwatch maxCount={countWinAwards} period={periodWinAwards} />
            )}
            <sup> +</sup>
          </h1>
          <p>Win Awards</p>
        </div>
      </div>
    </div>
  );
}

export default HeroesRev1;
