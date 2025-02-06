import React, { Dispatch, SetStateAction } from "react";
import styles from "./HiddenBar.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface HiddenBarProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const HiddenBar: React.FC<HiddenBarProps> = ({ isVisible, setIsVisible }) => {
  const [parent] = useAutoAnimate();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
      <div ref={parent} 
           className={`${styles.container} ${isVisible ? styles.show : styles.show}`}
      >
        <button className={styles.fileButton}>.pdf file</button>
        <button className={styles.fileButton}>.txt file</button>
        <button className={styles.fileButton}>.xlsx file</button>
      </div>
  );
};

export default HiddenBar;


{/* <div className={styles.hiddenBar}>
        <button className={styles.toggleButton} onClick={handleClick}>
          {isVisible ? "<" : ">"}
        </button>
      </div> */}