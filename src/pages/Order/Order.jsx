import Select from "react-select";
import {findUser} from "../../redux/user";
import {FaTrash} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import React from "react";

const Order = () => {
    const user = useSelector(s => s.user.user);
    let price = user?.cart?.reduce((acc, rec) => acc + rec.price, 0);
    const dispatch = useDispatch();
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
    const clearCart = product => {
        const cart = document.getElementById('cart');
        setTimeout(
            () =>{
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
    }



    return (
        <div className='container'>
            <div className='order'>
                <form className='order__form'>
                    <h3 className='order__form-title'>Оформление заказа</h3>
                    <div className='order__form-block'>
                        <h4 className='order__form-subtitle'>Контактные данные</h4>
                        <input className='order__form-input' type="email" placeholder='Email'/>
                        <p className='order__form-input_info'>Вся информация о заказе поступит на указанную почту</p>
                    </div>
                    <div className='order__form-block'>
                        <h4 className='order__form-subtitle'>Доставка</h4>
                        <Select
                            className='order__form-select'
                            placeholder={'Область'}
                            defaultValue={{id: 1, value: 'Бишкек', label: 'Бишкек' }}
                            options={[
                                { id: 1, value: 'Бишкек', label: 'Бишкек' },
                                { id: 2, value: 'Иссык-Куль', label: 'Иссык-Куль' },
                                { id: 3, value: 'Нарын', label: 'Нарын' },
                                { id: 4, value: 'Талас', label: 'Талас' },
                                { id: 5, value: 'Баткен', label: 'Баткен' },
                                { id: 6, value: 'Ош', label: 'Ош' },
                                { id: 7, value: 'Жалалабад', label: 'Жалалабад' },
                            ]} />
                        <Select
                            className='catalog__sidebar-select'
                            placeholder={'Населенный пункт'}
                            options={[]}
                        />
                    </div>
                    <div className="order__form-block">
                        <input className='order__form-input' type="text" placeholder='Почтовый индекс'/>
                        <input className='order__form-input' type="text" placeholder='Улица'/>
                        {/*<div className='order__form-rowinput'>*/}
                        {/*    <input className='order__form-input' type="text" placeholder='Дом'/>*/}
                        {/*    <input className='order__form-input' type="text" placeholder='Квартира'/>*/}
                        {/*</div>*/}
                        <textarea className='order__form-input' type="email" placeholder='Комментарии к заказу'/>

                    </div>


                    <div className="order__form-block">
                        <h4 className="order__form-subtitle">Покупатель</h4>
                        <input className='order__form-input' type="text" placeholder='Имя'/>
                        <input className='order__form-input' type="text" placeholder='Фамилия'/>
                        <input className='order__form-input' type="text" placeholder='Отчество'/>
                        <input className='order__form-input' type="number" placeholder='Контактный телефон'/>
                        <p className=''>Например: +7(926)111-11-11 <br/>
                            Вся информация о заказе поступит на указанный телефон</p>
                    </div>


                    <div className="order__form-block order__form-block-radio">
                        <h4 className='order__form-subtitle'>Способ оплаты*</h4>
                        <div className='order__form-custom_radio'>

                            <input id="a" type="radio" name="deliver" value="a" defaultChecked={true} />
                                <label htmlFor="a">
                                    <span/>Оплата на карту
                                </label>
                                <input id="b" type="radio" name="deliver" value="b"/>
                                    <label htmlFor="b">
                                        <span/>Оплата на Эльсом
                                    </label>
                                <input id="c" type="radio" name="deliver" value="c"/>
                                    <label htmlFor="c">
                                        <span/> ЮМoney на сайте
                                    </label>

                                <input id="e" type="radio" name="deliver" value="e"/>
                                    <label htmlFor="e">
                                        <span className="category_box"/>Доставка в другую страну от 20 до 40 дней.
                                        Заказ поступит в ближайшее отделение почты.
                                        <p>+ 1000 руб</p>
                                    </label>

                                        <div className="worm">
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                            <div className="worm__segment"/>
                                        </div>
                        </div>
                    </div>
                    <div className="order__form-block">

                    </div>


                    <button className='order__form-btn basket__info-btn active'>Подтвердить заказ</button>
                </form>
                <div className='order__info'>
                    <div className='order__info-box'>
                        {
                            user?.cart.length ?
                                user?.cart.map(item => (
                                    // <div className='basket__card'>
                                    //     <div onClick={() => getProductToPage(item._id)} className='basket__card-img' style={{background:`url(${`${process.env.REACT_APP_URL}${item?.images[0]}`})center/cover no-repeat`}}> </div>
                                    //     <div className='basket__card-info'>
                                    //         <p onClick={() => getProductToPage(item._id)} className='basket__card-name'>{item.title}</p>
                                    //         <p className='basket__card-size'>Размер: 12 US-46 EUR-30 cm</p>
                                    //         <p className='basket__card-price'>{item.price} руб</p>
                                    //     </div>
                                    //     <button className='basket__card-btn' onClick={() => clearCart(item)}><FaTrash/></button>
                                    // </div>
                                    <div key={item._id} className='order__info-product'>
                                        <img width={60}
                                             src={process.env.REACT_APP_URL + item?.images[0]}
                                             alt="order product"/>
                                        <span>{item.title} {item.tag} ({item.sizes.join(' ,')})</span>
                                        <span className='order__info-productPrice'>{item?.price} сом</span>
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

                    <div className='order__info-box borders'>
                        <p className='order__info-subtotal'>
                            <span>Сумма по товарам</span>
                            <span>{price || 0} сом</span>
                        </p>
                        <p className='order__info-subtotal'>
                            <span>Стоимость доставки</span>
                            <span>150 сом</span>
                        </p>
                    </div>
                    <div className='order__info-box order__info-total'>
                        <span>Итого:</span>
                        <span>{price ? price + 150 : 0} сом</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;