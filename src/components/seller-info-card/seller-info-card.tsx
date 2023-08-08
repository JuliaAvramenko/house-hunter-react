import styles from './seller-info-card.module.css';
import person from "../../assets/images/Recomm-person1.png"
import { FC } from 'react';

type TSellerInfoCard = {
    name: string
    place: string
    avatar: string
}

const SellerInfoCard: FC<TSellerInfoCard> = ({ name, place, avatar }) => {
    return (

        <div className={`${styles.seller}`}>
            <div className={`${styles["images-wrapper"]}`}>
                <img src={person} alt="" className={`${styles["seller-image"]}`} />

            </div>
            <div className={`${styles["seller-wrapper"]}`}>
                <p className={`${styles.name}`}>{name}</p>
                <p className={`${styles.place}`}>{place}</p>

            </div>

        </div>

    );
}

export default SellerInfoCard;