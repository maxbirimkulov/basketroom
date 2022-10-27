import React, {useEffect, useState} from 'react';
import axios from "../../axios";
import Card from "../../components/Card/Card";

const CatalogForExample = () => {

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        axios('/clothes').then(({data}) => setCatalog(data))
    })

    return (
        <section style={{padding: '50px 0'}}>
            <div className='container'>
                <div className="catalog__list-products">
                    {
                        catalog?.map(pare => (
                            <div key={pare?.id} className="catalog__productCard">
                                <Card product={pare}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>


    );
};

export default CatalogForExample;