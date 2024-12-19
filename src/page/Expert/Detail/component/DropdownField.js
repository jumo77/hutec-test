import React from 'react';
import styles from '../Detail.module.css';

export const DropdownField = ({ label, value, width, options, onChange }) => {

    if(Array.isArray(value)) {
        return (
            <div className={styles.fieldContainer} style={{width}}>
                <label className={styles.label}>{label}</label>
                <div>
                    {
                        value.map((it, index) => (
                            <select
                                className={styles.select}
                                value={value}
                                onChange={(e) => onChange?.(e.target.value)}
                                aria-label={label}
                            >
                                {options[index].map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ))
                    }
                </div>
            </div>
        )
    }
    return (
        <div className={styles.fieldContainer} style={{width}}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                aria-label={label}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}