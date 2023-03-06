import React from 'react';
import styles from "./Reviews.module.css"
import reviews1 from "../../data/reviews1";
import reviews2 from "../../data/reviews2";
import reviews3 from "../../data/reviews3";
import reviews4 from "../../data/reviews4";

const ReviewsItems = (props) => {
    return(
        <li>
            <div className={styles.info_block}>
                <img src={props.img} alt=""/>
                <h4 className={styles.sergey}>{props.title}</h4>
                <p>{props.text}</p>
                <p className={styles.date}>{props.date}</p>
            </div>
        </li>
    )
}

const Reviews = () => {

    const items1 = reviews1.map((item) =>{
        return(
            <ReviewsItems
                img={item.img}
                title={item.title}
                text={item.text}
                date={item.date}
            />
        )
    })

    const items2 = reviews2.map((item) =>{
        return(
            <ReviewsItems
                img={item.img}
                title={item.title}
                text={item.text}
                date={item.date}
            />
        )
    })

    const items3 = reviews3.map((item) =>{
        return(
            <ReviewsItems
                img={item.img}
                title={item.title}
                text={item.text}
                date={item.date}
            />
        )
    })

    const items4 = reviews4.map((item) =>{
        return(
            <ReviewsItems
                img={item.img}
                title={item.title}
                text={item.text}
                date={item.date}
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
        </div>
    );
};

export default Reviews;