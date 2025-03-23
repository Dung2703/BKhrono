import styles from './LogoSwitch.module.css';
import ThemeToggle from './Theme_Toggle';
import Image from 'next/image';

const LogoSwitch = () => {
  return (
    <div className={styles.container}>
      <Image src="/logo" width={150} alt="logo"/>
      <ThemeToggle/>
    </div>
  );
};

export default LogoSwitch;