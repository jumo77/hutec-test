import React from 'react';
import styles from '../Detail.module.css';

export const DateField = ({ label, value, width, onChange }) => {
    return (
        <div className={styles.fieldContainer} style={{ width }}>
            <label className={styles.label}>{label}</label>
            <input
                type="date"
                className={styles.dateInput}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                aria-label={label}
            />
        </div>
    );
};