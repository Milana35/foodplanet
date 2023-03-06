import React from 'react';
import styles from "./Menu.module.css"

const Menu = () => {

    return (
        <div>
            <ul className={styles.menuList}>
                <li><img className={styles.menuImg} src="/img/menu.svg" alt=""/></li>
                <li>Пицца</li>
                <li>Бургер</li>
                <li>Суши</li>
                <li>Роллы</li>
                <li>Салаты</li>
                <li>Десерты</li>
                <li>Напитки</li>
            </ul>
        </div>
    );
};

export default Menu;