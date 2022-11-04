import React from 'react';
import FavoritesCardLoaded from "../../pages/Favorites/FavoritesCardLoaded";
import Card from "../Card/Card";
import {useSelector} from "react-redux";

const CatalogList = () => {
    const {status, products, error, filter} = useSelector(s => s.clothes);

    return (
        <>
            {
                status === 'loading' ?
                    <>
                        {
                            new Array(filter.limit).fill(null, 0)?.map(() => (
                                <div className="catalog__productCard">
                                    <FavoritesCardLoaded/>
                                </div>
                            ))
                        }
                    </>
                    :
                    products?.map(pare => (
                        <div key={pare?.id} className="catalog__productCard">
                            <Card product={pare}/>
                        </div>
                    ))
            }
            {
                error && <h2>An error occerd: {error}</h2>
            }
        </>
    );
};

export default CatalogList;