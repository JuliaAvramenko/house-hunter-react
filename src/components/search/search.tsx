import Button from '../button/button';
import styles from './search.module.css';
import location from "../../assets/images/fluent_location_search.png"
import logo from "../../assets/images/logo1.png"


import Header from '../header/header';
import greenish from "../../assets/images/header-greenish.png"
import blue from "../../assets/images/header-blue.png"
import HouseStats from '../house-stats/house-stats';
import { useState } from 'react';

interface ForgotPasswordFormElement extends HTMLFormElement {
    readonly elements: any
}

function Search() {
    const [locationInput, setLocationInput] = useState<string>('')

    const formSubmit: React.FormEventHandler<ForgotPasswordFormElement> = (e) => {
        console.log(e.currentTarget.elements.search.value)

        e.preventDefault();
    }

    return (
        <form className={`${styles["input-wrapper"]}`} onSubmit={formSubmit}>
            <div className={`${styles["input-search"]}`}>
                <img src={location} alt="" className={`${styles["input-image"]}`} />
                <input name="search" type="text" placeholder="Search for the location you want!" className={`${styles.input}`} value={locationInput} onChange={(e) => { setLocationInput(e.target.value) }} />
            </div>
            <Button type={"three"}>Search</Button>
        </form>
    );
}

export default Search;