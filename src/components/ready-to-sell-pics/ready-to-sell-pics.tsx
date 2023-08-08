import Button from '../button/button';
import styles from './ready-to-sell-pics.module.css';
import big from "../../assets/images/big_ready-to-sell.png"
import small1 from "../../assets/images/small1_ready-to-sell.png"
import small2 from "../../assets/images/small2_ready-to-sell.png"
import video from "../../assets/images/video.png"
import Person from "../../assets/images/Recomm-person1.png"


function ReadyToSellPics() {
    return (
        <div className={`${styles.container}`}>
            <iframe width="488px" height="416px" src="https://www.youtube-nocookie.com/embed/OADyvCwTxsA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className={`${styles.images}`}>
                <img src={big} alt="" className={`${styles.big}`} />
                <div className={`${styles['images-wrapper']}`}>
                    <img src={small1} alt="" className={`${styles.small}`} />
                    <img src={small2} alt="" className={`${styles.small}`} />
                </div>
            </div>

        </div >
    );
}

export default ReadyToSellPics;