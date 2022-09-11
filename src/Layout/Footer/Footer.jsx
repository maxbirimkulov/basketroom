import React from 'react';
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className='footer__block'>
                        Footer
                        <ul className="footer__block-list">
                            <img onClick={() => navigate('/')} src="https://static.insales-cdn.com/assets/1/3047/1813479/1652615264/logotype.png"
                                 alt="logo"/>
                        </ul>
                    </div>
                    <div className='footer__block'>
                        <h4 className='footer__block-title'>Покупателю</h4>
                        <ul className="footer__block-list">
                            <li className='footer__block-link'>О нас</li>
                            <li className='footer__block-link'>Как заказать</li>
                            <li className='footer__block-link'>Доставка</li>
                            <li className='footer__block-link'>Оплата</li>
                            <li className='footer__block-link'>Гарантия</li>
                            <li className='footer__block-link'>Отзывы</li>
                        </ul>
                    </div>
                    <div className='footer__block'>
                        <h4 className='footer__block-title'>сервис</h4>
                        <ul className="footer__block-list">
                            <li className='footer__block-link'>Как выбрать размер </li>
                            <li className='footer__block-link'>Возврат/Обмен</li>
                            <li className='footer__block-link'>Корзина</li>
                            <li className='footer__block-link'>Избранные</li>
                            <li className='footer__block-link'>Контакты</li>
                        </ul>
                    </div>
                    <div className='footer__block'>
                        <h4 className='footer__block-title'>Каталог</h4>
                        <ul className="footer__block-list">
                            <li className='footer__block-link'>Баскетбол</li>
                            <li className='footer__block-link'>lifestyle</li>
                            <li className='footer__block-link'>Одежда</li>
                            <li className='footer__block-link'>Аксессуары</li>
                            <li className='footer__block-link'>Скидки</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;