import { a } from 'framer-motion/client';
import styles from './LogoSwitch.module.css';
import ThemeToggle from './Theme_Toggle';
import Image from 'next/image';

const LogoSwitch = () => {
  return (
    <div className={styles.container}>
      {/* set height auto */}
      <Image src="/logo.webp" height={100} width={100} alt="logo" style={{width: '100%', height: 'auto'}} priority/>
      <ThemeToggle/>
    </div>
  );
};

export default LogoSwitch;