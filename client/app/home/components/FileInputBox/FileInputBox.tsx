"use client";
import { useState, ChangeEvent } from 'react';
import styles from './FileInputBox.module.css';

const FileInputBox: React.FC = () => {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === "text/plain") {
            setFileName(file.name);
        } else {
            setFileName('');
            alert("Please select a text file.");
        }
    };

    return (
        <label htmlFor="file" className={styles.container}>
            <div className={styles.button}>+</div>
            <div className={styles.labelContainer}>
                <div className={styles.label}>
                    {fileName || "Paste .txt file"}
                    <input 
                        className={styles.input} 
                        type="file"
                        accept=".txt"
                        onChange={handleFileChange}
                        id="file"
                    />
                </div>
            </div>
        </label>
    );
};

export default FileInputBox;
