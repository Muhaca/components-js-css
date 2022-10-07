import React from 'react';
import ReactDOM from 'react-dom/client';
// import Carousel from './components/carousel/Carousel';
import InputRange from './components/input-range/InputRange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < React.StrictMode >
        {/* <Carousel /> */}
        <InputRange/>
    </React.StrictMode>
);