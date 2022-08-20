import {Link} from "react-router-dom";
import CardRow from "../../components/CardRow/CardRow";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Product = () => {
    return (
        <div>
            <div className="container">
                <div className='product'>

                    <div className="product__top">
                        <div className="product__top-images">
                            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2863/575753007/large_Air_Jordan_1___Black_Toe__-10.jpeg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2848/575752992/large_Air_Jordan_1___Black_Toe__-01.jpeg"/>
                                </SwiperSlide>
                            </Swiper>
                            <div className='product__top-gallery'>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2863/575753007/large_Air_Jordan_1___Black_Toe__-10.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2848/575752992/large_Air_Jordan_1___Black_Toe__-01.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>
                                <div className='product__top-gallery-block'>
                                    <img className='product__top-image' src="https://static.insales-cdn.com/images/products/1/2825/575752969/large_Air_Jordan_1___Black_Toe__-.jpeg"/>
                                </div>

                            </div>
                        </div>

                        <div className='product__top-variables'>
                            <h3><Link className='product__top-link product__top-link-back' to={'/'}>Главная</Link> / <Link className='product__top-link ' to={'/'}>Мужские</Link> </h3>
                            <h2 className='product__top-title'>Air Jordan 1 'Black Toe'</h2>
                            <p className='product__top-price'>13127 руб</p>
                            <p className='product__top-comment'>Оставить отзыв</p>
                            <p className='product__top-text'>Кроссовки Майкла Джордана - Air Jordan 1 Retro. С этой модели начиналась история Jordan
                                Brand. Появившиеся на свет в 1988 году они поразили своим ярким дизайном, не
                                применяемым ни в одной баскетбольной обуви того времени. За что и штрафовали Майкла
                                на 5000 $ каждую игру, когда он появлялся в "единичках". Вся эта шумиха спровоцировала
                                огромный интерес к модели и Nike это было на руку. В итоге толпы фанатов выстраивались
                                в очередь, чтобы заполучить "запрещенную" модель Майкла Джордана. В наше время, Air
                                Jordan 1 Retro считаются настоящей иконной стиля, которой хочется обладать. Кроссовки
                                мужские Air Jordan 1 'Black Toe', вы можете купить в баскетбольном магазине Basketroom.ru
                            </p>
                            <p className='product__top-sizesText'>Размер</p>
                            <div className='product__top-sizes'>
                                <button className='product__top-size active'>12 US-46 EUR-30 cm</button>
                                <button className='product__top-size'>11 US-45 EUR-29 cm</button>

                            </div>
                            <p className='product__top-return'>Обмен/Возврат в течение 14 дней</p>

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
                <div className="home__salesStimulus">
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4255/16494751/original/%D0%9F%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0__05__3ffcae16669ad3b599bf519ce26b486b.png" alt=""/>
                    </div>
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4301/16494797/original/Преимущества__04__2bba2fc8bf9a979406669c09ef337f31.png" alt=""/>
                    </div>
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4258/16478370/original/Преимущества__03_.png" alt=""/>
                    </div>
                    <a href='#' className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/3182/16559214/original/Преимущества__02__91192c81fb591590a33bf5a2c075629b.png" alt=""/>
                    </a>
                    <a href='#' className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/3179/16559211/original/Преимущества__01__f1e3c8bfa54f2dd04c1d7ed16dee4c9d.png" alt=""/>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Product;