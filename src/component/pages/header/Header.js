import React from "react";
import styles from "./Header.module.css";
import {Link,NavLink} from "react-router-dom";


const Header = () => {
    const setActive= ({isActive}) => isActive ? 'active-link' : '';

    return (
        <>
            <div>
                <ul className = {styles.hdr}>
                    <li><a href="http://localhost:3000/"><img src="/img/logo.svg" alt=""/></a></li>
                    {/*<li><NavLink className={setActive} to="/menu"> <button className={styles.menu_btn}>Меню </button></NavLink></li>*/}
                    <li>Главное</li>
                    <li>Меню</li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <button className={styles.btn1}><img src="/img/tel.svg" alt=""/>   +996500405988</button>
                   <NavLink className={setActive} to="/bascket"> <button className={styles.btn2}><img src="/img/carry.svg" alt=""/></button></NavLink>
                </ul>
            </div>
        </>
    )

}

export default Header;