import React, {useEffect} from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import Fancybox from "../../components/Fancybox/Fancybox";
import Card from "../../components/Card/Card";
import {MdFavorite} from 'react-icons/md'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../redux/clothes";
import ProductDetails from "./ProductDetails";


const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {oneProduct, status, error} = useSelector(state => state.clothes);
    useEffect(( ) =>{
        dispatch(getOneProduct(params.id))
    },[]);


    return (
        <div>
            <div className="container">
                <div className='product'>

                    <div className="product__top">
                        <div className="product__top-images">
                            <Swiper initialSlide={1} navigation={true} loop={true} modules={[Navigation]} className="mySwiper product__top-imgPlace">
                                {
                                    status === 'loading' ?
                                    <div className='product__top-loading'>
                                        <ProductDetails/>
                                    </div>
                                    :
                                   JSON.stringify(oneProduct) !== '{}'  && oneProduct.images.map((img, idx) => img &&
                                        (
                                            <SwiperSlide>
                                                <img className='product__top-image'
                                                     src={`${process.env.REACT_APP_URL}${img}`}
                                                     alt=''/>
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
                                                            <img className='product__top-image'
                                                                 src={`${process.env.REACT_APP_URL}${img}`}
                                                                 alt=''/>
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
                                <span className='product__top-pickNum'>
                                    <button className='product__top-pickBtn left'>-</button>
                                    <input className='product__top-pickInput' type="number" defaultValue={1}/>
                                    <button className='product__top-pickBtn right'>+</button>
                                </span>
                                <button className='product__top-pickAdd'><MdOutlineAddShoppingCart/> В корзину</button>
                                <span className='product__top-pickFav'>
                                    <MdFavorite/>
                                </span>
                            </div>
                            <p>ui</p>
                        </div>

                    </div>
                    <div className="product__info">

                    </div>
                </div>

            </div>


            <div className="container">
                <h2 className='home__cardBlock-title'>Вам так же понравится</h2>

                <div className='home__cardBlock-row'>
                    <Swiper navigation={true} slidesPerView={'4'} modules={[Navigation]} className="mySwiper">
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