import Button from '../button/button';
import styles from './ready-to-sell.module.css';
import Bed from "../../assets/images/Bed.png"
import Carport from "../../assets/images/carport.png"
import Handrail from "../../assets/images/handrail.png"
import Bath from "../../assets/images/bath.png"
import Person from "../../assets/images/Recomm-person1.png"


function ReadyToSell() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles["orange-line"]}`}></div>
            <div className={`${styles["small-container"]}`}>
                <p className={`${styles.paragraph}`}>Ready To Sell</p>
                <h2 className={`${styles.title}`}>Let’s tour and see our house</h2>
                <p className={`${styles.text}`}>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                <h4 className={`${styles["description-title"]}`}>House Detail</h4>
                <div className={`${styles["description-wrapper"]}`}>
                    <div className={`${styles["description-card"]}`}>
                        <img src={Bed} alt="" className={`${styles.image}`} />
                        <p className={`${styles["description-text"]}`}>4 Bedrooms</p>
                    </div>
                    <div className={`${styles["description-card"]}`}>
                        <img src={Bath} alt="" className={`${styles.image}`} />
                        <p className={`${styles["description-text"]}`}>2 Bathrooms</p>
                    </div>
                    <div className={`${styles["description-card"]}`}>
                        <img src={Carport} alt="" className={`${styles.image}`} />
                        <p className={`${styles["description-text"]}`}>1 Carport</p>
                    </div>
                    <div className={`${styles["description-card"]}`}>
                        <img src={Handrail} alt="" className={`${styles.image}`} />
                        <p className={`${styles["description-text"]}`}>2 Floors</p>
                    </div>
                </div>
                <div className={`${styles.line}`}></div>

                <div className={`${styles.contact}`}>
                    <div className={`${styles["contact-wrapper"]}`}>
                        <img src={Person} alt="" className={`${styles["contact-image"]}`} />
                        <div className={`${styles.details}`}>
                            <p className={`${styles.name}`}>Dianne Russel</p>
                            <p className={`${styles.job}`}>Manager Director</p>
                        </div>
                    </div>
                    <Button type={"three"}>Contact Now</Button>
                </div>
            </div >
        </div>
    );
}

export default ReadyToSell;
