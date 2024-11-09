import React from 'react';
import styles from './InfoItem.module.css';
import { placeholder } from '@babel/types';



const InfoItem = ({ label, value }) => {
  return (
    <div className={styles.infoItem}>
        
    <form>
      <label className="info" for="info">{label}: </label>
      <input type="text" id="info" className="info" placeholder={value}/>
    </form>
    </div>
  );
};

export default InfoItem;