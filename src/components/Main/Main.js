import './Main.css';

import CarsTable from "../CarsTable/CarsTable";
import Search from "../Search/Search";

function Main(props) {
    return (
        <section className="main">
            <Search onSearch={props.onSearch} handleResetClick={props.handleResetClick}/>
            <CarsTable cars={props.cars} onSort={props.onSort} notFound={props.notFound}/>
        </section>
    )
}

export default Main;