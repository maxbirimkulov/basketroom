import React from 'react';
import {FaTrash} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {findUser} from "../../redux/user";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


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
        const cart = document.querySelector('#cart');
        setTimeout(() =>{
            cart.classList.add('shake');
            setTimeout(() => {
                cart.classList.remove('shake');
            },500)
        },200);
        dispatch(findUser({user: {...user, cart:
                    user?.cart.findIndex(el => el._id === product._id) >= 0 ?
                        user?.cart.filter((el) => el._id !== product._id)
                        : [...user.cart, {...product}]
            }}));
        user?.cart.findIndex(el => el._id === product._id) >= 0 ?
            notify('Убрано') : notify('Добавлено в корзину👌');
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
                            user?.cart.length ?
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
                            )) :
                                <div className='basket__list-empty'>
                                    <h3 className='basket__list-empty_title'>В вашей корзине пусто</h3>
                                    <p className='basket__list-empty_text'>Перейти на <Link to={'/'} className='basket__list-empty_link'>  главную страницу</Link></p>
                                    <img className='basket__list-empty_img' src="https://static.insales-cdn.com/assets/1/3047/1813479/1652615264/empty.png" alt="empty basket"/>
                                </div>
                        }




                    </div>
                    <div className='basket__info'>
                        <div className='basket__info-block'>
                            {
                                user?.cart.length ?
                                <>
                                    <p className='basket__info-title'>Скидки:</p>
                                    <div className='basket__info-nums'>
                                        <span>Скидка 10%</span>
                                        <span className='basket__info-sale'>- {Math.ceil(price * .1) || 0} руб</span>
                                    </div>
                                </> : ''
                            }
                            <div className='basket__info-nums basket__info-title'>
                                <span>Итого:</span>
                                <span>{price || 0} руб</span>
                            </div>
                        </div>
                        {
                            user?.cart.length ?
                            <div className="basket__info-block">
                                <p className=''>У вас есть промо-код?</p>
                                <div className='basket__info-code'>
                                    <input className='basket__info-input' type="text" placeholder='Промо-код'/>
                                    <button className='header__label-btn'>Применить</button>
                                </div>
                            </div> : ''
                        }

                        <div className="basket__info-block">
                            {  user?.cart.length ? <button className='basket__info-btn active'> <Link className='basket__info-btn_link' to={'/order'}>Оформить заказ</Link> </button> : ''}
                            <button className='basket__info-btn'>
                                <Link to={'/'} className='basket__info-btn_link'> Продолжить покупки</Link>
                            </button>
                        </div>

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