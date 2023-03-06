import React from 'react';
import styles from "./ButtonMenu.module.css"

const ButtonMenu = (props) => {
    return (
        <div>
            <button className={styles.btn_menu}>В корзину</button>
        </div>
    );
};

export default ButtonMenu;