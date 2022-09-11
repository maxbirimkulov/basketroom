import React from 'react';
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import FavoritesCardLoaded from "../../pages/Favorites/FavoritesCardLoaded";

const CardRow = ({category = 'Новинки'}) => {
    const {status, products, error} = useSelector(s => s.clothes);

    return (
        <section className='home__cardBlock'>
            <h2 className='home__cardBlock-title'>{category} <span className='home__cardBlock-subtitle'>/ все товары</span></h2>

            <div className='home__cardBlock-row'>
                {
                    status === 'loading' &&
                        new Array(8).fill(null, 0).map(() => (
                            <div className="home__productCard">
                                <FavoritesCardLoaded/>
                            </div>
                        ))
                }
                {
                    // !products.length ? <h3>Пока нет, Сделать заказ</h3> :

                        category === 'Новинки' ?
                    products?.filter((item ) => item.category === 'sneakers' ).sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).filter((item, idx) => idx < 8 ).map(pare => (
                        <div key={pare._id} className='home__productCard'>
                            <Card product={pare}/>
                        </div>
                    )) :
                    products?.filter((item ) => item.category === 'sneakers' ).filter((item, idx) => idx < 8 ).map(pare => (
                        <div key={pare._id} className='home__productCard'>
                            <Card product={pare}/>
                        </div>
                    ))
                }

            </div>
        </section>

    );
};

export default CardRow;