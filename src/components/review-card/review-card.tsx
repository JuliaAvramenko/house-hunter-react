
import styles from './review-card.module.css';
import person from '../../assets/images/Recomm-person1.png';
import star from "../../assets/images/review_star.png";
import house from "../../assets/images/review_house.png";
import { TReviewCard } from '../../utils/types';
import { FC } from 'react';


const ReviewCard: FC<TReviewCard> = (props) => {
    return (

        <div className={`${styles.card}`}>
            <div className={`${styles["card-image"]}`}>
                <div className={`${styles["card-wrapper"]}`}>
                    <h3 className={`${styles["card-title"]}`}>{props.title}</h3>
                    <p className={`${styles["card-text"]}`}>{props.text}</p>
                    <div className={`${styles.info}`}>
                        <div className={`${styles.seller}`}>
                            <img src={person} alt="" className={`${styles["seller-image"]}`} />
                            <div className={`${styles["seller-wrapper"]}`}>
                                <p className={`${styles.name}`}>{props.name}</p>
                                <p className={`${styles.job}`}>{props.job}</p>

                            </div>

                        </div>
                        <div className={`${styles.star}`}>
                            <img src={star} alt="" className={`${styles["star-image"]}`} />
                            <div className={`${styles.number}`}>{props.rating}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    );
}

export default ReviewCard;