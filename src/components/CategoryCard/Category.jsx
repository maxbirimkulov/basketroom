import React from 'react';


const Category = ({text = 'Беговые', img}) => {
    return (
        <div className='categoryCard'>
            <div className="categoryCard__bg"  style={{background:`url(${img})center/cover no-repeat`}}> </div>
            <div className='categoryCard__bottom'>
                <h3 className='categoryCard__text'>{text}</h3>
            </div>
        </div>
    );
};

export default Category;