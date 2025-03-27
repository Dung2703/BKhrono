import styles from "./RightBar.module.css";
import NavButton from "../NavButton/NavButton";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavButton src="/bot.webp" alt="Chatbot" href="/ask" />
        <NavButton src="/logo.webp" alt="MyBK" href="https://mybk.hcmut.edu.vn/" target="_blank" />
      </div>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>
    </div>
  );
}

export
 default RightBar;