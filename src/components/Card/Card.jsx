import React from 'react';
import {IoHeartSharp} from 'react-icons/io5'
import {FaEye} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {useNavigate} from "react-router-dom";

const Card = ({page}) => {
    const navigate = useNavigate()
    return (

        <div className={`productCard ${page === 'fav' ? 'favorites' : page === 'slide' ? 'slide' : ''}`}>
            <div className='productCard__like'>

                {
                    page === 'fav' ? <FaTrash/> : <IoHeartSharp/>
                }
            </div>
            <img className="productCard__img" src="https://static.insales-cdn.com/r/K8uHL0vpTp0/rs:fit:420:420:1/plain/images/products/1/5428/446534964/large_Nike_PG_5__PlayStation_5__%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C_%D0%B2_Basketroom.ru_-.jpg"/>
            <p className='productCard__title'>Nike PG 5 'PlayStation 5'</p>

            <div className='productCard__bot'>
                <div>
                    <p>+ видео-обзор</p>
                    <span className='productCard__price'>4991 руб</span>
                </div>
                <button onClick={() =>{ navigate('/product'); window.scrollTo(0,0)}} className='productCard__btn'>{page === 'fav' ? 'Подробнее' : 'Выбрать'}<FaEye/></button>
            </div>
        </div>
    );
};

export default Card;