import React from "react";
import styles from "./HomeButton.module.css";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href="/">
      <button className={styles.homeButton}>Home</button>
    </Link>
  );
}

export default HomeButton;