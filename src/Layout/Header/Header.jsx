import React from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {GiHearts} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'


const Header = () => {
    const navigate = useNavigate();

    const searching = (e) =>{
        e.preventDefault();
        navigate('/search')
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
                            <input className='header__label-input' type="text" placeholder='Поиск по каталогу'/>
                            <button className='header__label-btn'><FaSearch/></button>
                        </form>

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
                        <Link className='header__menu-link' to='/'>Бренды</Link>
                        <Link className='header__menu-link' to='/'>Новинки</Link>
                        <Link className='header__menu-link' to='/'>Мужские</Link>
                        <Link className='header__menu-link' to='/'>Женские</Link>
                        <Link className='header__menu-link' to='/'>Одежда</Link>
                        <Link className='header__menu-link' to='/'>Premium</Link>
                        <Link className='header__menu-link' to='/'>SALE</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;