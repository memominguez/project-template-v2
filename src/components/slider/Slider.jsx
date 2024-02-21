import { useState, useEffect } from "react";
import { Array } from "./Array";
import Slide from "./Slide";
import styles from "./slide.module.css";

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current === Array.length - 1 ? 0 : current + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [current]);

  return (
    <div className={styles.outercontainer}>
      <>
        {Array.map((person) => (
          <div
            key={person.id}
            className={
              person.id - 1 === current
                ? `${styles.container} ${styles.active}`
                : `${styles.container}`
            }
          >
            {person.id - 1 === current && (
              <Slide
                citation={person.citation}
                image={person.image}
                name={person.name}
                title={person.title}
              />
            )}
          </div>
        ))}

        <div className={styles.spaceholder}></div>
      </>
    </div>
  );
}

export default Slider;
