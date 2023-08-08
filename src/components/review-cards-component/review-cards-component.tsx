
import styles from './review-cards-component.module.css';
import person from '../../assets/images/Recomm-person1.png';
import star from "../../assets/images/review_star.png";
import house from "../../assets/images/review_house.png";
import ReviewCard from '../review-card/review-card';
import { useSelector } from 'react-redux';
import { TReviewCard } from '../../utils/types';


function ReviewCardsComponent() {
    const { reviewCards } = useSelector((store: any): any => {
        return {
            reviewCards: store.houterReducer.reviewCards
        }
    })

    return (

        <div className={`${styles.container}`}>

            <div className={`${styles.cards}`}>
                {
                    reviewCards.map((card: TReviewCard) => {

                        return <ReviewCard key={card.id} {...card} />
                    })
                }

            </div>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.page}`}></div>
                <div className={`${styles.page_active}`}></div>
                <div className={`${styles.page}`}></div>

            </div>

        </div>
    );
}

export default ReviewCardsComponent;