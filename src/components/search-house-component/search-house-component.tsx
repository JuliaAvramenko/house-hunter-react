import Button from '../button/button';
import styles from './search-house-component.module.css';
import traveloka from "../../assets/images/search_logo1.png"
import ticket from "../../assets/images/search_logo2.png"
import airbnb from "../../assets/images/search_logo3.png"
import tripadvisor from "../../assets/images/search_logo4.png"
import location from "../../assets/images/fluent_location_search.png"
import Search from '../search/search';


function SearchHouseComponent() {
    return (
        <div className={`${styles.search}`}>
            <h1 className={`${styles.title}`}>find the place to live <span className={`${styles.span}`}>your dreams</span> easily here</h1>
            <p className={`${styles.text}`}>Everything you need about finding your place to live will be here, where it will be easier for you</p>
            <Search></Search>
            <p className={`${styles.paragraph}`}>Our Partnership</p>
            <div className={`${styles.logos}`}>
                <img src={traveloka} alt="" className={`${styles.logo}`} />
                <img src={ticket} alt="" className={`${styles.logo}`} />
                <img src={airbnb} alt="" className={`${styles.logo}`} />
                <img src={tripadvisor} alt="" className={`${styles.logo}`} />
            </div>

        </div>
    );
}

export default SearchHouseComponent;
