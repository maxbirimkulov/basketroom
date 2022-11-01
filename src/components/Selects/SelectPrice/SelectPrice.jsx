import React from 'react';
import Slider from "@material-ui/core/Slider";
import debounce from "@material-ui/core/utils/debounce";
import {changeRange, switchPage} from "../../../redux/clothes";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

const SelectPrice = () => {
    const {filter} = useSelector(s => s.clothes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = React.useState([filter.range.from, filter.range.to]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        dispatch(changeRange({from: newValue[0], to: newValue[1]}));
        console.log(newValue);
        dispatch(switchPage(1));
        navigate('/catalog/1')
    };

    return (
        <>
            <h3>Цена</h3>
            <Slider
                defaultValue={value}
                onChange={debounce(rangeSelector, 1500)}
                valueLabelDisplay="auto"
                step={10}
                min={0}
                max={20000}
            />
            Цена от {value[0]}р до {value[1]}р
        </>
    );
};

export default SelectPrice;