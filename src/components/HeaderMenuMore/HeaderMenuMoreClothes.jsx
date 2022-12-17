import React, {useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import {clearFilters} from "../../redux/clothes";
import HeaderSubmenuPremium from "../HeaderSubmenuCards/HeaderSubmenuPremium";
import HeaderSubmenuBasket from "../HeaderSubmenuCards/HeaderSubmenuBasket";
import HeaderSubmenuStreet from "../HeaderSubmenuCards/HeaderSubmenuStreet";
import {useDispatch} from "react-redux";
// {id: 1, value: 'hoodie', label: 'Толстовки'},
// {id: 2, value: 'form', label: 'Форма'},
// {id: 3, value: 'pants', label: 'Штаны'},
// {id: 4, value: 'socks', label: 'Носки'},
// {id: 4, value: 'accessories', label: 'Аксессуары'},
const HeaderMenuMoreClothes = () => {
    const [submenu, setSubmenu] = useState(false);
    const dispatch = useDispatch();


    return (
        <Link className='header__menu-link more' to='/catalog/clothes'
              onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            Одежда
            {
                submenu &&
                <ul className='header__submenu'>
                    <li className='header__submenu-link' onMouseEnter={() => setSubmenu('premium')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', subcategory: 'hoodie'}))}>Толстовки</div>
                        <IoIosArrowForward/>
                        {submenu === 'premium' && <HeaderSubmenuPremium/>}
                    </li>
                    <li className='header__submenu-link more' onMouseEnter={() => setSubmenu('basket')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', subcategory: 'form'}))}>Форма </div>
                        <IoIosArrowForward/>
                        {submenu === 'basket' && <HeaderSubmenuBasket />}
                    </li>
                    <li className='header__submenu-link more' onMouseEnter={() => setSubmenu('street')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', subcategory: 'pants'}))}>Штаны </div>
                        <IoIosArrowForward/>
                        {submenu === 'street' && <HeaderSubmenuStreet category={'pants'}/>}
                    </li>
                    <li className='header__submenu-link'>Носки</li>
                    <li className='header__submenu-link'>Аксессуары</li>

                </ul>
            }
        </Link>
    );
};

export default HeaderMenuMoreClothes;