import styles from "./RightBar.module.css";
// import Contact from "../Contact/Contact";
import ChatBot from "../ChatBot/ChatBot";
import LogoSwitch from "../LogoSwitch/LogoSwitch";

function RightBar() {
  return (
    <div className={styles.container}>
      <ChatBot />
      <LogoSwitch />
    </div>
  );
}

export
 default RightBar;