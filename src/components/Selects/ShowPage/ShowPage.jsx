import React from 'react';
import Select from "react-select";
import {switchPage} from "../../../redux/clothes";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ShowPage = () => {
    const {productsCount, filter} = useSelector(s => s.clothes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const pagesPaginate = [];
    new Array(Math.ceil(productsCount / filter.limit)).fill(null, 0).map((p, idx) => {
        pagesPaginate.push({id: idx, value: idx + 1, label: `${idx + 1}`})
    });

    const clickedPagination = (pageBtn) => {
        filter.page !== pageBtn &&
        dispatch(switchPage(pageBtn));
        navigate(`/catalog/${pageBtn}`)
    };
    return (
        <Select
            className='catalog__sidebar-select'
            onChange={(e) => {
                clickedPagination(e.value)
            }}
            placeholder={params.page}
            options={pagesPaginate}
        />
    );
};

export default ShowPage;