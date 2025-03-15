import styles from './LogoSwitch.module.css';
import ThemeToggle from './Theme_Toggle';

const LogoSwitch = () => {
  return (
    <div className={styles.container}>
      <img src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png" height="220hv" width="160%"/>
      <ThemeToggle/>
    </div>
  );
};

export default LogoSwitch;