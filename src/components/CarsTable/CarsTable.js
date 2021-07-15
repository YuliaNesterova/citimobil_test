import React from "react";

import './CarsTable.css';
import ChosenCar from "../ChosenCar/ChosenCar";

function CarsTable(props) {
    const [isSortingReversed, setIsSortingReversed] = React.useState(false);
    const [carName, setCarName] = React.useState('');
    const [carYear, setCarYear] = React.useState('');
    const [isCarRowClicked, setIsCarRowClicked] = React.useState(false);

    function handleSort(field) {
        props.onSort(field);
        isSortingReversed ? setIsSortingReversed(false) : setIsSortingReversed(true);
    }

    function handleCarRowClick(e) {
        setIsCarRowClicked(true);
        setCarName(e.target.closest(".cars-table__data-row").querySelector(".cars-table__data_type_car-name").innerText);
        setCarYear(e.target.innerText);
    }

    return (
        <div className="cars">
            {props.notFound ?
                <span className="cars-table__not-found">Автомобилей не найдено</span> :
                <table className="cars-table">
                    <thead>
                    <tr className="cars-table__header">
                        <th className="cars-table__name cars__table_name_type_mark" onClick={() => handleSort('mark')}>Марка и модель
                            <div className={`cars-table__image ${isSortingReversed ? 'cars-table__image_reverse' : ''}`}></div>
                        </th>
                        <th className="cars-table__name" onClick={() => handleSort('Эконом')}>Эконом</th>
                        <th className="cars-table__name" onClick={() => handleSort('Комфорт')}>Комфорт</th>
                        <th className="cars-table__name" onClick={() => handleSort('Комфорт+')}>Комфорт + </th>
                        <th className="cars-table__name" onClick={() => handleSort('Минивен')}>Минивен</th>
                        <th className="cars-table__name" onClick={() => handleSort('Бизнес')}>Бизнес</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.cars.map((car) => {
                        return (
                            <tr className="cars-table__data-row" key={car.mark + car.model} onClick={handleCarRowClick}>
                                <td className="cars-table__data cars-table__data_type_car-name">{car.mark} {car.model}</td>
                                <td className="cars-table__data">{car.tariffs.Эконом ? car.tariffs.Эконом?.year : '-'}</td>
                                <td className="cars-table__data">{car.tariffs.Комфорт ? car.tariffs.Комфорт?.year : '-'}</td>
                                <td className="cars-table__data">{car.tariffs['Комфорт+'] ? car.tariffs['Комфорт+']?.year : '-'}</td>
                                <td className="cars-table__data">{car.tariffs.Минивен ? car.tariffs.Минивен?.year : '-'}</td>
                                <td className="cars-table__data">{car.tariffs.Бизнес ? car.tariffs.Бизнес?.year : '-'}</td>
                            </tr>
                        )
                    })}

                    </tbody>

                </table> }

            {props.notFound ? '' : <ChosenCar carName={carName} carYear={carYear} isclicked={isCarRowClicked}/>}
        </div>
    )
}

export default CarsTable;