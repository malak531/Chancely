//company box 
import React from "react";
import styles from "./companyBox.module.css";
import BtnSm from '../BtnSm/BtnSm';

const CompanyBox = () => {
    return (
        <div className={styles.frame}>
            <div className={styles.group}>
                {/* Add an image or logo inside here if necessary */}
            </div>
            <div className={styles.textWrapper}>Aramco</div>
            <div className={styles.div}>Saudi Arabia</div>
            <div className={styles.textWrapper2}>www.aramco.com</div>
            <BtnSm className={styles.btnSm1} hClassName={styles.btnSmInstance} text="Details" />
            <BtnSm className={styles.btnSm1Instance} hClassName={styles.btnSmInstance} text="Delete" />
        </div>
    );
};

export default CompanyBox;

