import React from 'react';
import Card from "../Card/Card";

const CardRow = ({category = 'Новинки'}) => {
    return (
        <section className='home__cardBlock'>
            <h2 className='home__cardBlock-title'>{category} <span className='home__cardBlock-subtitle'>/ все товары</span></h2>

            <div className='home__cardBlock-row'>
                <div className='home__productCard'>
                    <Card/>
                </div>
                <div className='home__productCard'>
                    <Card/>
                </div>
                <div className='home__productCard'>
                    <Card/>
                </div>
                 <div className='home__productCard'>
                    <Card/>
                </div>
                 <div className='home__productCard'>
                    <Card/>
                </div>
                 <div className='home__productCard'>
                    <Card/>
                </div>
                 <div className='home__productCard'>
                    <Card/>
                </div>
                 <div className='home__productCard'>
                    <Card/>
                </div>

                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
            </div>
        </section>

    );
};

export default CardRow;