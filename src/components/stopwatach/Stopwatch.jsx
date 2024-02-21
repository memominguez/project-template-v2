/* eslint-disable react/prop-types */
import {useState, useEffect, useRef} from 'react'

export default function Stopwatch({maxCount, period}) {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0)

  useEffect(() => {
    handleTime();
    return () => clearInterval(id.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      setCount((prevCount) => prevCount + 1)      
    }, period);
  }

  if (count >= maxCount) {
    clearInterval(id.current)
  }

  return (
    <>{time}</>
  )
}
