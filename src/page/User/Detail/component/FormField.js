import React from 'react';
import styles from '../Detail.module.css';

export const FormField = ({ label, value, width, onChange }) => {
    return (
        <div className={styles.fieldContainer} style={{ width }}>
            <label className={styles.label}>{label}</label>
            <div>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                aria-label={label}
            />
            </div>
        </div>
    );
};