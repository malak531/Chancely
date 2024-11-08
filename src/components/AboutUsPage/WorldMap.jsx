import React from 'react';
import styles from './WorldMap.module.css';

function WorldMap() {
  return (
    <section className={styles.worldMapSection}>
      <div className={styles.mapContainer}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0466a8b279c6e96546e9fb7ff3f977f9f1f34993d3ab3b58fb79fee7571fa53?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
          alt="World map showing global presence" 
          className={styles.mapImage} 
        />
      </div>
    </section>
  );
}

export default WorldMap;