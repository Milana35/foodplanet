import React from 'react';
import styles from "./BascketPage.module.css"
import {Link,NavLink} from "react-router-dom";


const BascketPage = () => {

        const increment = () => {
            const input = document.getElementById("myInput");
            input.value = parseInt(input.value) + 1;
        }

        const decrement = () => {
            const input = document.getElementById("myInput");
            input.value = parseInt(input.value) - 1;
        }

        const plus = () => {
        const input = document.getElementById("doubleInput");
        input.value = parseInt(input.value) + 1;
        }

        const minus = () => {
        const input = document.getElementById("doubleInput");
        input.value = parseInt(input.value) - 1;
        }

    //     const addToCart = () => {
    //     let input = document.getElementById("myInput");
    //     let quantity = parseInt(input.value);
    //     count += quantity; // увеличиваем количество товаров в корзине на выбранное количество
    //     let countSpan = document.getElementById("count");
    //     countSpan.innerHTML = count; // обновляем отображение количества товаров в корзине
    // }


    const setActive= ({isActive}) => isActive ? 'active-link' : '';

    return (
        <div className={styles.main}>
            <div className={styles.bascket_title}>
                <h1>Корзина</h1>
                <h3>Товары в вашей корзине</h3>
            </div>
            <div>
                <th>
                    <tr>Продукт</tr>
                    <tr>Колличество</tr>
                    <tr>К оплате</tr>
                </th>
            </div>
            <div className={styles.burger}>
                <img src="http://localhost:3000/img/New-Burger3.svg" alt=""/>
                    <h2>Бургер</h2>
                    <span><button onClick={decrement}>-</button></span>
                    <input type="number" id="myInput" value="0"/>
                    <span><button onClick={increment}>+</button></span>
                    <input type="number" placeholder="К оплате"/>
            </div >
            <div className={styles.pizza}>
                <img src="http://localhost:3000/img/pizza5.svg" alt=""/>
                <h2>Пицца</h2>
                <button onClick={minus}>-</button>
                <input type="number" id="doubleInput" value="0"/>
                <button onClick={plus}>+</button>
                <input  type="number" placeholder="К оплате"/>
            </div>
            <div className={styles.button_link}>
                <a href="http://localhost:3000/">Продолжить покупки</a>
                <NavLink className={setActive} to="/order"><button>Оформить заказ</button></NavLink>
            </div>
        </div>
    );
};

export default BascketPage;