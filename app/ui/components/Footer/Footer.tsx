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
      BKhrono &copy; {new Date().getFullYear()} Group 7 CO2001 CC04 HK242. All rights reserved. Team leader&#39;s contact: truc.nguyenminh@hcmut.edu.vn
      </div>
      <Link href={isResultPage ? "/" : "/result"} className={styles.button}>{isResultPage ? "Home" : "Result"}</Link>
    </div>
  );
}

export default Footer;