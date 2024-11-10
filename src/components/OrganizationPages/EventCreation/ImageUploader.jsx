import React, { useState } from 'react';
import styles from './ImageUploader.module.css';

const ImageUploader = ({ label }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.imageUploaderContainer}>
      <label htmlFor="eventImage" className={styles.imageLabel}>{label}</label>
      <div className={styles.dropzone}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected preview" className={styles.uploadIcon} />
        ) : (
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5f44e7091aa36e0a6ed30eb5c3aeef969354d303d30cedf1a5e1cb607f5596?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.uploadIcon} />
        )}
        <p className={styles.uploadText}>Click to browse or drop here</p>
        <input
          type="file"
          id="eventImage"
          className={styles.fileInput}
          accept="image/*"
          aria-label="Upload event image"
          onChange={handleImageChange} // Call handler when file is selected
        />
      </div>
    </div>
  );
};

export default ImageUploader;
