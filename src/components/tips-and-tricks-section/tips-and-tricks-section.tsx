import Button from '../button/button';
import styles from './tips-and-tricks-section.module.css';
import person from "../../assets/images/Recomm-person1.png"
import house from "../../assets/images/tipsandtrick_house.png"
import time from "../../assets/images/tips-and-trick-time.png"
import ArticleCard from '../article-card/article-card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TTipsAndTricksCard } from '../../utils/types';
import { FC } from 'react';

function TipsAndTricksSection() {
    const { cards } = useSelector((store: any): any => {
        return {
            cards: store.houterReducer.tipsAndTricksCards
        }
    })




    return (
        <div id="tips-and-tricks" className={`${styles.section}`}>



            <div className={`${styles.container}`}>
                <div className={`${styles.line}`}></div>
                <p className={`${styles.paragraph}`}>See tips and trick from our partnership</p>
                <h2 className={`${styles.title}`}>Find out more about selling and buying homes</h2>
                <Button type={"three"}>More Artikel</Button>
                <div className={`${styles.cards}`}>

                    <div className={`${styles.left}`}>
                        {cards.slice(0, 3).map((card: TTipsAndTricksCard) => {
                            return <ArticleCard key={card.id} {...card} />
                        })}

                    </div>
                    <div className={`${styles.right}`}>
                        <div className={`${styles["right-card"]}`}>
                            <img src={house} alt="" className={`${styles["right-image"]}`} />

                            <div className={`${styles.person}`}>
                                <img src={person} alt="" className={`${styles["person-image"]}`} />
                                <p className={`${styles.name}`}>Dianne Russel</p>
                            </div>
                            <h3 className={`${styles["right-title"]}`}>The things we need to check when we want to buy a house</h3>
                            <p className={`${styles["right-paragraph"]}`}>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                            <div className={`${styles.time}`}>
                                <img src={time} alt="" className={`${styles.pic}`} />
                                <p className={`${styles.date}`}>4 min read | 25 Apr 2021</p>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TipsAndTricksSection;
