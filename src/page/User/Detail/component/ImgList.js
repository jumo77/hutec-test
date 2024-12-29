import React from 'react';
import styles from '../Detail.module.css';

export const ImgList = ({ label, value }) => {
    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label}>{label}</label>
            <div className={styles.imgContainer}>
                {value?.map(it=><img key={label+it} src={it} alt={null}/>)}
            </div>
        </div>
    );
};