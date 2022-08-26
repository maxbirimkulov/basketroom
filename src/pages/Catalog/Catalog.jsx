import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Link, useNavigate, useParams} from "react-router-dom";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CardRow from "../../components/CardRow/CardRow";
import Card from "../../components/Card/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/clothes";
import CatalogCardLoaded from "./CatalogCardLoaded";
import FavoritesCardLoaded from "../Favorites/FavoritesCardLoaded";

const Catalog = ({side}) => {
    const {status, products, error, filter} = useSelector(s => s.clothes);
    const navigate = useNavigate();

    const {reset, handleSubmit, register} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts({category:'sneakers', title: filter.title, from: '0', to: '200000', page: '1', desc: true }))
    },[filter]);


    const resetSelect = () => {
        reset();
        window.scrollTo(0, 0);

    };
    const [value, setValue] =  React.useState([20,100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };



    return (
        <div className=''>
            <div className="container">
                <div className="catalog">

                    <form className={`catalog__sidebar ${side && 'active'}`}>
                        <h3>Цена</h3>

                        <Slider
                            value={value}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                        />
                        Price is between {value[0] * 100}  and {value[1] * 150}



                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Размер</h3>

                            <label   className={'catalog__sidebar-category'}>
                                <input {...register('xxs')}
                                       value={38} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) =>''}/>
                                <span className="category_box"/>12 US-46 EUR-30 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={40} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>11 US-45 EUR-29 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={42} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>10 US-44 EUR-28 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={44} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>9.5 US-43 EUR-27.5 cm
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={46} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>8.5 US-42 EUR-26.5 cm
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={48} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>8 US-41 EUR-26 cm
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>7 US-40 EUR-25 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>7 US-38 EUR-24 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>5 US-37 EUR-23.5 cm
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input
                                    value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>4 US-36 EUR-23 cm
                            </label>

                        </div>
                        <p>Бренд</p>
                        <div className={'catalog__sidebar-categories simpleText'}>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'dress'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>Jordan
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'skirt'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>adidas
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'blouses'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>Nike
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'top,t-shirt'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>Puma
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'top,t-shirt'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>Converse
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'top,t-shirt'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => ''}/>
                                <span className="category_box"/>AAPE
                            </label>

                            <p>Пол</p>
                            <p className={'catalog__sidebar-category'}>
                                <input className={'catalog__sidebar-category_box'} id={'Худи, свитшоты'} type="checkbox"/>
                                <span className="category_box"/>
                                <label htmlFor="Худи, свитшоты">Мужчины</label>
                            </p>
                            <p className={'catalog__sidebar-category'}>
                                <input className={'catalog__sidebar-category_box'} id={'Жакеты, жилеты'} type="checkbox"/>
                                <span className="category_box"/>
                                <label htmlFor="Жакеты, жилеты">Женщины</label>
                            </p>

                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Цвет</h3>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'white'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) =>''}/>
                                <span className="category_box"/>Белый
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input value={'black'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) =>''}/>
                                <span className="category_box"/>Черный
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input value={'red'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) =>''}/>
                                <span className="category_box"/>Красный
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'Beige'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>Бежевый
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'blue'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>Синий
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'lightgreen'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>Зеленый
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'prints'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) =>''}/>
                                <span className="category_box"/>Принты
                            </label>

                        </div>
                        <button className={'catalog__sidebar-reset'} onClick={handleSubmit(resetSelect)}>Сбросить</button>
                        <div className='catalog__sidebar-found'>
                            Найдено товаров: <span className='catalog__sidebar-found_count'>759</span>
                        </div>

                    </form>

                    <div className={'catalog__list'}>
                        {
                            status === 'loading' ?
                            <>
                                {
                                    new Array(8).fill(null, 0).map(() => (
                                        <div className="catalog__productCard">
                                            {/*<CatalogCardLoaded/>*/}
                                            <FavoritesCardLoaded/>
                                        </div>
                                    ))
                                }
                            </>
                                :
                                products?.map(pare => (
                                    <div key={pare?.id} className="catalog__productCard">
                                        <Card product={pare}/>
                                    </div>
                                ))
                        }
                        {
                            error && <h2>An error occerd: {error}</h2>
                        }




                    </div>

                </div>
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

            <SalesInfo/>
        </div>
    );
};

export default Catalog;