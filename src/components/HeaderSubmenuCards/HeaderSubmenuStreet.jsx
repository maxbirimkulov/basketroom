import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {clearFilters, searchProduct} from "../../redux/clothes";
import {useDispatch} from "react-redux";
import {brandsData} from "../../utils/brands";

const HeaderSubmenuStreet = ({setSearch}) => {
    const [drop, setDrop] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searching = (e) =>{
        console.log(e.target.textContent);
        setSearch(e.target.textContent);
        navigate('/catalog');
        dispatch(searchProduct(e.target.textContent));
    };
    const handleClick = (event) =>{
        dispatch(clearFilters({brand: event.target.dataset.value, category: 'street'}));
    };


    const adidasLi = ['Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young','Yeezy', 'adidas Lifestyle', 'adidas Basketball', 'adidas Harden', 'adidas D Rose', 'adidas Trae Young',];
    const nikeKi = ['Travis Scott', 'Nike x Off White', 'Nike Lifestyle', 'Nike Dunk', 'Nike Air Force', 'Nike Cosmic Unity', 'Nike GT', 'Nike LeBron', 'Nike Kyrie', 'Nike Freak', 'Nike KD', 'Nike PG', 'Nike Uptempo' ];
    const basketballLi = brandsData.find(item => item.category === 'street').brands;
    console.log(basketballLi)

    return (
        <div className='header__submenu-drop'>
            {
                basketballLi.map(li => (
                    <div key={li.id} onClick={(e) => handleClick(e)} data-value={li.value} className='header__submenu-link'>{li.label}</div>
                ))
            }

        </div>
    );
};

export default HeaderSubmenuStreet;