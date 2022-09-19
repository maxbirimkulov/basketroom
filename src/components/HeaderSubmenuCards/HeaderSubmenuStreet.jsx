import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import {searchProduct} from "../../redux/clothes";
import {useDispatch} from "react-redux";

const HeaderSubmenuStreet = ({setSearch}) => {
    const [drop, setDrop] = useState(false);
    const adidasLi = ['Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young','Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young',];
    const nikeKi = ['Travis Scott', 'Nike x Off White', 'Nike Lifestyle', 'Nike Dunk', 'Nike Air Force', 'Nike Cosmic Unity', 'Nike GT', 'Nike LeBron', 'Nike Kyrie', 'Nike Freak', 'Nike KD', 'Nike PG', 'Nike Uptempo' ];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searching = (e) =>{
        console.log(e.target.textContent);
        setSearch(e.target.textContent);
        navigate('/catalog');
        dispatch(searchProduct(e.target.textContent));
    };
    return (
        <div className='header__submenu-categories'>
            <div className='header__submenu-link' onMouseEnter={() => setDrop('adidas')}>
                adidas <IoIosArrowForward/>
                <div className='header__submenu-categories'>
                    {
                        drop === 'adidas' && adidasLi.map(li => (
                            <div onClick={(e) => searching(e)} className='header__submenu-link'>{li}</div>
                        ))
                    }
                </div>
            </div>
            <div className='header__submenu-link' onMouseEnter={() => setDrop('nike')}>
                nike <IoIosArrowForward/>
                <div className='header__submenu-categories'>
                    {
                        drop === 'nike' && nikeKi.map(li => (
                            <p className='header__submenu-link'>{li}</p>
                        ))
                    }
                </div>
            </div>
            <div className='header__submenu-link' onMouseEnter={() => setDrop('nike')}>
                Puma <IoIosArrowForward/>
                /
            </div>

        </div>
    );
};

export default HeaderSubmenuStreet;