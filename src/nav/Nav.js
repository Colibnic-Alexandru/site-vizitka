import React from 'react';
import styles from "./Nav.module.scss"
export const Nav = (props) => {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.link}>{props.title}</a>
        </div>
    );
};