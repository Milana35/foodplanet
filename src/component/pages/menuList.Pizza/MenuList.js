import React from 'react';
import styles from "./MenuList.module.css"
import menulist1 from "../../data/menulist1";
import menulist2 from "../../data/menulist2";
import menulist3 from "../../data/menulist3";
import menulist4 from "../../data/menulist4";
import menulist5 from "../../data/menulist5";
import menulist6 from "../../data/menulist6";
import menulist7 from "../../data/menulist7";
import menulist8 from "../../data/menulist8";
import ButtonMenu from "../buttonMenu/ButtonMenu";


const MenuListItems = (props) => {
    return (
        <li>
            <div className={styles.list_block}>
                <img src={props.img} alt=""/>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <h4>{props.value}</h4>
                <div className="amount">
                    <span className="minus">-</span>
                    <input className={styles.input_one} type="text" value="1" size="5"/>
                    <span className="plus">+</span>
                </div>
                <ButtonMenu>{props.btn}</ButtonMenu>
            </div>
        </li>
    )
}


const MenuList = () => {

    const items1 = menulist1.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items2 = menulist2.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items3 = menulist3.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items4 = menulist4.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items5 = menulist5.map((item) => {
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items6 = menulist6.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items7 = menulist7.map((item) =>{
        return(
            <MenuListItems
                img={item.img}
                title={item.title}
                text={item.text}
                value={item.value}
            />
        )
    })

    const items8 = menulist8.map((item) =>{
        return(
            <MenuListItems
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
                    <div className={styles.list_block}>{items1}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items2}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items3}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items4}</div>
                </li>
            </ul>
            <ul className={styles.list}>
                <li>
                    <div className={styles.list_block}>{items5}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items6}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items7}</div>
                </li>
                <li>
                    <div className={styles.list_block}>{items8}</div>
                </li>
            </ul>
            <button className={styles.btn}>Показать ещё</button>
        </div>
    );
};

export default MenuList;