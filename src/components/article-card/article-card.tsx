import styles from './article-card.module.css';
import person from "../../assets/images/Recomm-person1.png"
import house from "../../assets/images/tipsandtrick_house.png"
import time from "../../assets/images/tips-and-trick-time.png"
import { FC } from 'react';
import { TTipsAndTricksCard } from '../../utils/types';

const ArticleCard: FC<TTipsAndTricksCard> = (props) => {
    return (

        <div className={`${styles["left-card"]}`}>
            <img src={house} alt="" className={`${styles["left-image"]}`} />
            <div className={`${styles["left-container"]}`}>
                <div className={`${styles.person}`}>
                    <img src={person} alt="" className={`${styles["person-image"]}`} />
                    <p className={`${styles.name}`}>{props.name}</p>
                </div>
                <h3 className={`${styles.text}`}>{props.title}</h3>
                <div className={`${styles.time}`}>
                    <img src={time} alt="" className={`${styles.pic}`} />
                    <p className={`${styles.date}`}>{`${props.read} | ${props.date}`}</p>
                </div>
            </div>

        </div>

    );
}

export default ArticleCard;