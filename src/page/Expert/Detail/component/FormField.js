import React from 'react';
import styles from '../Detail.module.css';

export const FormField = ({ label, value, width, onChange }) => {


    if(Array.isArray(value)) {
        return (
            <div className={styles.fieldContainer} style={{width}}>
                <label className={styles.label}>{label}</label>
                {value?.map(it=>(

                <div>
                    <input
                        type="text"
                        className={styles.input}
                        value={it}
                        onChange={(e) => onChange?.(e.target.value)}
                        aria-label={label}
                    />
                </div>
                ))}
            </div>
        )}

        return (
            <div className={styles.fieldContainer} style={{width}}>
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