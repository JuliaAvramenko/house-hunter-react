
import styles from './house-stat-card.module.css';
import person from "../../assets/images/Recomm-person1.png"

import { FC } from 'react';
import { THouseStatCard, TRecommendationCard } from '../../utils/types';


const HouseStatCard: FC<THouseStatCard> = (props) => {

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles['images-wrapper']}`}>
                    <img src={person} alt="" className={`${styles.image}`} />
                </div>
                <div className={`${styles.info}`}>
                    <h5 className={`${styles.title}`}>{props.header}</h5>
                    <p className={`${styles.text}`}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default HouseStatCard;