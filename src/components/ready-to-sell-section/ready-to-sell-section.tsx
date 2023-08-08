
import ReadyToSellPics from '../ready-to-sell-pics/ready-to-sell-pics';
import ReadyToSell from '../ready-to-sell/ready-to-sell';
import styles from './ready-to-sell-section.module.css';





function ReadyToSellSection() {
    return (
        <div className={`${styles.section}`}>
            <div className={`${styles.container}`}>

                <ReadyToSell></ReadyToSell>
                <ReadyToSellPics></ReadyToSellPics>
            </div >
        </div>
    );
}

export default ReadyToSellSection;