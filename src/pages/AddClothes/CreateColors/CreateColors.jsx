import React from "react";
const CreateColors = ({colors, setColors , color}) => {
    return (
        <li onClick={() => {
            if (colors.includes(color)) {
                setColors(colors.filter(item => item !== color))
            } else {
                setColors([...colors, color])
            }
        }} className={`create__content-size create__form-size  ${colors.includes(color) ? 'create__color' : ''  }`}
        style={{ backgroundColor:color, color:color === 'black' ? 'white' : '' }}
        > </li>
    );
};

export default CreateColors;