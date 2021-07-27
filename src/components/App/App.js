import React from "react";

import './App.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import * as api from '../../utils/api';

function App() {
    const [allCars, setAllCars] = React.useState([]);
    const [searchedCars, setSearchedCars] = React.useState([]);
    const [isSearched, setIsSearched] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [noCarsFound, setNoCarsFound] = React.useState(false);

    function getAllCars() {
        Promise.all([api.getCars()])
            .then(([res]) => {
                setAllCars(res.cars);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    React.useEffect(() => {
        getAllCars();
    }, []);

    function handleCarsSort() {
        if(isSearched) {
            const searchedCarsCopy = searchedCars.concat();
            const sortedSearchedCars = searchedCarsCopy.sort().reverse();
            setSearchedCars(sortedSearchedCars);
        } else {
            const allCarsCopy = allCars.concat();
            const sortedCars = allCarsCopy.sort().reverse();
            setAllCars(sortedCars);
        }
    }

    function handleCarsSearch(keyWord) {
        setNoCarsFound(false);
        const word = keyWord.toLowerCase();

        let filteredCars;

        filteredCars = allCars.filter(car =>
            car.mark.toLowerCase().indexOf(word) !== -1 || car.model.toLowerCase().indexOf(word) !== -1 ||
            car.tariffs.Эконом?.year === Number(word) || car.tariffs.Комфорт?.year === Number(word) ||
            car.tariffs['Комфорт+']?.year === Number(word) || car.tariffs.Минивен?.year === Number(word) ||
            car.tariffs.Бизнес?.year === Number(word))

        if(filteredCars.length === 0) {
            setNoCarsFound(true);
        } else {
            setSearchedCars(filteredCars);
            setIsSearched(true);
        }

    }

    function handleResetClick() {
        setIsSearched(false);
    }

  return (
    <div className="page">
      <Header />
      <Sidebar />
        <Main cars={isSearched ? searchedCars : allCars} onSort={handleCarsSort} onSearch={handleCarsSearch}
              notFound={noCarsFound} handleResetClick={handleResetClick}/>
      <Footer />
      <Loader isLoading={isLoading}/>
    </div>
  );
}

export default App;
