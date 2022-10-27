import React, {useEffect, useRef, useState} from 'react';
import CreateSizes from "./CreateSizes/CreateSizes";
import axios from "../../axios";
import ClothesAddBtn from "./ClothesAddBtn/ClothesAddBtn";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const ClothesAdd = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: 'onBlur'
    });

    const navigate = useNavigate();

    const [colors, setColors] = useState('');
    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    const [image6, setImage6] = useState('');
    const [image7, setImage7] = useState('');
    const [image8, setImage8] = useState('');
    const [image9, setImage9] = useState('');
    const [image10, setImage10] = useState('');


    const [category, setCategory] = useState('shoes')
    const [subCategory, setSubCategory] = useState('basketball')

    const addClothe = (data) => {
        try {
            setLoading(true);
            axios.post('/clothes', {
                ...data,
                sizes,
                images,
                "category": category,
                "subcategory": subCategory
            }).then(() => {
                setLoading(false);

                toast("Продукт успешно создан");
                reset()
            }).catch(() => {
                toast("Ошибка при создании продукта")
            })
        } catch (err) {
            toast("Ошибка при создании продукта")
        }
    };

    useEffect( () => {
        setImages([image1,image2,image3,image4, image5, image6, image7, image8, image9, image10])
    }, [image1,image2,image3,image4, image5, image6, image7, image8, image9, image10]);

    return (
        <form className='create__form-content' onSubmit={handleSubmit(addClothe)}>
            <div className='create__form-block'>
                <label className='create__form-label' htmlFor="title">Название</label>
                <input {...register('title', {
                    required: 'Это поле обязательное *',
                })} className='create__form-input'  type="text" id='title'/>
                <span>{errors?.title?.message}</span>
            </div>
            <div className='create__form-block'>
                <label className='create__form-label' htmlFor="price">Цена</label>
                <input {...register('price', {
                    required: 'Это поле обязательное *',
                })} className='create__form-input'  type="number" id='price'/>
                <span>{errors?.price?.message}</span>
            </div>
            <div className='create__form-block create__form-block-check'>
                <label className='create__form-label ' htmlFor="inStock">В наличии</label>
                <input {...register('inStock' )} className=' create__form-input-checkbox'  type="checkbox" id='inStock'/>
                <span>{errors?.inStock?.message}</span>
            </div>
            <ul style={{display:"flex", flexDirection:"column", rowGap:"10px", alignItems: "flex-start"}} className='create__form-block'>
                <ClothesAddBtn images={image1} setImages={setImage1} num={1}/>
                <ClothesAddBtn images={image2} setImages={setImage2} num={2}/>
                <ClothesAddBtn images={image3} setImages={setImage3} num={3}/>
                <ClothesAddBtn images={image4} setImages={setImage4} num={4}/>
                <ClothesAddBtn images={image5} setImages={setImage5} num={5}/>
                <ClothesAddBtn images={image6} setImages={setImage6} num={6}/>
                <ClothesAddBtn images={image7} setImages={setImage7} num={7}/>
                <ClothesAddBtn images={image8} setImages={setImage8} num={8}/>
                <ClothesAddBtn images={image9} setImages={setImage9} num={9}/>
                <ClothesAddBtn images={image10} setImages={setImage10} num={10}/>
            </ul>
            <div className='create__form-block'>
                <label htmlFor="category">Категория</label>
                <select onChange={(e) => setCategory(e.target.value)}  className='create__form-select'  id='category'>
                    <option value='shoes'>Обувь</option>
                    <option value='clothes'>Одежда</option>
                    <option value='other'>Другое</option>
                </select>
            </div>

            <div>
                <div className='create__form-sizes'>
                    {
                        category !== 'other' ? <p className='create__form-sizes-text'>Выбрать размер :</p> : ''
                    }
                    {
                        category === 'shoes' ?
                            <div className='create__form-sizes-row'>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='35.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='36'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='36.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='37.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='38'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='38.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='39'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='40'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='40.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='41'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='42'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='42.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='43'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='44'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='44.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='45'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='45.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='46'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='47'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='47.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='48.5'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='49'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='50'/>
                            </div > : category === 'clothes' ?  <div  className='create__form-sizes-row'>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='XS'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='S'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='M'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='L'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='XL'/>
                                <CreateSizes sizes={sizes} setSizes={setSizes} size='XXL'/>
                            </div> : ''
                    }
                </div>

                {
                    category === 'shoes' ?

                        <div className='create__form-block'>
                            <label htmlFor="category">Подкатегория</label>
                            <select onChange={(e) => setSubCategory(e.target.value)}  className='create__form-select'  id='category'>
                                <option value='basketball'>Баскетбольные</option>
                                <option value='street'>Уличные</option>
                                <option value='premium'>Премиум</option>
                                <option value='other'>Другое</option>
                            </select>
                        </div>

                        : category === 'clothes' ?
                            <div className='create__form-block'>
                                <label htmlFor="category">Подкатегория</label>
                                <select onChange={(e) => setSubCategory(e.target.value)}  className='create__form-select'  id='category'>
                                    <option value='form'>Форма</option>
                                    <option value='hoodie'>Толстовки</option>
                                    <option value='pants'>Штаны</option>
                                    <option value='socks'>Носки</option>
                                    <option value='accessories'>Аксессуары</option>
                                </select>
                            </div>
                            : <div className='create__form-block'>
                                <label htmlFor="category">Подкатегория</label>
                                <select onChange={(e) => setSubCategory(e.target.value)}  className='create__form-select'  id='category'>
                                    <option value='ball'>Мячи</option>
                                    <option value='attribute'>Атрибутика</option>
                                    <option value='decorations'>Украшения</option>
                                    <option value='other'>Другое</option>
                                </select>
                            </div>
                }
            </div>
             <div className='create__form-block'>
                <label htmlFor="category">Бренд</label>
                <select {...register('brand', {
                    required: 'Это поле обязательное *',
                })} className='create__form-select'  id='brand'>
                    <option>adidas</option>
                    <option>nike</option>
                    <option>puma</option>
                    <option>jordan</option>
                </select>
            </div>
            <div className='create__form-block'>
                <label className='create__form-label' htmlFor="tag">Тег</label>
                <input {...register('tag')} className='create__form-input'  type="text"  id='tag'/>
                <span>{errors?.title?.message}</span>
            </div>
            <div className='create__form-block'>
                <label className='create__form-label' htmlFor="description">Описание товара</label>
                <textarea maxLength={250} {...register('description')} title='description' className='create__form-input create__form-textarea'  />
                <span>{errors?.title?.message}</span>
            </div>
            <button className='create__form-btn' type='submit'>Создать</button>
        </form>
    );
};

export default ClothesAdd;