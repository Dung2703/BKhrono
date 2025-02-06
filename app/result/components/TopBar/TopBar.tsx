"use client";
import styles from './TopBar.module.css';
import { useState } from 'react';
import HiddenBar from '../HiddenBar/HiddenBar'
import Generate from "../GenerateBar/Generate"

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.hiddenBar}>
                <HiddenBar isVisible={isVisible} setIsVisible={setIsVisible} />
            </div>
            <div className={styles.generateBar}>
                <Generate isVisible={isVisible} />
                {/* <button className={styles.toggleButton} onClick={() => setIsVisible(!isVisible)}>
                </button> */}
            </div>
        </div>
    );
};

export default TopBar;