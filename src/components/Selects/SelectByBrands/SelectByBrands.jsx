import * as React from 'react';
import {clearFilters} from "../../../redux/clothes";
import {useDispatch, useSelector} from "react-redux";
import makeAnimated from "react-select/animated";
import Select from '@mui/material/Select';
import {brandsData} from "../../../utils/brands";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const animatedComponents = makeAnimated();


const SelectByBrands = () => {
    const {filter} = useSelector(s => s.clothes);


    let options = filter.category ?
        brandsData.filter(obj => obj.category === filter.category)[0]?.brands :
        brandsData.map(category => category.brands).flat().reduce((acc, rec) => {
                if (acc.map[rec.value]) return acc;

                acc.map[rec.value] = true;
                acc.allBrands.push(rec);
                return acc
            },
            {
                map: [],
                allBrands: []
            }
        ).allBrands.sort((a,b) => a.value + b.value);
    // console.log(options)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log(32)
        dispatch(clearFilters({brand: event.target.value}));
    };


    return (

        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Поиск по бренду</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.brand}
                    label={'Поиск по бренду'}
                    onChange={handleChange}
                >
                    {/*<div className={'demo-simple-select'}>*/}
                        {
                            options.map((item) => <MenuItem key={item.id} value={item.value} >{item.label}</MenuItem> )
                        }
                    {/*</div>*/}



                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectByBrands;