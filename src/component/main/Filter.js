import React from 'react';
import styles from '../../page/Expert/Expert.module.css'

export default function Filter({label, options, additionalSelects}) {

    return (
        <div className={styles.filterSection}>
            <div className={styles.filterLabel}>{label}</div>
            <div className={styles.filterOptions}>
                {options && options?.map((option, index) => (
                    <label key={index} className={styles.checkboxContainer}>
                        <input type="checkbox" className={styles.checkbox} checked={option.value} onChange={()=>{option.set(!option.value)}}/>
                        <span>{option.label}</span>
                    </label>
                ))}
                {additionalSelects?.map((select, index) => (
                    <select key={index} name={select.label} id={select.label} onChange={(e)=>select.set(e.target.value)}>
                        {select.options.map((option, index)=>(
                            <option key={index} value={option} label={option}/>
                        ))}
                    </select>
                ))}
            </div>
        </div>
    );
}