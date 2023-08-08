
import styles from './review-section.module.css';
import person from '../../assets/images/Recomm-person1.png';
import star from "../../assets/images/review_star.png";
import house from "../../assets/images/review_house.png";
import ReviewCard from '../review-card/review-card';
import ReviewCardsComponent from '../review-cards-component/review-cards-component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviewCards } from '../../services/actions/actions';


function ReviewSection() {

    useEffect(() => {
        //console.log(reviewCards)
    }, [])

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.line}`}></div>
            <p className={`${styles.paragraph}`}>See Our Review</p>
            <h2 className={`${styles.title}`}>What Our User Say About Us</h2>

            <ReviewCardsComponent></ReviewCardsComponent>


        </div>
    );
}

export default ReviewSection;