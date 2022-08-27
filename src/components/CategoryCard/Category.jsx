import React from 'react';
import {useNavigate} from "react-router-dom";


const Category = ({text = 'Беговые', img}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/catalog')} className='categoryCard'>
            <div className="categoryCard__bg"  style={{background:`url(${img})center/cover no-repeat`}}> </div>
            <div className='categoryCard__bottom'>
                <h3 className='categoryCard__text'>{text}</h3>
            </div>
        </button>
    );
};

export default Category;