import styles from "./ChatBot.module.css";
import Image from "next/image";
import Link from "next/link";

function ChatBot() {
  return (
    <Link href={"/ask"} className={styles.container}>
      <Image src="/bot.webp" width={100} height={100} alt="chatbot" priority/>
    </Link>
  );
}

export default ChatBot;