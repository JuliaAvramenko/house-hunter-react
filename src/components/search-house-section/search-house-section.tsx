import Button from '../button/button';
import styles from './search-house-section.module.css';
import logo from "../../assets/images/logo1.png"


import Header from '../header/header';
import greenish from "../../assets/images/header-greenish.png"
import blue from "../../assets/images/header-blue.png"
import HouseStats from '../house-stats/house-stats';
import SearchHouseComponent from '../search-house-component/search-house-component';

function SearchHouseSection() {

    return (
        <div className={`${styles.section}`}>
            <img src={blue} alt="" className={`${styles.blue}`} />
            <img src={greenish} alt="" className={`${styles.greenish}`} />


            <div className={`${styles.container}`} >
                <SearchHouseComponent></SearchHouseComponent>
                <HouseStats></HouseStats>
            </div>

        </div>
    );
}

export default SearchHouseSection;