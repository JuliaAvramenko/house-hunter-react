import styles from './recommendation-card.module.css';

import houseOne from "../../assets/images/Recomm-house1.png"
import fire from "../../assets/images/fire.png"
import SellerInfoCard from '../seller-info-card/seller-info-card';
import { FC } from 'react';
import { TRecommendationCard } from '../../utils/types';


const RecommendationCard: FC<TRecommendationCard> = (props) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles["image-wrapper"]}`}>
                <div className={`${styles.detail}`}>
                    <img src={fire} alt="" className={`${styles["detail-image"]}`} />
                    <p className={`${styles["detail-text"]}`}>{props.feature}</p>
                </div>
            </div>
            <h3 className={`${styles.title}`}>{props.title}</h3>
            <p className={`${styles.price}`}>{props.price}</p>
            <SellerInfoCard
                name={props.name}
                place={props.place}
                avatar={props.avatar}

            ></SellerInfoCard>

        </div>
    );
}

export default RecommendationCard;