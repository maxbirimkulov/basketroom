import React from 'react';

const ChooseSizes = ({register}) => {
    return (
        <>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={50} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-50
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={49} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-49
            </label>

            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={48} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-48
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={47} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-47
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={46} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-46
            </label>

            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={45} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-45
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={44} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-44
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={43} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-43
            </label>

            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={42} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-42
            </label>

            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={41} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-41
            </label>

            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={40} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-40
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={38} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-38
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={37} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-37
            </label>
            <label className={'catalog__sidebar-category'}>
                <input {...register('sizes')} name='sizes'
                       value={36} className={'catalog__sidebar-category_box'} type="radio"
                       onClick={(e) => console.log(e.target)}/>
                <span className="category_box"/> US-36
            </label>
        </>
    );
};

export default ChooseSizes;