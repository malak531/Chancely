import React from 'react';
import styles from './ImageUploader.module.css';

const ImageUploader = ({ label }) => {
  return (
    <div className={styles.imageUploaderContainer}>
      <label htmlFor="eventImage" className={styles.imageLabel}>{label}</label>
      <div className={styles.dropzone}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5f44e7091aa36e0a6ed30eb5c3aeef969354d303d30cedf1a5e1cb607f5596?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.uploadIcon} />
        <p className={styles.uploadText}>Click to browse or drop here</p>
        <input type="file" id="eventImage" className={styles.fileInput} accept="image/*" aria-label="Upload event image" />
      </div>
    </div>
  );
};

export default ImageUploader;