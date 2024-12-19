import styles from "../Detail.module.css";
import React from "react";

export const CheckboxField = ({ label, checked, width, onChange }) => {
    return (
        <div className={styles.fieldContainer} style={{ width }}>
            <label className={styles.label}>{label}</label>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    aria-label={label}
                />
            </div>
        </div>
    );
};