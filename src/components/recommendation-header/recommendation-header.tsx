import { useState } from 'react';
import Button from '../button/button';
import styles from './recommendation-header.module.css';

function RecommendationHeader() {
    const [currentActiveButton, setCurrentActiveButton] = useState<string>("House")
    return (
        <div className={`${styles.header}`}>
            <p className={`${styles.recommendation}`}>Our Recommendation</p>
            <div className={`${styles["header-wrapper"]}`}>
                <h2 className={`${styles.title}`}>Featured House</h2>
                <div className={`${styles.buttons}`}>
                    <Button type={currentActiveButton === "House" ? "four" : "five"} onClick={() => { setCurrentActiveButton("House") }}>House</Button>
                    <Button type={currentActiveButton === "Villa" ? "four" : "five"} onClick={() => { setCurrentActiveButton("Villa") }}>Villa</Button>
                    <Button type={currentActiveButton === "Apartment" ? "four" : "five"} onClick={() => { setCurrentActiveButton("Apartment") }}>Apartment</Button>
                </div>
                <div className={`${styles["side-buttons"]}`}>
                    <Button type={"six"}>t</Button>
                    <Button type={"three"}>t</Button>
                </div>
            </div>

        </div>
    );
}

export default RecommendationHeader;