import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import Fancybox from "../../components/Fancybox/Fancybox";
import Card from "../../components/Card/Card";
import {MdFavorite} from 'react-icons/md'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {findUser} from "../../redux/user";
// import required modules
import {Keyboard, Navigation} from "swiper";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../redux/clothes";
import ProductDetails from "./ProductDetails";
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'


const Product = () => {
    const notify = (text) =>toast(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        className: 'toast-message',
        closeOnClick: true,
        theme:"dark",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(s => s.user.user);
    const {oneProduct, status, error} = useSelector(state => state.clothes);
    useEffect(( ) =>{
        dispatch(getOneProduct(params.id))
    },[]);
    const [count, setCount] = useState(1);
    const [popup, setPopup] = useState(false);
    const favBtn = useRef(null);
    const secs = Date.parse(oneProduct.createdAt);

    const addFav = () => {
        const favorites = document.querySelector('#favorites');
        const favBtn = document.querySelector('#favBtn');


        user?.favourites.findIndex(el => el._id === oneProduct._id) >= 0 ? notify('Убрано') : notify('Добавлено в нужные👌');
            dispatch(findUser( {user: {...user, favourites:
                    user?.favourites.findIndex(el => el._id === oneProduct._id) >= 0 ?
                        user?.favourites.filter((el) => el._id !== oneProduct._id)
                        : [...user.favourites, {...oneProduct}]
                }}));
            if (user?.favourites.findIndex(el => el._id === oneProduct._id) < 0) favBtn.classList.add('sendtocart')
        setTimeout(() =>{
            favBtn.classList.remove('sendtocart');
            favorites.classList.add('shake');
            // favorites.setAttribute('data-totalitems', user?.favourites?.length);
            setTimeout(() => {
                favorites.classList.remove('shake');
            },500)
        },1300);
        window.scrollTo(0, 0);
    };

    const addToCart = () =>{
        const cart = document.querySelector('#cart');
        const favBtn = document.querySelector('#favBtn');
        setTimeout(() =>{
            cart.classList.add('shake');
            setTimeout(() => {
                cart.classList.remove('shake');
            },500)
        },500);
        window.scrollTo(0, 0);
        // const user = JSON.parse(localStorage.getItem('user')) || {favourites:[], cart:[]};
        // localStorage.setItem('user', JSON.stringify({
        //     ...user, cart:
        //         user?.cart.findIndex(el => el._id === oneProduct._id) >= 0 ?
        //             user?.cart.filter((el) => el._id !== oneProduct._id) :
        //             [...user.cart, {...oneProduct}]
        // }));
        user?.cart.findIndex(el => el._id === oneProduct._id) >= 0 ?
            notify('Товар был убран') :  setPopup(true);
        dispatch(findUser({user: {...user, cart:
                    user?.cart.findIndex(el => el._id === oneProduct._id) >= 0 ?
                        user?.cart.filter((el) => el._id !== oneProduct._id)
                        : [...user.cart, {...oneProduct}]
            }}));
    };
    return (
        <div>
            <div className="container">
                <div className='product'>
                    {
                        popup &&
                            <>
                                    <div className='popup__box'>
                                        <h2 className='popup__title'>Товар был добавлен</h2>
                                        <span className='popup__close' onClick={() => setPopup(false)}><AiFillCloseCircle/></span>
                                        <div className='popup__btns'>
                                            <button className='popup__btn active' onClick={() => navigate('/catalog/1')}>Продолжить покупки</button>
                                            <button className='popup__btn ' onClick={() => navigate('/basket')}>Перейти в корзину</button>
                                        </div>
                                    </div>
                                <div className="overlay" onClick={() => setPopup(false)}>

                                </div>
                            </>
                    }

                    <div className="product__top">
                        <div className="product__top-images">
                            <Swiper initialSlide={1}  navigation={true} keyboard={true} modules={[Navigation, Keyboard]} className="mySwiper product__top-imgPlace">
                                {
                                    status === 'loading' ?
                                    <div className='product__top-loading'>
                                        <ProductDetails/>
                                    </div>
                                    :
                                   JSON.stringify(oneProduct) !== '{}'  && oneProduct.images.map((img, idx) => img &&
                                        (
                                            <SwiperSlide>
                                                <div className='product__top-backImg' style={{background: `url(${`${process.env.REACT_APP_URL}${img}`})center/contain no-repeat`}}> </div>
                                            </SwiperSlide>
                                    )
                                    )
                                }
                            </Swiper>
                            <div className='product__top-gallery'>
                                <Fancybox>
                                    {status === 'loading' ?
                                            <div className='product__top-l'>loading</div>
                                            :
                                            oneProduct?.images?.map((img) => img &&
                                                (
                                                    <React.Fragment key={oneProduct.title + img }>
                                                        <a data-fancybox="gallery" href={`${process.env.REACT_APP_URL}${img}`}
                                                           className='product__top-gallery-block'>
                                                                <div className='product__top-galleryImage' style={{background: `url(${`${process.env.REACT_APP_URL}${img}`})center/contain no-repeat`}}> </div>
                                                        </a>
                                                    </React.Fragment>

                                                )
                                            )
                                    }
                                </Fancybox>
                            </div>
                        </div>

                        <div className='product__top-variables'>
                            <h3><Link className='product__top-link product__top-link-back'
                                      to={'/'}>Главная</Link> / <Link className='product__top-link '
                                                                      to={'/catalog'}>Мужские</Link></h3>
                            <h2 className='product__top-title'>{oneProduct ? oneProduct.title : 'Air Jordan 1 \'Black Toe\''}</h2>
                            <p className='product__top-price'>{oneProduct ? oneProduct.price : '13127'} руб</p>
                            <p className='product__top-comment'>Оставить отзыв</p>
                            <p className='product__top-text'>Кроссовки Майкла Джордана - Air Jordan 1 Retro. С этой
                                модели начиналась история Jordan
                                Brand. Появившиеся на свет в 1988 году они поразили своим ярким дизайном, не
                                применяемым ни в одной баскетбольной обуви того времени. За что и штрафовали Майкла
                                на 5000 $ каждую игру, когда он появлялся в "единичках". Вся эта шумиха спровоцировала
                                огромный интерес к модели и Nike это было на руку. В итоге толпы фанатов выстраивались
                                в очередь, чтобы заполучить "запрещенную" модель Майкла Джордана. В наше время, Air
                                Jordan 1 Retro считаются настоящей иконной стиля, которой хочется обладать. Кроссовки
                                мужские Air Jordan 1 'Black Toe', вы можете купить в баскетбольном магазине
                                Basketroom.ru
                            </p>
                            <p className='product__top-sizesText'>Размер</p>
                            <div className='product__top-sizes'>
                                <button className='product__top-size active'>12 US-46 EUR-30 cm</button>
                                <button className='product__top-size'>11 US-45 EUR-29 cm</button>

                            </div>
                            <p className='product__top-return'>Обмен/Возврат в течение 14 дней</p>

                            <div className='product__top-pick'>
                                <button className='product__top-pickAdd' onClick={() => addToCart()}><MdOutlineAddShoppingCart/>{!user?.cart?.filter(el => el?._id === oneProduct?._id).length ? 'В корзину' : 'Убрать'} </button>
                                <span className='product__top-pickFav' id='favBtn' ref={favBtn} onClick={() => addFav()}>
                                    <span className={`${!user?.favourites?.filter(el => el?._id === oneProduct?._id).length && 'productCard__like-default'}`}><MdFavorite/>  <span className="cart-item"> </span></span>
                                </span>
                            </div>

                            <div className='product__top-category'>Находится в категориях :
                                <span className='product__top-category_link'> {oneProduct?.category}</span>
                            </div>
                        </div>

                    </div>
                    <div className="product__info">

                    </div>
                </div>

            </div>


            <div className="container">
                <h2 className='home__cardBlock-title'>Вам так же понравится</h2>

                <div className='home__cardBlock-row'>
                    <Swiper navigation={true} loop slidesPerView={'4'} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="container">
                <h2 className='home__cardBlock-title'>Ранее просмотренные товары</h2>

                <div className='home__cardBlock-row'>
                    <Swiper navigation={true} slidesPerView={'4'} loop={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                        <SwiperSlide><Card page={'slide'}/></SwiperSlide>
                    </Swiper>

                </div>
            </div>


            <SalesInfo/>

        </div>
    );
};

export default Product;