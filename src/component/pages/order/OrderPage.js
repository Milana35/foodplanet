import React from 'react';
import styles from "./OrderPage.module.css"



const OrderPage = () => {

    const positive = () => {
        const input = document.getElementById("myInput");
        input.value = parseInt(input.value) + 1;
    }

    const negative = () => {
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

    return (
        <div className={styles.main}>
            <div  className={styles.title}>
                <h1>Оформление заказа</h1>
                <h2>Ваши контактные данные</h2>
            </div>
            <div className={styles.link}>
                <a href="#">Я новый покупатель</a>
                <a href="#">Авторизироваться</a>
            </div>
            <div>
                <form className={styles.date}>
                <input type="text" placeholder="Фамилия"/><br/><input type="text" placeholder="Имя"/>
            </form>
            <form className={styles.date}>
                <input type="text" placeholder="Мобильный телефон: 996555505505 "/> <input type="text" placeholder="Email"/>
            </form>
            </div>
            <div className={styles.title_order}>
                <h2>Ваш заказ</h2>
                <th>
                    <tr>Продукт</tr>
                    <tr>Колличество</tr>
                    <tr>К оплате</tr>
                </th>
            </div>
            <div className={styles.order}>
                <img src="http://localhost:3000/img/New-Burger3.svg" alt=""/>
                <h2>Бургер</h2>
                <button onClick={negative}>-</button>
                <input type="number" id="myInput" value="0"/>
                <button onClick={positive}>+</button>
                <input type="number" placeholder="К оплате"/>
            </div >
            <div className={styles.order}>
                <img src="http://localhost:3000/img/pizza2.svg" alt=""/>
                <h2>Пицца</h2>
                <button onClick={minus}>-</button>
                <input type="number" id="doubleInput" value="0"/>
                <button onClick={plus}>+</button>
                <input type="number" placeholder="К оплате"/>
            </div >
            <div className={styles.main_address}>
                <h2>Адрес доставки</h2>
                <div className={styles.label}>
                    <div className={styles.address_order}>
                        <label>
                            Самовывоз
                            <input type="checkbox" value="Самовывоз"/>
                        </label>
                    </div>
                    <div className={styles.address_order}>
                        <label>
                            Курьерская доставка
                            <input type="checkbox" value="Курьерская доставка"/>
                        </label>
                    </div>
                </div>
                 <div className={styles.address_select}>
                     <div>
                         <select name="" id="">
                             <option value disabled>Выберите страну доставки</option>
                             <option value="Кыргызстан">Кыргызстан</option>
                             <option value="Казахстан">Казахстан</option>
                             <option value="Россия">Россия</option>
                             <option value="Армения">Армения</option>
                         </select>
                     </div>
                     <div>
                         <input className={styles.address_input} type="text" placeholder="Введите адрес доставки"/>
                     </div>
                 </div>
                <h3>Способ оплаты</h3>
                <div className={styles.pay_div}>
                    <div>
                        <label className={styles.pay}>
                            Наличными
                            <input type="checkbox" value="Наличными"/>
                        </label>
                    </div>
                    <div>
                        <label className={styles.pay}>
                            Банковский перевод
                            <input type="checkbox" value="Банковский перевод"/>
                        </label>
                    </div>
                    <div>
                        <label className={styles.pay}>
                            Оплата картой,электронными кошельками на сайте
                            <input type="checkbox" value=" Оплата картой,электронными кошельками на сайте"/>
                        </label>
                    </div>
                    <div>
                        <label className={styles.pay}>
                            Денежный перевод
                            <input type="checkbox" value="Денежный перевод"/>
                        </label>
                    </div>
                    <div>
                        <label className={styles.pay}>
                            Оплата курьеру на месте
                            <input type="checkbox" value="Оплата курьеру на месте"/>
                        </label>
                    </div>
                </div>
                <h3>Коментарий к заказу</h3>
               <div>
                   <textarea placeholder="Ваше сообщение"></textarea>
               </div>
            </div>
        </div>
    );
};

export default OrderPage;