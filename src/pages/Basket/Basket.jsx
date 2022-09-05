import React from 'react';
import {FaTrash} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {findUser} from "../../redux/user";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";


const Basket = () => {
    const user = useSelector(s => s.user.user);
    let price = user?.cart?.reduce((acc, rec) => acc + rec.price, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = (text) =>toast(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        className: 'toast-message',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const clearCart = (product) =>{
        const user = JSON.parse(localStorage.getItem('user')) || {favourites:[], cart:[]};
        localStorage.setItem('user', JSON.stringify({
            ...user, cart:
                user?.cart.findIndex(el => el._id === product._id) >= 0 ?
                    user?.cart.filter((el) => el._id !== product._id) :
                    [...user.cart, {...product}]
        }));
        user?.cart.findIndex(el => el._id === product._id) >= 0 ?
            notify('Убрано') : notify('Добавлено в корзину👌');
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };
    const getProductToPage = (id) =>{
        navigate(`/product/${id}`);
        window.scrollTo(0,0);
    };

    return (
            <div className="container">

                <div className='basket'>
                    <div className='basket__list'>

                        {
                            user?.cart.map(item => (
                                <div className='basket__card'>
                                    <div onClick={() => getProductToPage(item._id)} className='basket__card-img' style={{background:`url(${`${process.env.REACT_APP_URL}${item?.images[0]}`})center/cover no-repeat`}}> </div>
                                    <div className='basket__card-info'>
                                        <p onClick={() => getProductToPage(item._id)} className='basket__card-name'>{item.title}</p>
                                        <p className='basket__card-size'>Размер: 12 US-46 EUR-30 cm</p>
                                        <p className='basket__card-price'>{item.price} руб</p>
                                    </div>
                                    <button className='basket__card-btn' onClick={() => clearCart(item)}><FaTrash/></button>
                                </div>
                            ))
                        }




                    </div>
                    <div className='basket__info'>
                        <p className='basket__info-title'>Скидки:</p>
                        <div className='basket__info-nums'>
                            <span>Скидка 0%</span>
                            <span>- 0 руб</span>
                        </div>
                        <div className='basket__info-nums basket__info-title'>
                            <span>Итого:</span>
                            <span>{price || '51354'} руб</span>
                        </div>
                        <p className=''>У вас есть промо-код?</p>

                    </div>
                </div>

                <ToastContainer
                    position="bottom-left"
                    closeOnClick={true}
                />
            </div>
    );
};

export default Basket;