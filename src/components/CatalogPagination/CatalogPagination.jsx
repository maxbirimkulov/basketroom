import React from 'react';
import {switchPage} from "../../redux/clothes";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const CatalogPagination = () => {
    const {productsCount, filter} = useSelector(s => s.clothes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickedPagination = (pageBtn) => {
        filter.page !== pageBtn &&
        dispatch(switchPage(pageBtn));
        navigate(`/catalog/${pageBtn}`)
    };

    return (
        <div className='catalog__list-paginate'>
            {/*<button onClick={() => productsOnPage(filter.limit + 3)} className='catalog__list-paginateMore'>{status === 'loading' ? 'Загружаем' : 'Показать еще'}</button>*/}
            <div className='catalog__list-paginateBtns'>
                {
                    new Array(Math.ceil(productsCount / filter.limit)).fill(null, 0).map((p, idx) => (
                        <button
                            onClick={(e) => {
                                clickedPagination(e.target.textContent);
                                navigate(`/catalog/${idx + 1}`)
                            }}
                            className={`catalog__list-paginateBtn ${filter.page == (idx + 1) && 'active'}`}>{idx + 1}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default CatalogPagination;