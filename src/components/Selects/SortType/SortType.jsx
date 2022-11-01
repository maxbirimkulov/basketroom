import React from 'react';
import Select from "react-select";
import {clearFilters} from "../../../redux/clothes";
import {useDispatch} from "react-redux";


const SortType = () => {
    const dispatch = useDispatch();
    const setSort = (target) => {
        const sign = target.value;
        sign === 'По возростанию цены' && dispatch(clearFilters({desc: false}));
        sign === 'По убыванию цены' && dispatch(clearFilters({desc: true}));
    };

    return (
        <Select
            onChange={(e) => setSort(e)}
            className='catalog__sidebar-select'
            defaultValue={{id: 1, value: 'По умолчанию', label: 'По умолчанию'}}
            options={[
                {id: 1, value: 'По умолчанию', label: 'По умолчанию'},
                {id: 2, value: 'По популярности', label: 'По популярности'},
                {id: 3, value: 'По возростанию цены', label: 'По возростанию цены'},
                {id: 4, value: 'По убыванию цены', label: 'По убыванию цены'},
                {id: 5, value: 'По новинкам', label: 'По новинкам'},
                {id: 6, value: 'По скидке', label: 'По скидке'},
                {id: 7, value: 'По алфавиту', label: 'По алфавиту'},
            ]}
        />
    );
};

export default SortType;