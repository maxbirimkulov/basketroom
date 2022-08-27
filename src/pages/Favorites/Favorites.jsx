import React from 'react';
import Card from "../../components/Card/Card";
import FavoritesCardLoaded from "./FavoritesCardLoaded";

const Favorites = () => {
    return (
        <div className='favorites'>
            <div className="container">
                <h3>Главная / Избранное</h3>
                <h2>Избранное</h2>

                <div className='home__cardBlock-row'>
                    <FavoritesCardLoaded/>

                    <div className="home__productCard">
                        <Card page='fav'/>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Favorites;