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
import {GiHamburgerMenu} from 'react-icons/gi';

import FavoritesCardLoaded from "../Favorites/FavoritesCardLoaded";

const animatedComponents = makeAnimated();
const Catalog = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearFilters({page: params.page}))
    }, []);

    const {status, products, productsCount, watchedProducts, error, filter} = useSelector(s => s.clothes);
    const {reset, handleSubmit, register} = useForm();
    const pagesPaginate = [];
    new Array(Math.ceil(productsCount / filter.limit)).fill(null, 0).map((p, idx) => {
        pagesPaginate.push({id: idx, value: idx + 1, label: `${idx + 1}`})
    })
    useEffect(() => {
        dispatch(getProducts({
            category: filter.category,
            brand: filter.brand,
            title: filter.title,
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
            category: [''],
            title: '',
            from: filter.range.from,
            to: filter.range.to,
            page: '1',
            limit: 12,
            desc: false
        }));
        window.scrollTo(0, 0);
        // ???????????? ??????????????
    };
    const [value, setValue] = React.useState([filter.range.from, filter.range.to]);
    const [side, setSide] = useState(false);


    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        dispatch(changeRange({from: newValue[0], to: newValue[1]}));
        console.log(newValue);
        dispatch(switchPage(1));
        navigate('/catalog/1')
    };
    const productsOnPage = (count) => {
        filter.limit !== count &&
        dispatch(changeProductLimit({limit: count, page: '1'}));
        navigate('/catalog/1')
    };
    const clickedPagination = (pageBtn) => {
        filter.page !== pageBtn &&
        dispatch(switchPage(pageBtn));
        navigate(`/catalog/${pageBtn}`)
    };
    const filterCategories = (target) => {
        const categories = target.map(obj => obj.value);
        dispatch(clearFilters({category: categories}));
        // alert(JSON.stringify(categories))
    };
    const filterBrands = (target) => {
        const categories = target.map(obj => obj.value);
        dispatch(clearFilters({brand: categories}));
        // alert(JSON.stringify(categories))
    };

    const setSort = (target) => {
        const sign = target.value;
        sign === '???? ?????????????????????? ????????' && dispatch(clearFilters({desc: false}));
        sign === '???? ???????????????? ????????' && dispatch(clearFilters({desc: true}));
    };

    return (
        <div className=''>
            <div className="container">
                <div className="catalog">
                    <p className={`catalog__sidebar-burger ${side && 'active'}`} onClick={() => setSide(!side)}> </p>
                    <form className={`catalog__sidebar ${side && 'active'}`} onSubmit={handleSubmit(onSubmit)}>
                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>?????????????????????? ?? ??????????</h3>
                            <div>
                                <Select
                                    onChange={(target) => filterCategories(target)}
                                    placeholder={'?????????? ???? ????????????????????'}
                                    isMulti
                                    name="categories"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={
                                        params.category === 'clothes' ?
                                            [
                                                {id: 1, value: 'hoodie', label: '??????????????????'},
                                                {id: 2, value: 'form', label: '??????????'},
                                                {id: 3, value: 'pants', label: '??????????'},
                                                {id: 4, value: 'socks', label: '??????????'},
                                                {id: 4, value: 'accessories', label: '????????????????????'},
                                            ] : params.category === 'shoes' ?
                                                [
                                                    {id: 1, value: 'basketball', label: '??????????????????????????'},
                                                    {id: 2, value: 'street', label: '??????????????'},
                                                    {id: 3, value: 'premium', label: '??????????????'},
                                                    {id: 4, value: 'other', label: '????????????'},
                                                ] : params.category === 'other' ?
                                                    [
                                                        {id: 1, value: 'ball', label: '????????'},
                                                        {id: 2, value: 'attribute', label: '????????????????????'},
                                                        {id: 3, value: 'decorations', label: '??????????????????'},
                                                        {id: 4, value: 'other', label: '????????????'},
                                                    ] : []

                                    }
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                            <div>
                                <Select
                                    onChange={(target) => filterBrands(target)}
                                    placeholder={'?????????? ???? ??????????????'}
                                    isMulti
                                    name="brands"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[
                                        {id: 1, value: 'jordan', label: 'jordan'},
                                        {id: 2, value: 'adidas', label: 'adidas'},
                                        {id: 3, value: 'nike', label: 'nike'},
                                        {id: 4, value: 'puma', label: 'puma'},
                                    ]}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>

                            <div>
                                <span>???????????????????? ????</span>
                                <Select
                                    onChange={(e) => productsOnPage(+e.value)}
                                    placeholder={filter.limit + ' ????'}
                                    className='catalog__sidebar-select'
                                    options={[
                                        {id: 1, value: '12', label: '12 ????'},
                                        {id: 2, value: '24', label: '24 ????'},
                                        {id: 3, value: '48', label: '48 ????'},
                                        {id: 4, value: '96', label: '96 ????'},
                                    ]}
                                />
                            </div>
                            <div>
                                <span>???????????? ???? ???????????????? {filter.page} ???? {pagesPaginate.length}</span>
                                <Select
                                    className='catalog__sidebar-select'
                                    onChange={(e) => {
                                        clickedPagination(e.value)
                                    }}
                                    placeholder={params.page}
                                    options={pagesPaginate}
                                />

                            </div>

                            <div>
                                <span>??????????????</span>
                                <Select
                                    onChange={(e) => setSort(e)}
                                    className='catalog__sidebar-select'
                                    defaultValue={{id: 1, value: '???? ??????????????????', label: '???? ??????????????????'}}
                                    options={[
                                        {id: 1, value: '???? ??????????????????', label: '???? ??????????????????'},
                                        {id: 2, value: '???? ????????????????????????', label: '???? ????????????????????????'},
                                        {id: 3, value: '???? ?????????????????????? ????????', label: '???? ?????????????????????? ????????'},
                                        {id: 4, value: '???? ???????????????? ????????', label: '???? ???????????????? ????????'},
                                        {id: 5, value: '???? ????????????????', label: '???? ????????????????'},
                                        {id: 6, value: '???? ????????????', label: '???? ????????????'},
                                        {id: 7, value: '???? ????????????????', label: '???? ????????????????'},
                                    ]}
                                />
                            </div>
                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3>????????</h3>

                            <Slider
                                defaultValue={value}
                                onChange={debounce(rangeSelector, 1500)}
                                valueLabelDisplay="auto"
                                step={10}
                                min={0}
                                max={20000}
                            />
                            ???????? ???? {value[0]}?? ???? {value[1]}??
                        </div>


                        <div className={'catalog__sidebar-categories simpleText'}>

                            <h3 className='catalog__sidebar-title'>????????????</h3>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={50} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-50
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={49} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-49
                            </label>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={48} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-48
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={47} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-47
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={46} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-46
                            </label>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={45} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-45
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={44} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-44
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={43} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-43
                            </label>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={42} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-42
                            </label>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={41} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-41
                            </label>

                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={40} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-40
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={38} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-38
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={37} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-37
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('sizes')}
                                       value={36} className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/> US-36
                            </label>

                        </div>
                        <h3>??????????</h3>
                        <div className={'catalog__sidebar-categories simpleText'}>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='jordan' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Jordan
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='adidas' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>adidas
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='nike' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Nike
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='puma' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Puma
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='converse' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>Converse
                            </label>
                            <label className={'catalog__sidebar-category'}>
                                <input {...register('brand')}
                                       value='AAPE' className={'catalog__sidebar-category_box'} type="checkbox"
                                       onClick={(e) => console.log(e.target)}/>
                                <span className="category_box"/>AAPE
                            </label>


                        </div>

                        <div className={'catalog__sidebar-categories simpleText'}>

                            {/*<h3>????????</h3>*/}
                            {/*<label  className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'white'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>??????????*/}
                            {/*</label>*/}

                            {/*<label  className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'black'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>????????????*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input value={'red'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*           onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>??????????????*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'Beige'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>??????????????*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'blue'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>??????????*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'lightgreen'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>??????????????*/}
                            {/*</label>*/}

                            {/*<label   className={'catalog__sidebar-category'}>*/}
                            {/*    <input*/}
                            {/*        value={'prints'} className={'catalog__sidebar-category_box'} type="checkbox"*/}
                            {/*        onClick={(e) => console.log(e.target)}/>*/}
                            {/*    <span className="category_box"/>????????????*/}
                            {/*</label>*/}

                        </div>
                        <button className={'catalog__sidebar-reset'} onClick={handleSubmit(resetSelect)}>????????????????
                        </button>
                        <button type='submit' className='catalog__sidebar-found'>
                            ?????????????? ??????????????: <span className='catalog__sidebar-found_count'>{productsCount}</span>
                        </button>

                    </form>


                    <div className={'catalog__list'}>
                        <p>??????????????/ ??????????????</p>
                        <p>{Array.isArray(filter?.category) && filter?.category.map(el => (
                            <span>{el}/  </span>
                        ))}</p>
                        <p>
                            {params.category && '?? ???????? ?????????????????????????? ?????????????????? ???????????? ???????????????? ???????? ???????? ???????????????????????? ??????????????.' +
                            ' ?????????????? Air Jordan 7 ???????????????? ?? 1992 ????????. ???? ???????????? ?????????????????? ???????????????? ?????????????????????? ????????????, ?????????????????? ????????????????????' +
                            ' Nike ???????????????? ?????????????????? ???? ?????????? ?????????????? ?????????????? ?? ???????????? ????????????????. ???? ?????????????? ?????? ???????????????????? ?????????? ?? ?????????????? ?????????? ????????????????????????' +
                            ' ????????????????????. ?????? ???????????? ????????????, ?????????????? ?????????????????? ?????????? ?? ???????????????? ??????????, ?????????????? Air Bag ?? ??????????. Air Jordan 7 Retro ?????????????? ????????????' +
                            ' ???????? ?? ?????????????? ????????????, ???????????? ?? ???????? ????????????????????, ?????????????? ???????????? ???????? ?????????????? ?? ???????????? ???? ?????????????????? 1992 ????????. ?????????????????? ???????????? ????????????????' +
                            ' - Air Jordan 7, ???? ???????????? ???????????? ?? ?????????????????????????? ???????????????? Basketroom.ru'}</p>
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
                            {/*<button onClick={() => productsOnPage(filter.limit + 3)} className='catalog__list-paginateMore'>{status === 'loading' ? '??????????????????' : '???????????????? ??????'}</button>*/}
                            <div className='catalog__list-paginateBtns'>
                                {
                                    new Array(Math.ceil(productsCount / filter.limit)).fill(null, 0).map((p, idx) => (
                                        <button
                                            onClick={(e) => {
                                                clickedPagination(e.target.textContent);
                                                navigate(`/catalog/${idx + 1}`)
                                            }}
                                            className={`catalog__list-paginateBtn ${filter.page == (idx + 1) && 'active'}`}>{idx + 1}</button>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>


                {
                    watchedProducts?.length > 4 &&
                    <>
                        <h2 className='home__cardBlock-title'>?????????? ?????????????????????????? ????????????</h2>

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