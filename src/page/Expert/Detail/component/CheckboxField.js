import styles from "../Detail.module.css";
import React from "react";

export const CheckboxField = ({ label, checked, width, onChange }) => {

    if(Array.isArray(checked)){
        return (
            <div className={styles.fieldContainer} style={{width}}>
                <label className={styles.label}>{label}</label>
                <div>
                    {
                        checked.map(it=>(
                            <div className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={it.value}
                                    onChange={(e) => onChange?.(e.target.checked)}
                                    aria-label={label}
                                />
                                <label>{it.label}</label>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
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
                <span className={styles.checkboxLabel}>그룹</span>
            </div>
        </div>
    );
};