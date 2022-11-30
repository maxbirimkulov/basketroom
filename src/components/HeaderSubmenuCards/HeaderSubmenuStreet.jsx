import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {clearFilters, searchProduct} from "../../redux/clothes";
import {useDispatch} from "react-redux";
import {brandsData} from "../../utils/brands";

const HeaderSubmenuStreet = ({category = 'street'}) => {
    const dispatch = useDispatch();


    const handleClick = (event) =>{
        dispatch(clearFilters({brand: event.target.dataset.value, category: category}));
    };


    const basketballLi = brandsData.find(item => item.category === 'street').brands;


    return (
        <div className='header__submenu-drop'>
            {
                basketballLi.map(li => (
                    <div key={li.id} onClick={(e) => handleClick(e)} data-value={li.value} className='header__submenu-link'>{li.label}</div>
                ))
            }

        </div>
    );
};

export default HeaderSubmenuStreet;