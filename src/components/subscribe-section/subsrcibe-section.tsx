import styles from './subscribe-section.module.css';
import mail from "../../assets/images/subscribe_mail.png"
import Button from '../button/button';
import image1 from "../../assets/images/sub1.png"
import image2 from "../../assets/images/sub2.png"
import image3 from "../../assets/images/sub3.png"
import image4 from "../../assets/images/sub4.png"
import image5 from "../../assets/images/sub5.png"
import image6 from "../../assets/images/sub6.png"
import image7 from "../../assets/images/test.png"
import image8 from "../../assets/images/sub8.png"
import Search from '../search/search';

function SubscribeSection() {
    return (

        <div className={`${styles.container}`}>
            <img src={image1} alt="" className={`${styles.image1}`} />
            <img src={image2} alt="" className={`${styles.image2}`} />
            <img src={image3} alt="" className={`${styles.image3}`} />
            <img src={image4} alt="" className={`${styles.image4}`} />
            <img src={image5} alt="" className={`${styles.image5}`} />
            <img src={image6} alt="" className={`${styles.image6}`} />
            <img src={image7} alt="" className={`${styles.image7}`} />
            <img src={image8} alt="" className={`${styles.image8}`} />
            <h2 className={`${styles.title}`}>Subscribe For More Info and update from Hounter</h2>
            <div className={`${styles.wrapper}`}>
                <Search></Search>
            </div>

        </div>

    );
}

export default SubscribeSection;
