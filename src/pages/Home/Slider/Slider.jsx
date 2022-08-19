import React from 'react';

const Slider = () => {
    return (
        <div className="home__slider">

            <div className="slide slide1">
                <div className="container">
                    <div className="slide__wrapper">
                        <div className="slide__caption">

                            <h3 className='slide__caption-title'>Air Jordan 1 Retro High</h3>
                            <p className='slide__caption-text'>Stealth</p>

                            <button className='slide__caption-btn'>Подробнее</button>
                        </div>
                        <img className="slide__image" src="https://static.insales-cdn.com/files/1/5430/22058294/original/Air_Jordan_1_Retro_High_OG__Stealth__.png"
                             alt="#почтизадаром"/>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Slider;