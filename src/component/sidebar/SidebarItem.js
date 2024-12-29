import React from 'react';
import styles from './Sidebar.module.css';
import {Link, useLocation} from "react-router-dom";

export default function SidebarItem({title, url, icon, iconAlt, subItems, toggle}){

    const loc = useLocation();

    return (
        <>
            <div style={loc.pathname===url? {backgroundColor: "#F1F1F2"}:{}} className={styles.mainItem}>
                <img loading="lazy" src={icon} alt={iconAlt} className={styles.menuIcon} />
                {subItems? <div className={styles.menuTitle}>{title}</div>:
                    <Link to={url} className={styles.menuTitle}>{title}</Link>}
                {subItems && <img loading="lazy" onClick={()=>toggle(title)} src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2e6001bbbfd581dd4317a0a42fa91883d4d7e5a48c9ae8536258a6255904a48?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d" alt="" className={styles.expandIcon} />}
            </div>
            {subItems && subItems.map((item, index) => (
                <div key={item.url+index.toString()} className={title}>
                <Link key={index} to={item.url} className={styles.subItem}>
                    <div className={styles.subItemIcon} />
                    <div className={styles.subItemTitle}>{item.title}</div>
                </Link>
                </div>
            ))}
        </>
    );
};