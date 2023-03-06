import React from 'react';
import styles from "./NewMenu.module.css"

const NewMenu = () => {
    return (
        <div>
            <ul className={styles.newHead}>
                <li> <img className={styles.img_new} src="/img/new.svg" alt=""/></li>
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

export default NewMenu;