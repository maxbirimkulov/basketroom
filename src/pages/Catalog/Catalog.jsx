import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Link, useNavigate, useParams} from "react-router-dom";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import makeAnimated from 'react-select/animated';
import Slider from '@material-ui/core/Slider';
import debounce from "@material-ui/core/utils/debounce";
import Card from "../../components/Card/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, changeRange, changeProductLimit, switchPage, clearFilters} from "../../redux/clothes";
import Select from 'react-select';

import FavoritesCardLoaded from "../Favorites/FavoritesCardLoaded";
const animatedComponents = makeAnimated();
const Catalog = ({side}) => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        dispatch(clearFilters({page: params.page}))
    },[]);

    const {status, products, productsCount, error, filter} = useSelector(s => s.clothes);
    const {reset, handleSubmit, register} = useForm();
    const pagesPaginate = [

    ];
    new Array(Math.ceil(productsCount / filter.limit)).fill(null,0).map((p, idx) =>{
        pagesPaginate.push({ id: idx, value: idx + 1, label: `${idx + 1}` })
    })
    useEffect(() => {
        dispatch(getProducts({category: filter.category, title: filter.title, from: filter.range.from, to: filter.range.to, page: filter.page, limit: filter.limit ,desc: filter.desc }))
    },[filter]);


    const onSubmit = (data) => alert(JSON.stringify(data));
    const resetSelect = () => {
        reset();
        navigate('/catalog/1');
        dispatch(clearFilters({category: '', title: '', from: filter.range.from, to: filter.range.to, page: '1', limit: 12 ,desc: false }));
        window.scrollTo(0, 0);
        // убрать фильтры
    };
    const [value, setValue] =  React.useState([filter.range.from / 200, filter.range.to / 200]);




    const rangeSelector = (event, newValue) => {
           setValue(newValue);
            dispatch(changeRange({from: newValue[0] * 200, to: newValue[1] * 200}));
        console.log(newValue);
        dispatch(switchPage(1));
        navigate('/catalog/1')
    };
    const productsOnPage = (count) =>{
        filter.limit !== count &&
        dispatch(changeProductLimit({limit:count, page: '1'}));
        navigate('/catalog/1')
    };
    const clickedPagination = (pageBtn) =>{
        filter.page !== pageBtn &&
        dispatch(switchPage(pageBtn));
        navigate(`/catalog/${pageBtn}`)
    };
    const filterCategories = (target) =>{
        const categories = target.map(obj => obj.value);
        dispatch(clearFilters({category: categories}));
        // alert(JSON.stringify(categories))
    };
    const setSort = (target) =>{
        const sign = target.value;
        sign === 'По возростанию цены' && dispatch(clearFilters({desc: false}));
        sign === 'По убыванию цены' && dispatch(clearFilters({desc: true}));
    };

    return (
        <div className=''>
            <div className="container">
                <div className="catalog">

                    <form className={`catalog__sidebar ${side && 'active'}`} onSubmit={handleSubmit(onSubmit)}>
                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Отображение и поиск</h3>
                            <div>
                                <Select
                                    onChange={(target) => filterCategories(target)}
                                    defaultValue={[{ id: 2, value: 'sneakers', label: 'sneakers' }]}
                                    placeholder={'Посик по категориям'}
                                    isMulti
                                    name="categories"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[
                                        { id: 1, value: 'hoody', label: 'hoody' },
                                        { id: 2, value: 'sneakers', label: 'sneakers' },
                                        { id: 3, value: 'sport suit', label: 'sport suit' },
                                        { id: 4, value: 'uniform', label: 'uniform' },
                                    ]}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                              <div>
                                <Select
                                    onChange={(target) => alert(JSON.stringify(target))}
                                    defaultValue={[]}
                                    placeholder={'Посик по брендам'}
                                    isMulti
                                    name="brands"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[
                                        { id: 1, value: 'Jordan', label: 'Jordan' },
                                        { id: 2, value: 'adidas', label: 'adidas' },
                                        { id: 3, value: 'Nike', label: 'Nike' },
                                        { id: 4, value: 'Puma', label: 'Puma' },
                                    ]}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>

                            <div>
                                <span>Отображать по</span>
                                <Select
                                    onChange={(e) => productsOnPage(+e.value)}
                                    placeholder={filter.limit + ' шт'}
                                    className='catalog__sidebar-select'
                                options={[
                                    { id: 1, value: '12', label: '12 шт' },
                                    { id: 2, value: '24', label: '24 шт' },
                                    { id: 3, value: '48', label: '48 шт' },
                                    { id: 4, value: '96', label: '96 шт' },
                                ]}
                                />
                            </div>
                             <div>
                                <span>Сейчас на странице {filter.page}</span>
                                 <Select
                                     className='catalog__sidebar-select'
                                     onChange={(e) =>{clickedPagination(e.value)}}
                                     placeholder={params.page}
                                     options={pagesPaginate}
                                 />

                            </div>

                             <div>
                                <span>Порядок</span>
                                 <Select
                                     onChange={(e) => setSort(e)}
                                     className='catalog__sidebar-select'
                                     defaultValue={{ id: 1, value: 'По умолчанию', label: 'По умолчанию' }}
                                     options={[
                                         { id: 1, value: 'По умолчанию', label: 'По умолчанию' },
                                         { id: 2, value: 'По популярности', label: 'По популярности' },
                                         { id: 3, value: 'По возростанию цены', label: 'По возростанию цены' },
                                         { id: 4, value: 'По убыванию цены', label: 'По убыванию цены' },
                                         { id: 5, value: 'По новинкам', label: 'По новинкам' },
                                         { id: 6, value: 'По скидке', label: 'По скидке' },
                                         { id: 7, value: 'По алфавиту', label: 'По алфавиту' },
                                     ]}
                                 />
                            </div>
                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Цена</h3>

                            <Slider

                                defaultValue={value}
                                onChange={debounce(rangeSelector,1500)}
                                valueLabelDisplay="auto"
                            />
                            Цена от {value[0] * 200}р  до {value[1] * 200}р
                        </div>


                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3 className='catalog__sidebar-title'>Размер</h3>

                            <label   className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-50
                            </label>
                             <label   className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={49} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-49
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={48} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-48
                            </label>
                            <label   className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={47} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-47
                            </label>
                            <label   className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={46} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-46
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={45} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-45
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={44} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-44
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={43} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-43
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={42} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-42
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={41} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-41
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={40} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-40
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={38} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-38
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={37} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-37
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                    value={36} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-36
                            </label>

                        </div>
                        <h3>Бренд</h3>
                        <div className={'catalog__sidebar-categories simpleText'}>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                     value='jordan' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Jordan
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='adidas' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>adidas
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='nike' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Nike
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='puma' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Puma
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='converse' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Converse
                            </label>
                            <label  className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='AAPE' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>AAPE
                            </label>


                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>Цвет</h3>
                            <label  className={'catalog__sidebar-category'}>
                                <input value={'white'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Белый
                            </label>

                            <label  className={'catalog__sidebar-category'}>
                                <input value={'black'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Черный
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input value={'red'} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Красный
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'Beige'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Бежевый
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'blue'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Синий
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'lightgreen'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Зеленый
                            </label>

                            <label   className={'catalog__sidebar-category'}>
                                <input
                                    value={'prints'} className={'catalog__sidebar-category_box'} type="checkbox"
                                    onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Принты
                            </label>

                        </div>
                        <button className={'catalog__sidebar-reset'} onClick={handleSubmit(resetSelect)}>Сбросить</button>
                        <button type='submit' className='catalog__sidebar-found'>
                            Найдено товаров: <span className='catalog__sidebar-found_count'>{productsCount}</span>
                        </button>

                    </form>




                    <div className={'catalog__list'}>
                        <p>Главная/ мужские</p>
                        <p>{params.category}</p>
                        <p>{params.category && 'У всех баскетбольных кроссовок Майкла Джордана есть своя неповторимая история.' +
                        ' История Air Jordan 7 началась в 1992 году. На силуэт кроссовок повлияли африканские мотивы, увиденные дизайнером' +
                        ' Nike Тинкером Хатфилдом на одном уличном постере в городе Портланд. На плакате был чернокожий певец с гитарой форме африканского' +
                        ' континента. Это первая модель, которая поставила точку в открытом глазу, баллону Air Bag в пятке. Air Jordan 7 Retro сыграли важную' +
                        ' роль в карьере Майкла, именно в этих кроссовках, Джордан привел свою команду к победе на олимпиаде 1992 года. Кроссовки Майкла Джордана' +
                        ' - Air Jordan 7, вы можете купить в баскетбольном магазине Basketroom.ru'}</p>
                        <div className="catalog__list-products">
                            {
                                status === 'loading' ?
                                    <>
                                        {
                                            new Array(filter.limit).fill(null, 0).map(() => (
                                                <div className="catalog__productCard">
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


                        <div className='catalog__list-paginate'>
                            {/*<button onClick={() => productsOnPage(filter.limit + 3)} className='catalog__list-paginateMore'>{status === 'loading' ? 'Загружаем' : 'Показать еще'}</button>*/}
                            <div className='catalog__list-paginateBtns'>
                                {
                                    new Array(Math.ceil(productsCount / filter.limit)).fill(null,0).map((p, idx) =>(
                                        <button
                                            onClick={(e) =>{ clickedPagination(e.target.textContent); navigate(`/catalog/${idx + 1}`)}}
                                            className={`catalog__list-paginateBtn ${filter.page == (idx + 1) && 'active'}`}>{idx + 1}</button>
                                    ))
                                }
                            </div>
                        </div>

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