import React from 'react';
import styles from "./ReviewsHeader.module.css"

const ReviewsHeader = () => {
    return (
        <div className={styles.reviews} >
            <img src="/img/Отзывы.svg" alt=""/>
        </div>
    );
};

export default ReviewsHeader;