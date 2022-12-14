import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {GiHearts} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'
import {IoIosAddCircle, IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, searchProduct} from "../../redux/clothes";
import HeaderSubmenuBasket from "../../components/HeaderSubmenuCards/HeaderSubmenuBasket";
import HeaderSubmenuStreet from "../../components/HeaderSubmenuCards/HeaderSubmenuStreet";
import logo from './basketlogo.png'
import HeaderSubmenuPremium from "../../components/HeaderSubmenuCards/HeaderSubmenuPremium";
import HeaderMenuMoreSneakers from "../../components/HeaderMenuMore/HeaderMenuMoreSneakers";
import HeaderMenuMoreClothes from "../../components/HeaderMenuMore/HeaderMenuMoreClothes";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(s => s.user.user);
    const {filter} = useSelector(state => state.clothes);
    let price = user?.cart?.reduce((acc, rec) => acc + rec.price, 0);

    const searching = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        navigate('/catalog');
        dispatch(searchProduct(e.target[0].value));
    };

    const [submenu, setSubmenu] = useState(false);
    const [search, setSearch] = useState(filter.title);
    const [hidden, setHidden ] = useState(false);

    const al = (e) => {
        setSearch(e.target.textContent)
    };
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <h1 onClick={() => navigate('/')}>
                            <img width={120} className="logo" src={logo} alt='basket brand logo'/>
                        </h1>

                        <div className='header__contacts'>

                        </div>

                        <form onSubmit={(e) => searching(e)} className='header__label'>
                            <input onChange={(event => setSearch(event.target.value))} className='header__label-input'
                                   value={search} type="search" placeholder='?????????? ???? ????????????????'/>

                            <div className='header__label-popup'>
                                <ul className='header__label-list'>
                                    <li onClick={(e) => al(e)} className='header__label-listItem'>air</li>
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
                            <span id='favorites' data-totalitems={user?.favourites?.length}
                                  className='header__btn-favorites'>
                                <GiHearts/>
                            </span>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>??????????????????</p>
                                <p className='header__btn-num'>??????-????: {user?.favourites?.length}</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/basket'} className='header__btn'>
                            <span id='cart' data-totalitems={user?.cart?.length} className='header__btn-cart'>
                                <HiShoppingCart/>
                            </span>
                            <div className='header__btn-text'>
                                <p className='header__btn-title'>??????????????</p>
                                <p className='header__btn-num'>{price || 0} ??????</p>
                            </div>
                        </NavLink>

                        {/*<NavLink to={'/catalogForExample'}>CatalogForExample</NavLink>*/}


                    </div>

                </div>


            </header>

            <div className="header__menu">
                <div className="container">
                    <nav className={`header__menu-nav ${hidden && 'hidden'}`}>
                       <HeaderMenuMoreSneakers/>
                       <HeaderMenuMoreClothes/>
                        <Link className='header__menu-link' to='/catalog/other'>????????????</Link>
                        <Link className='header__menu-link' to='/catalog/instock'>?? ??????????????</Link>
                        <Link onClick={() => alert(2)} className='header__menu-link' to='/catalog/sale'>SALE</Link>
                    </nav>
                </div>
                <div onClick={(e) =>{ e.stopPropagation(); setHidden(!hidden)}} className='header__menu-burger'>
                    <p className="header__sidebar-burger"> </p>
                </div>
            </div>



        </>
    );
};

export default Header;