
import styles from './house-stats.module.css';
import redCorner from "../../assets/images/red-corner.png"
import orangeCorner from "../../assets/images/orange-corner.png"
import blueCorner from "../../assets/images/blue-corner.png"
import HouseStatCard from '../house-stat-card/house-stat-card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FC } from 'react';
import { THouseStatCard } from '../../utils/types';

function HouseStats() {
    const { cards } = useSelector((store: any): any => {
        return {
            cards: store.houterReducer.stats
        }
    })

    useEffect(() => {
        console.log(cards)
    }, [cards])

    return (
        <div className={`${styles.container}`} >
            <img src={redCorner} alt="" className={`${styles.red}`} />
            <img src={orangeCorner} alt="" className={`${styles.orange}`} />
            <img src={blueCorner} alt="" className={`${styles.blue}`} />

            <div className={`${styles.cards}`}>
                {cards.map((card: THouseStatCard) => {
                    return <HouseStatCard key={card.id} {...card} />
                })}



            </div>
        </div>
    );
}

export default HouseStats;