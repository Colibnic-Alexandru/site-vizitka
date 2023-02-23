import React from 'react';
import {Nav} from "../nav/Nav";
import style from "./Header.module.scss"

 export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.header}>
                <Nav title={'Home'}/>
                <Nav title={'Contact'}/>
                <Nav title={'Project'}/>
                <Nav title={'Catalog'}/>
                <Nav title={'About'}/>
            </div>
        </div>
    );
};

