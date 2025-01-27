import React, { useState, ChangeEvent } from 'react';

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
        <div style={{ border: '1px solid #000', padding: '10px', width: '600px' }}>
            <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label htmlFor="fileInput" style={{ display: 'block', cursor: 'pointer' }}>
                {fileName || "Click to select a text file"}
            </label>
        </div>
    );
};

export default FileInputBox;
