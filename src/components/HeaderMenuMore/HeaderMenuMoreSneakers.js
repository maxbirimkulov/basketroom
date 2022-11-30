import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosAddCircle, IoIosArrowForward} from 'react-icons/io'
import {clearFilters} from "../../redux/clothes";
import HeaderSubmenuPremium from "../HeaderSubmenuCards/HeaderSubmenuPremium";
import HeaderSubmenuBasket from "../HeaderSubmenuCards/HeaderSubmenuBasket";
import HeaderSubmenuStreet from "../HeaderSubmenuCards/HeaderSubmenuStreet";
import {useDispatch} from "react-redux";

const HeaderMenuMoreSneakers = () => {
    const [submenu, setSubmenu] = useState(false);
    const dispatch = useDispatch();


    return (
        <Link className='header__menu-link more' to='/catalog/shoes'
              onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            Кросовки
            {
                submenu &&
                <ul className='header__submenu'>
                    <li className='header__submenu-link' onMouseEnter={() => setSubmenu('premium')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', category: 'premium'}))}>Premium</div>
                        <IoIosArrowForward/>
                        {submenu === 'premium' && <HeaderSubmenuPremium/>}
                    </li>
                    <li className='header__submenu-link more' onMouseEnter={() => setSubmenu('basket')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', category: 'basketball'}))}>Баскетбол </div>
                        <IoIosArrowForward/>
                        {submenu === 'basket' && <HeaderSubmenuBasket />}
                    </li>
                    <li className='header__submenu-link more' onMouseEnter={() => setSubmenu('street')}
                        onMouseLeave={() => setSubmenu(true)}>
                        <div  onClick={() => dispatch(clearFilters({brand: '', category: 'street'}))}>Уличные </div>
                        <IoIosArrowForward/>
                        {submenu === 'street' && <HeaderSubmenuStreet />}
                    </li>
                    <li className='header__submenu-link'>Детские</li>

                </ul>
            }
        </Link>
    );
};

export default HeaderMenuMoreSneakers;