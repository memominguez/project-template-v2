/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { teamListLong } from "./FacesList";
import { teamListShort } from "./FacesList";
import FaceCard from "./FaceCard";
import { FaSquare } from "react-icons/fa6";
import styles from "./thefaces.module.css";

function TheFacesMap({ longList }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true,
  });

  let selectedList;

  if (longList == true) {
    selectedList = teamListLong;
  } else {
    selectedList = teamListShort;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overTitle}>
        <p>OUR TEAM</p>
      </div>
      <div className={styles.title}>
        <h1>The Team Faces</h1>
        <div className={styles.titleRight}>
          <FaSquare className={styles.titleIcon} />
          <p>VIEW ALL TEAM</p>
        </div>
      </div>

      <div ref={ref} className={styles.gridContainer}>
        {selectedList.map((face) => (
          <div key={face.id}>
            {inView && (
              <FaceCard
                animationType={face.animationType}
                teamImage={face.teamImage}
                name={face.name}
                title={face.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheFacesMap;
