import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'

const HeaderSubmenuStreet = () => {
    const [drop, setDrop] = useState(false);
    const adidasLi = ['Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young','Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young',];
    const nikeKi = ['Travis Scott', 'Nike x Off White', 'Nike Lifestyle', 'Nike Dunk', 'Nike Air Force', 'Nike Cosmic Unity', 'Nike GT', 'Nike LeBron', 'Nike Kyrie', 'Nike Freak', 'Nike KD', 'Nike PG', 'Nike Uptempo' ];

    return (
        <div className='header__submenu-categories'>
            <div className='header__submenu-link' onMouseEnter={() => setDrop('adidas')}>
                adidas <IoIosArrowForward/>
                <div className='header__submenu-categories'>
                    {
                        drop === 'adidas' && adidasLi.map(li => (
                            <Link to={`/catalog/1/${li}`} className='header__submenu-link'>{li}</Link>
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