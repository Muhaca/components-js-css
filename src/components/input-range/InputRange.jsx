import React from 'react';
import './InputRange.css';

function InputRange() {

    const [value, setValue] = React.useState(50);

    const handleSlideChange = (event, newValue) => {
        console.log(event);
        setValue(newValue)
        output.value = slide.value
    };

    const slide = document.querySelector("#slide")
    const output = document.querySelector("#output")

    return (
        <div>
            <input
                className="slider"
                id="slide"
                type='range'
                min="1"
                max="100"
                value={value}
                onChange={handleSlideChange}
            />
            <input
                className="output"
                id="output"
                type="text"
                value={value}
            />
        </div>
    );
}

export default InputRange;
