import React from "react";

import './Loader.css';
import loader from '../../images/ring.svg'

function Loader(props) {

    return (
        <div className={props.isLoading ? `loader loader_shown` : `loader`}>
            <>
            <img src={loader} alt="" className="loader__image loader__image_size_xl" />
            <img src={loader} alt="" className="loader__image loader__image_size_l" />
            <img src={loader} alt="" className="loader__image loader__image_size_m" />
            <img src={loader} alt="" className="loader__image loader__image_size_s"/>
            <img src={loader} alt="" className="loader__image loader__image_size_xs"/>
            </>
        </div>
    )
}

export default Loader;