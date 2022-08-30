import React from 'react';
import Card from "../../components/Card/Card";
import FavoritesCardLoaded from "./FavoritesCardLoaded";
import {useSelector} from "react-redux";

const Favorites = () => {
    // const user = JSON.parse(localStorage.getItem('user')) || {favourites:[], cart:[]};
    const user = useSelector(s => s.user.user);
    console.log('oo')
    console.log(user)

    return (
        <div className='favorites'>
            <div className="container">
                <h3>Главная / Избранное</h3>
                <h2>Избранное</h2>

                <div className='home__cardBlock-row'>
                    {/*<FavoritesCardLoaded/>*/}

                    {
                        user?.favourites?.map(card => (
                            <div className="home__productCard">
                                <Card page='fav' product={card}/>
                            </div>
                        ))
                    }


                </div>

            </div>
        </div>
    );
};

export default Favorites;