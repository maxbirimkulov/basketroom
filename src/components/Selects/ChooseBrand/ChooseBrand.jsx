import React from 'react';

const ChooseBrand = ({register}) => {
    return (
        <>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='jordan' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Jordan
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='adidas' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>adidas
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='nike' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Nike
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='puma' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Puma
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='converse' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>Converse
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('brand')}
                       value='AAPE' className={'catalog__sidebar-category_box'} type="checkbox"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/>AAPE
            </label>
        </>
    );
};

export default ChooseBrand;