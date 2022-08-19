import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {NavLink, Link, useNavigate} from "react-router-dom";

import 'swiper/scss';
import "swiper/css/effect-fade";
import 'swiper/scss/pagination';
import "swiper/css/navigation";

import {A11y, EffectFade, EffectCards, EffectCube, Navigation, Autoplay, Keyboard, Mousewheel, Pagination, Scrollbar} from "swiper";

const Slider = () => {
    const navigate = useNavigate();

    return (
        <div className="home__slider">

            <Swiper
                // install Swiper modules
                modules={[EffectFade, EffectCards, EffectCube, Navigation, Keyboard, Autoplay, Mousewheel,  Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                navigation={true}
                // cssMode={true}
                // navigation={true}
                autoplay={{
                    delay: 10500,
                    disableOnInteraction: false,
                }}
                mousewheel={false}
                keyboard={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className={''}>
                    <div className="slide slide1">
                        <div className="container">
                            <div className="slide__wrapper">
                                <div className="slide__caption">

                                    <h3 className='slide__caption-title'>Air Jordan 1 Retro High</h3>
                                    <p className='slide__caption-text'>Stealth</p>

                                    <button className='slide__caption-btn'>Подробнее</button>
                                </div>
                                <img className="slide__image" src="https://static.insales-cdn.com/files/1/5430/22058294/original/Air_Jordan_1_Retro_High_OG__Stealth__.png"
                                     alt="#почтизадаром"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className="container">
                            <div className="slide__wrapper">
                                <div className="slide__caption">

                                    <h3 className='slide__caption-title'>Air Jordan 37</h3>
                                    <p className='slide__caption-text'>Satou Sabally</p>

                                    <button className='slide__caption-btn'>Подробнее</button>
                                </div>
                                <img className="slide__image" src="https://static.insales-cdn.com/files/1/1684/22169236/original/Air_Jordan_37__Satou_Sabally___ec9e71acc4eff08ee3690391c47bfaac.png"
                                     alt="Слайдер Блок 3"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>




        </div>
    );
};

export default Slider;