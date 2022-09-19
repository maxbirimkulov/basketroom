import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {GiHearts} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'
import {IoIosAddCircle, IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {searchProduct} from "../../redux/clothes";
import HeaderSubmenuBasket from "../../components/HeaderSubmenuCards/HeaderSubmenuBasket";
import HeaderSubmenuStreet from "../../components/HeaderSubmenuCards/HeaderSubmenuStreet";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(s => s.user.user);
    const {filter, status, error} = useSelector(state => state.clothes);
    let price = user?.cart?.reduce((acc, rec) => acc + rec.price, 0);

    const searching = (e) =>{
        e.preventDefault();
        console.log(e.target[0].value);
        navigate('/catalog');
        dispatch(searchProduct(e.target[0].value));
    };

    const [submenu, setSubmenu] = useState(false);
    const [search, setSearch] = useState(filter.title);

    const al = (e) =>{
        setSearch(e.target.textContent)
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

                        </div>

                        <form onSubmit={(e) => searching(e)} className='header__label'>
                            <input onChange={(event => setSearch(event.target.value))} className='header__label-input' value={search}  type="text" placeholder='Поиск по каталогу'/>

                            <div className='header__label-popup'>
                                <ul className='header__label-list'>
                                    <li onClick={(e) => al(e)} className='header__label-listItem'>air </li>
                                    <li onClick={(e) => al(e)} className='header__label-listItem'>off</li>
                                </ul>
                            </div>
                            <button className='header__label-btn'><FaSearch/></button>
                        </form>

                        <NavLink to={'/add'} className='header__btn'>
                            <IoIosAddCircle/>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>add</p>
                                <p className='header__btn-num'> </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/favorites'} className='header__btn'>
                            <span id='favorites' data-totalitems={user?.favourites?.length} className='header__btn-favorites'>
                                <GiHearts/>
                            </span>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>Избранное</p>
                                <p className='header__btn-num'>Кол-во: {user?.favourites?.length}</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/basket'} className='header__btn'>
                            <span id='cart' data-totalitems={user?.cart?.length} className='header__btn-cart'>
                                <HiShoppingCart/>
                            </span>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>Корзина</p>
                                <p className='header__btn-num'>{price || 0} руб</p>
                            </div>
                        </NavLink>


                    </div>

                </div>


            </header>
            <div className="header__menu">
                <div className="container">
                    <nav className="header__menu-nav">
                        <Link className='header__menu-link more' to='/catalog/1' onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
                            Кросовки
                            {
                                submenu &&
                                <ul className='header__submenu'>
                                    <li className='header__submenu-link more' onMouseEnter={() => setSubmenu('basket')} onMouseLeave={() => setSubmenu(true)}>
                                        Баскетбол <IoIosArrowForward/>
                                        {   submenu === 'basket' &&  <HeaderSubmenuBasket setSearch={setSearch}/>   }
                                    </li><li className='header__submenu-link more' onMouseEnter={() => setSubmenu('street')} onMouseLeave={() => setSubmenu(true)}>
                                        Уличные <IoIosArrowForward/>
                                        {   submenu === 'street' &&  <HeaderSubmenuStreet setSearch={setSearch}/>   }
                                    </li>
                                    <li className='header__submenu-link'>Детские</li>
                                    <li className='header__submenu-link'>Premium</li>
                                </ul>
                            }
                        </Link>
                        <Link className='header__menu-link' to='/catalog/1'>Одежда</Link>
                        <Link className='header__menu-link' to='/catalog/1'>Акксессуары</Link>
                        <Link className='header__menu-link' to='/catalog/1'>В наличие</Link>
                        <Link className='header__menu-link' to='/catalog/1'>SALE</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;