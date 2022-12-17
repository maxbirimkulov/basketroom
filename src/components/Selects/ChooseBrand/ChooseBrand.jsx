import React from 'react';

const ChooseBrand = ({register}) => {
    return (
        <>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='jordan' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Jordan
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='adidas' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>adidas
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='nike' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Nike
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='puma' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Puma
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='converse' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Converse
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')} name='brands'
                       value='AAPE' className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>AAPE
            </label>
        </>
    );
};

export default ChooseBrand;