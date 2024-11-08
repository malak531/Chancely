import React, { useState } from 'react';
import styles from './ImageUploader.module.css';

const ImageUploader = ({ label }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.imageUploaderContainer}>
      <label htmlFor="eventImage" className={styles.imageLabel}>{label}</label>
      <div className={styles.dropzone}>
        {image ? (
          <img src={image} alt="Uploaded event" className={styles.uploadedImage} />
        ) : (
          <>
            <img src="/images/upload-icon.svg" alt="" className={styles.uploadIcon} />
            <p className={styles.uploadText}>Click to browse or drop here</p>
          </>
        )}
        <input
          type="file"
          id="eventImage"
          accept="image/*"
          className={styles.fileInput}
          onChange={handleImageChange}
          aria-label="Upload event image"
        />
      </div>
    </div>
  );
};

export default ImageUploader;