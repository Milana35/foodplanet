import React from 'react';
import styles from "./NewList.module.css"
import newlist from "../../data/newlist";
import newlist2 from "../../data/newlist2";
import newlist3 from "../../data/newlist3";
import newlist4 from "../../data/newlist4";

const NewListItems = (props) => {

    let count = 0;

    const plus = () => {
        const input = document.getElementById("myInput");
        input.value = parseInt(input.value) + 1;
    }

    const minus = () => {
        const input = document.getElementById("myInput");
        input.value = parseInt(input.value) - 1;
    }

    // const addToCart = () => {
    //     let input = document.getElementById("myInput");
    //     let quantity = parseInt(input.value);
    //     count += quantity; // увеличиваем количество товаров в корзине на выбранное количество
    //     let countSpan = document.getElementById("count");
    //     countSpan.innerHTML = count; // обновляем отображение количества товаров в корзине
    // }

    return (
        <li>
            <div className={styles.info_block}>
                <img src={props.img} alt=""/>
                <h4 className={styles.listh4}>{props.title}</h4>
                <p className={styles.listp}>{props.text}</p>
                <h4 className={styles.listh4}>{props.value}</h4>
                <div className="amount">
                    <button className={styles.amount_btn} onClick={minus}>-</button>
                    <input className={styles.amount_input} type="number" id="myInput" value="1"/>
                    <button className={styles.amount_btn} onClick={plus}>+</button>
                </div>
                <div>
                    <button className={styles.btn}>В корзину</button>
                </div>
            </div>
        </li>
    )
}



const NewList = () => {

    const items = newlist.map((item) =>{
        return(
            <NewListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}

            />
        )
    })

    const items2 = newlist2.map((item) =>{
        return(
            <NewListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items3 = newlist3.map((item) =>{
        return(
            <NewListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items4 = newlist4.map((item) =>{
        return(
            <NewListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    return (
        <div className={styles.block}>
            <ul className={styles.list}>
                <li>
                    <div className={styles.info_block}>{items}</div>
                </li>
                <li>
                    <div className={styles.info_block}>{items2}</div>
                </li>
                <li>
                    <div className={styles.info_block}>{items3}</div>
                </li>
                <li>
                    <div className={styles.info_block}>{items4}</div>
                </li>
            </ul>
        </div>
    );
};

export default NewList;