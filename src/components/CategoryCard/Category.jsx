import React from 'react';


const Category = ({text, img}) => {
    return (
        <div className='categoryCard'>
            <div className="categoryCard__bg"  style={{background:`url(${img})center/cover no-repeat`}}> </div>
            <div className='categoryCard__bottom'>
                <h3 className='categoryCard__text'>Беговые</h3>
            </div>
        </div>
    );
};
{/*<img className="categoryCard__bg"*/}
{/*     src=""*/}
{/*     data-src="https://static.insales-cdn.com/r/QfnbTWn-e-o/rs:fit:570:570:1/plain/images/collections/1/3822/80924398/015__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png"*/}
{/*     alt="Баскетбольные" data-ll-status="loaded"/>*/}
export default Category;