"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  // To be implemented
  const pathname = usePathname();
  const isResultPage = pathname === "/result";
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        This is the contact information
      </div>
      <Link href={isResultPage ? "/" : "/result"} className={styles.button}>{isResultPage ? "Return" : "Continue"}</Link>
    </div>
  );
}

export default Footer;