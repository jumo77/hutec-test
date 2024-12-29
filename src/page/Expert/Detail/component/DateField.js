import React from 'react';
import styles from '../Detail.module.css';
import isArray from "../../../../component/const/isArray";

export const DateField = ({ label, value, width, onChange }) => {

    if(isArray(value)){return (
        <div className={styles.fieldContainer} style={{width}}>
            <label className={styles.label}>{label}</label>
            <div>
                {
                    value.map(it=>(
            <input
                type="date"
                className={styles.dateInput}
                value={it}
                onChange={(e) => onChange?.(e.target.value)}
                aria-label={label}
            />
                    ))
                }
            </div>
        </div>
    )
    }
    return (
        <div className={styles.fieldContainer} style={{width}}>
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