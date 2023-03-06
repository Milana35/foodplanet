import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.block}>
            <ul className={styles.list}>
                <li><img src="/img/footer.svg" alt=""/></li>
                <li>Главное</li>
                <li>Меню</li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li>+996500405988</li>
            </ul>
        </div>
    );
};

export default Footer;