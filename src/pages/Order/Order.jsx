import React from 'react';
import Select from "react-select";

const Order = () => {
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
                        <div className='order__form-rowinput'>
                            <input className='order__form-input' type="text" placeholder='Дом'/>
                            <input className='order__form-input' type="text" placeholder='Квартира'/>
                        </div>
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
                                    <span/>Оплата на счет Сбербанка
                                </label>
                                <input id="b" type="radio" name="deliver" value="b"/>
                                    <label htmlFor="b">
                                        <span/>Оплата на счет Тинькофф
                                    </label>
                                <input id="c" type="radio" name="deliver" value="c"/>
                                    <label htmlFor="c">
                                        <span/> ЮМoney на сайте
                                    </label>
                            <input id="d" type="radio" name="deliver" value="d"/>
                            <label htmlFor="d">
                                <span/>B
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

                </div>
            </div>

        </div>
    );
};

export default Order;