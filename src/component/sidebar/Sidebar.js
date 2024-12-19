import React from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import {SidebarData} from "./SidebarData";

export default function Sidebar(){


    const toggle = (title)=>{
        let ele = document.getElementsByClassName(title)
        for (let i = 0; i < ele.length; i++) {
            ele[i].classList.toggle('hide')
        }
    }

    return (
        <aside style={{position:"fixed", right:"0"}}>

            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23e7e1aabaac536444768b6e12e3ea182ea6e033b7b1c4e239c479f5a2cbbd97?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                alt=""
                className={styles.headerIcon}
                style={{transform:"rotate(180deg)"}}
                onClick={() => {
                    document.getElementById("sidebar").classList.toggle("hide")
                }}
            />
            <div className={styles.sidebar} id="sidebar">
                <div className={styles.header}>
                    <div className={styles.title}>휴텍씨 관리자 화면</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23e7e1aabaac536444768b6e12e3ea182ea6e033b7b1c4e239c479f5a2cbbd97?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                        alt=""
                        className={styles.headerIcon}
                        onClick={() => {
                            document.getElementById("sidebar").classList.toggle("hide")
                        }}
                    />
                </div>
                <nav className={styles.navigation}>
                    <div className={styles.menuContainer}>
                        {SidebarData.map((item, index) => (
                            <SidebarItem
                                key={item.url+index.toString()}
                                title={item.title}
                                icon={item.icon}
                                iconAlt={item.iconAlt}
                                subItems={item.subItems}
                                url={item.url}
                                toggle={toggle}
                            />
                        ))}
                    </div>
                </nav>
            </div>
        </aside>
    )
}
