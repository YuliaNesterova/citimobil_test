import React from "react";

import './ChosenCar.css';

function ChosenCar(props) {
    return (
        <div className="chosen-car">
            {props.isclicked ?
                <span>Выбран автомобиль {props.carName} {props.carYear} года выпуска</span> :
                <span>Нажмите на год автомобиля, чтобы сделать выбор</span>}

        </div>
    )
}

export default ChosenCar;