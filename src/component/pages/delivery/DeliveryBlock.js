import React from "react";
import styles from "./Delivery.module.css"


const DeliveryBlock = () => {
    return (
        <>
           <div>
               <div className={styles.delivery}>
                   <div className={styles.img}>
                       <ul className={styles.listtype}>
                           <li>
                               <img className={styles.firstimg} src="/img/delivery.svg" alt=""/>
                           </li>
                           <li> <p>Доставим заказ вовремя и можете рассчитывать,<br/>
                               что еда будет доставлена всегда горячей и ароматной.</p>
                           </li>
                          <li>
                              <button className={styles.btn}>Перейти в меню</button>
                          </li>
                       </ul>
                   <div className={styles.content}>
                       <img className={styles.burger} src="/img/Burger.svg" alt=""/>
                   </div>
               </div>
               </div>
           </div>
        </>
    )
}
 export default DeliveryBlock;
