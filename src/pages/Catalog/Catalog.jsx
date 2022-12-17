import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import Card from "../../components/Card/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, switchPage, clearFilters} from "../../redux/clothes";
import {CgMenuGridO} from 'react-icons/cg';

import FavoritesCardLoaded from "../Favorites/FavoritesCardLoaded";
import SelectByCategory from "../../components/Selects/SelectByCategory/SelectByCategory";
import SelectByBrands from "../../components/Selects/SelectByBrands/SelectByBrands";
import SelectOnPageCount from "../../components/Selects/SelectOnPageCount/SelectOnPageCount";
import ShowPage from "../../components/Selects/ShowPage/ShowPage";
import SortType from "../../components/Selects/SortType/SortType";
import ChooseSizes from "../../components/Selects/ChooseSizes/ChooseSizes";
import ChooseBrand from "../../components/Selects/ChooseBrand/ChooseBrand";
import SelectPrice from "../../components/Selects/SelectPrice/SelectPrice";
import CatalogList from "../../components/CatalogList/CatalogList";
import CatalogPagination from "../../components/CatalogPagination/CatalogPagination";


const Catalog = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearFilters({page: params.page, brand: '', subcategory: '', category: params.category}));
        console.log(123)
        console.log(filter.category)
    }, [params.category]);

    const {productsCount, watchedProducts, filter} = useSelector(s => s.clothes);
    const {
        reset,
        handleSubmit,
        register
    } = useForm();
    const pagesPaginate = [];
    new Array(Math.ceil(productsCount / filter.limit)).fill(null, 0).map((p, idx) => {
        pagesPaginate.push({id: idx, value: idx + 1, label: `${idx + 1}`})
    });
    useEffect(() => {
        dispatch(getProducts({
            category: filter.category,
            brand: filter.brand,
            title: filter.title,
            subcategory: filter.subcategory,
            from: filter.range.from,
            to: filter.range.to,
            page: filter.page,
            limit: filter.limit,
            desc: filter.desc
        }))
    }, [filter]);
    const onSubmit = (data) => alert(JSON.stringify(data));
    const resetSelect = () => {
        reset();
        navigate('/catalog/1');
        dispatch(clearFilters({
            category: '',
            title: '',
            from: filter.range.from,
            to: filter.range.to,
            brand: '',
            page: '1',
            limit: 12,
            desc: false
        }));
        window.scrollTo(0, 0);
        // убрать фильтры
    };
    const [side, setSide] = useState(false);




    return (
        <div className=''>
            <div className="container">
                <div className="catalog">
                    <div  onClick={() => setSide(!side)} className={`catalog__sidebar-trigger ${side && 'active'}`}>
                        <CgMenuGridO/>
                        <p className={`catalog__sidebar-burger ${side && 'active'}`}> </p>
                    </div>
                    <form className={`catalog__sidebar ${side && 'active'}`} onSubmit={handleSubmit(onSubmit)}>
                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Отображение и поиск</h3>
                            <SelectByCategory/>

                            <SelectByBrands/>
                            <div>
                                <span>Отображать по</span>
                                <SelectOnPageCount/>
                            </div>
                            <div>
                                <span>Сейчас на странице {filter.page} из {pagesPaginate.length}</span>
                               <ShowPage/>
                            </div>
                            <div>
                                <span>Порядок</span>
                                <SortType/>
                            </div>
                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>
                           <SelectPrice/>
                        </div>
                        <div className={'catalog__sidebar-categories simpleText'}>
                            <h3 className='catalog__sidebar-title'>Размер</h3>
                            <ChooseSizes register={register}/>
                        </div>

                        <h3>Бренд</h3>
                        <div className={'catalog__sidebar-categories simpleText'}>
                            <ChooseBrand register={register}/>
                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            {/*<h3>Цвет</h3>*/}
                            {/*<label  className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'white'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Белый*/}
                            {/*</label>*/}

                            {/*<label  className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'black'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Черный*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'red'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Красный*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'Beige'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Бежевый*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'blue'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Синий*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'lightgreen'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Зеленый*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'prints'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>Принты*/}
                            {/*</label>*/}

                        </div>

                        <button className={'catalog__sidebar-reset'} onClick={handleSubmit(resetSelect)}>
                            Сбросить
                        </button>
                        <button type='submit' className='catalog__sidebar-found'>
                            Найдено товаров: <span className='catalog__sidebar-found_count'>{productsCount}</span>
                        </button>

                    </form>


                    <div className={'catalog__list'}>
                        <p>Главная/ мужские</p>
                        <p>{Array.isArray(filter?.category) ? filter?.category.map(el => (
                            <span>{el}/  </span>
                        )) : 'net category'}</p>
                        <p>
                            {params.category && 'У всех баскетбольных кроссовок Майкла Джордана есть своя неповторимая история.' +
                            ' История Air Jordan 7 началась в 1992 году. На силуэт кроссовок повлияли африканские мотивы, увиденные дизайнером' +
                            ' Nike Тинкером Хатфилдом на одном уличном постере в городе Портланд. На плакате был чернокожий певец с гитарой форме африканского' +
                            ' континента. Это первая модель, которая поставила точку в открытом глазу, баллону Air Bag в пятке. Air Jordan 7 Retro сыграли важную' +
                            ' роль в карьере Майкла, именно в этих кроссовках, Джордан привел свою команду к победе на олимпиаде 1992 года. Кроссовки Майкла Джордана' +
                            ' - Air Jordan 7, вы можете купить в баскетбольном магазине Basketroom.ru'}</p>
                        <div className="catalog__list-products">
                            <CatalogList/>
                        </div>

                        <CatalogPagination/>

                    </div>

                </div>


                {
                    watchedProducts?.length > 4 &&
                    <>
                        <h2 className='home__cardBlock-title'>Ранее просмотренные товары</h2>

                        <div className='home__cardBlock-row'>
                            <Swiper navigation={true} slidesPerView={'4'} modules={[Navigation]}
                                    breakpoints={ {
                                            960: {
                                        slidesPerView: '4',
                                    },
                                        720: {
                                        slidesPerView: 3,
                                    },
                                        540: {
                                        slidesPerView: 2,
                                    },
                                        0: {
                                        slidesPerView: 1,
                                    },
                                    }   }
                                    className="mySwiper">
                                {
                                    watchedProducts?.map(pare => (
                                        <SwiperSlide><Card product={pare} page={'slide'}/></SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                    </>
                }


            </div>

            <SalesInfo/>
        </div>
    );
};

export default Catalog;