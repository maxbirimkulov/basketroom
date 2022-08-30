import React, {useState} from 'react';
import {IoHeartSharp} from 'react-icons/io5'
import {FaEye} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findUser} from "../../redux/user";


const Card = ({page, video, product }) => {
    const getProductToPage = (id) =>{
        navigate(`/product/${id}`);
        window.scrollTo(0,0);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(s => s.user);

    const [changeImg, setChangeImg] = useState(0);

    const addFav = () => {

        const user = JSON.parse(localStorage.getItem('user')) || {favourites:[], cart:[]};
        localStorage.setItem('user', JSON.stringify({
            ...user, favourites:
                user.favourites.findIndex(el => el._id === product._id) >= 0 ?
                    user.favourites.filter((el) => el._id !== product._id) :
                    [...user.favourites, {...product}]
        }));
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };
    return (

        <div
               onMouseOut={() => setChangeImg(0)}
               className={`productCard ${page === 'fav' ? 'favorites' : page === 'slide' ? 'slide' : ''}`}>
            <div onClick={() => addFav()}  className='productCard__like'>
                {   page === 'fav' ? <FaTrash/> : <span style={{opacity:  user?.favourites?.findIndex(el => el._id === product._id) >= 0 ? '1' : '0.4'}}><IoHeartSharp/></span>   }
            </div>
            <div  onMouseEnter={() => setChangeImg(1)}
                  onClick={() => getProductToPage(product?._id)}
                  className='productCard__hover1'>
            </div>
            <div  onMouseEnter={() => setChangeImg(2)}
                  onClick={() => getProductToPage(product?._id)}
                  className='productCard__hover2'>
            </div>
            <div onClick={() => getProductToPage(product?._id)} className='productCard__hover3'> </div>
            {
                product ?
                    <div className="productCard__img" style={{background: `url(${`${process.env.REACT_APP_URL}${ product?.images[changeImg] || product?.images[0]}`})center/contain no-repeat`}}/>
                    :
                    <img className="productCard__img" src={`https://static.insales-cdn.com/r/K8uHL0vpTp0/rs:fit:420:420:1/plain/images/products/1/5428/446534964/large_Nike_PG_5__PlayStation_5__%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C_%D0%B2_Basketroom.ru_-.jpg`}/>
            }
            <p className='productCard__title'>{product?.title || 'Nike PG 5 \'PlayStation 5\''}</p>

            <div className='productCard__bot'>
                <div>
                    {   video && <p>+ видео-обзор</p>   }
                    <span className='productCard__price'>{product?.price || '4991'} руб</span>
                </div>
                <button onClick={() =>{getProductToPage(product?._id)}} className='productCard__btn'>{page === 'fav' ? 'Подробнее' : 'Выбрать'}<FaEye/></button>
            </div>
        </div>
    );
};

export default Card;