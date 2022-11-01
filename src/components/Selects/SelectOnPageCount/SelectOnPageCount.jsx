import React from 'react';
import Select from '@mui/material/Select';
import {changeProductLimit} from "../../../redux/clothes";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const SelectOnPageCount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { filter} = useSelector(s => s.clothes);
    let options = [
                {id: 1, value: '12', label: '12 шт'},
                {id: 2, value: '24', label: '24 шт'},
                {id: 3, value: '48', label: '48 шт'},
                {id: 4, value: '96', label: '96 шт'},
            ];

    const productsOnPage = (count) => {
        filter.limit !== count &&
        dispatch(changeProductLimit({limit: +count, page: '1'}));
        navigate('/catalog/1')
    };

    return (

        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                {/*<InputLabel id="demo-simple-select-label">Поиск по бренду</InputLabel>*/}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.limit}
                    // label={'Поиск по категориям'}
                    onChange={(e) => productsOnPage(e.target.value)}
                >

                    {
                        options.map((item) => (
                            <MenuItem
                                key={item.id} value={item.value}
                            >{item.label}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box>

    );
};

export default SelectOnPageCount;