import { useSelector } from 'react-redux';
import RecommendationCard from '../recommendation-card/recommendation-card';
import RecommendationHeader from '../recommendation-header/recommendation-header';
import styles from './recommendation-section.module.css';
import { useEffect } from 'react';
import { TRecommendationCard } from '../../utils/types';

function RecommendationSection() {
    const { cards } = useSelector((store: any): any => {
        return {
            cards: store.houterReducer.recommendationCards
        }
    })



    return (
        <div id="recommendation" className={`${styles.section}`} >
            <div className={`${styles.line}`}></div>
            <div className={`${styles.container}`}>

                <RecommendationHeader></RecommendationHeader>
                <div className={`${styles.cards}`}>
                    {
                        cards.map((card: TRecommendationCard) => {


                            return <RecommendationCard key={card.id} {...card} />

                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default RecommendationSection;
