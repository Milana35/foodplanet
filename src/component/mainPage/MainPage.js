import React from 'react';
import DeliveryBlock from "../pages/delivery/DeliveryBlock";
import NewMenu from "../pages/newMenu/NewMenu";
import Menu from "../pages/menuHeader/Menu";
import MenuList from "../pages/menuList.Pizza/MenuList";
import IconReviews from "../pages/iconHeader/IconReviews";
import Icon from "../pages/iconList/Icon";
import ReviewsHeader from "../pages/rewiewsHeader/ReviewsHeader";
import Reviews from "../pages/rewiews/Reviews";
import NewListItems from "../pages/newList/NewList";



const MainPage = () => {
    return (
        <div>
            <DeliveryBlock/>
            <NewMenu/>
            <NewListItems/>
            <Menu/>
            <MenuList/>
            <IconReviews/>
            <Icon/>
            <ReviewsHeader/>
            <Reviews/>
        </div>
    );
};

export default MainPage;