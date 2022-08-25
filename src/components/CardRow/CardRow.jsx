import React from 'react';
import Card from "../Card/Card";
import {useSelector} from "react-redux";

const CardRow = ({category = 'Новинки'}) => {
    const {status, products, error} = useSelector(s => s.clothes);
// alert(JSON.stringify(products))
    return (
        <section className='home__cardBlock'>
            <h2 className='home__cardBlock-title'>{category} <span className='home__cardBlock-subtitle'>/ все товары</span></h2>

            <div className='home__cardBlock-row'>
                {
                    products?.map(pare => (
                        <div key={pare._id} className='home__productCard'>
                            <Card product={pare}/>
                        </div>
                    ))
                }
                 <div className='home__productCard'>
                    <Card/>
                </div>

            </div>
        </section>

    );
};

export default CardRow;