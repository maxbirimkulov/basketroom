import React from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {GiHearts} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'
import {IoIosAddCircle} from 'react-icons/io'
import {useDispatch} from "react-redux";
import {searchProduct} from "../../redux/clothes";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searching = (e) =>{
        e.preventDefault();
        console.log(e.target[0].value);
        navigate('/catalog')
        dispatch(searchProduct(e.target[0].value));
    };



    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <h1 onClick={()=> navigate('/')}>
                            <img className="logo" src="https://static.insales-cdn.com/assets/1/3047/1813479/1652615264/Basketroom__Logo_.jpg" alt='basket brand logo'/>
                        </h1>

                        <div className='header__contacts'>
                            <a className="header__number text-dark" href="tel:89995137072">8-999-513-70-72</a>
                            <a className="header__mail text-muted" href="mailto:Basketroom@inbox.ru">Basketroom@inbox.ru</a>
                        </div>

                        <form onSubmit={(e) => searching(e)} className='header__label'>
                            <input className='header__label-input' required type="text" placeholder='Поиск по каталогу'/>
                            <button className='header__label-btn'><FaSearch/></button>
                        </form>

                        <NavLink to={'/add'} className='header__btn'>
                            <IoIosAddCircle/>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>add</p>
                                <p className='header__btn-num'></p>
                            </div>
                        </NavLink>
                        <NavLink to={'/favorites'} className='header__btn'>
                            <GiHearts/>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>Избранное</p>
                                <p className='header__btn-num'>Кол-во: 0</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/basket'} className='header__btn'>
                            <HiShoppingCart/>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>Корзина</p>
                                <p className='header__btn-num'>0 руб</p>
                            </div>
                        </NavLink>


                    </div>

                </div>


            </header>
            <div className="header__menu">
                <div className="container">
                    <nav className="header__menu-nav">
                        <Link className='header__menu-link' to='/catalog'>Бренды</Link>
                        <Link className='header__menu-link' to='/catalog'>Новинки</Link>
                        <Link className='header__menu-link' to='/catalog'>По заказу</Link>
                        <Link className='header__menu-link' to='/catalog'>В наличие</Link>
                        <Link className='header__menu-link' to='/catalog'>
                            Одежда
                            <ul className='header__submenu'>
                                <li className='header__submenu-link'>Костюмы</li>
                                <li className='header__submenu-link'>Форма</li>
                                <li className='header__submenu-link'>Худи</li>
                            </ul>
                        </Link>
                        <Link className='header__menu-link' to='/catalog'>Premium</Link>
                        <Link className='header__menu-link' to='/catalog'>SALE</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;