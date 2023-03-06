import React from 'react';
import icon from "../../data/icon";
import icon2 from "../../data/icon2";
import icon3 from "../../data/icon3";
import icon4 from "../../data/icon4";
import styles from "./Icon.module.css"


const IconItems = (props) => {
    return (
        <li>
            <div className={styles.icon_block}>
                <img src={props.img} alt=""/>
                <h4 className={styles.sergey}>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </li>
    )
}

const Icon = () => {

    const items = icon.map((item) =>{
        return(
            <IconItems
                img={item.img}
                title={item.title}
                text={item.text}
            />
        )
    })

    const items2 = icon2.map((item) =>{
        return(
            <IconItems
                img={item.img}
                title={item.title}
                text={item.text}
            />
        )
    })

    const items3 = icon3.map((item) =>{
        return(
            <IconItems
                img={item.img}
                title={item.title}
                text={item.text}
            />
        )
    })

    const items4 = icon4.map((item) =>{
        return(
            <IconItems
                img={item.img}
                title={item.title}
                text={item.text}
            />
        )
    })

    return (
        <div className={styles.block}>
            <ul className={styles.list}>
                <li>{items}</li>
                <li>
                    <div className={styles.icon_block}>{items2}</div>
                </li>
                <li>
                    <div className={styles.icon_block}>{items3}</div>
                </li>
                <li>
                    <div className={styles.icon_block}>{items4}</div>
                </li>
            </ul>
        </div>
    );
};

export default Icon;