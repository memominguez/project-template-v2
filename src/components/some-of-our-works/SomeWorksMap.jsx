/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { WorkListLong, WorkListShort } from "./WorksList";
import WorkCard from "./WorkCard";
import { FaSquare } from "react-icons/fa6";
import styles from "./someworks.module.css";

function SomeWorksMap({ longList }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true
  });

  let selectedList;

  if (longList == true) {
    selectedList = WorkListLong;
  } else {
    selectedList = WorkListShort;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overTitle}>
          <p>OUR PROJECT</p>
        </div>
        <div className={styles.title}>
          <h1>Some of Our Works</h1>
          <div className={styles.titleRight}>
            <FaSquare className={styles.titleIcon} />
            <p>VIEW ALL PROJECTS</p>
          </div>
        </div>

        <div ref={ref} className={styles.gridContainer}>
          {selectedList.map((work) => (
            <div key={work.id}>
              {inView && (
                <WorkCard
                  animationType={work.animationType}
                  workImage={work.workImage}
                  footNote={work.footNote}
                  footTitle={work.footTitle}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SomeWorksMap;
