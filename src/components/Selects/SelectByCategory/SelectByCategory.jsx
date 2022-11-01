
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearFilters} from "../../../redux/clothes";


function SelectBrand() {

    const {filter} = useSelector(s => s.clothes);
    const handleChange = (event) => {
        dispatch(clearFilters({category: event.target.value}));
    };

    const dispatch = useDispatch();

    const params = useParams();


    let options = params.category === 'clothes' ?
            [
                {id: 1, value: 'hoodie', label: 'Толстовки'},
                {id: 2, value: 'form', label: 'Форма'},
                {id: 3, value: 'pants', label: 'Штаны'},
                {id: 4, value: 'socks', label: 'Носки'},
                {id: 4, value: 'accessories', label: 'Аксессуары'},
            ] : params.category === 'shoes' ?
                [
                    {id: 1, value: 'basketball', label: 'Баскетбольные'},
                    {id: 2, value: 'street', label: 'Уличные'},
                    {id: 3, value: 'premium', label: 'Премиум'},
                    {id: 4, value: 'other', label: 'Другое'},
                ] : params.category === 'other' ?
                    [
                        {id: 1, value: 'ball', label: 'Мячи'},
                        {id: 2, value: 'attribute', label: 'Атрибутика'},
                        {id: 3, value: 'decorations', label: 'Украшения'},
                        {id: 4, value: 'other', label: 'Другое'},
                    ] : [];



    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Поиск по категориям</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.category}
                    label={'Поиск по категориям'}
                    onChange={handleChange}
                >
                    {
                        options.map((item) => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>  )
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectBrand