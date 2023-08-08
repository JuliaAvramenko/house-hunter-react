import styles from './footer.module.css';
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"
import logo from "../../assets/images/logo1.png"
import green from "../../assets/images/footer-light-green.png"
import blue from "../../assets/images/footer-blue.png"



function Footer() {
    return (
        <div className={`${styles.section}`}>
            <img src={green} alt="" className={`${styles.green}`} />
            <img src={blue} alt="" className={`${styles.blue}`} />
            <div className={`${styles.container}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.logo}`}>
                        <img src={logo} alt="" className={`${styles.pic}`} />
                        <h4 className={`${styles.name}`}>Hounter</h4>
                    </div>
                    <p className={`${styles.text}`}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                    <div className={`${styles.networks}`}>
                        <img src={facebook} alt="" className={`${styles.icon}`} />
                        <img src={twitter} alt="" className={`${styles.icon}`} />
                        <img src={instagram} alt="" className={`${styles.icon}`} />
                    </div>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <h4 className={`${styles.title}`}>Property</h4>
                        <div className={`${styles["item-wrapper"]}`}>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>House</a></p>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>Arpartment</a></p>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>Villa</a></p>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>New Article</a></p>
                        </div>
                    </div>
                    <div className={`${styles.wrapper}`}>
                        <h4 className={`${styles.title}`}>Article</h4>
                        <div className={`${styles["item-wrapper"]}`}>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>New Article</a></p>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>Popular Article</a></p>
                            <p className={`${styles.item}`}> <a href="#recommendation" className={`${styles.link}`}>Most Read</a></p>
                            <p className={`${styles.item}`}> <a href="#tips-and-tricks" className={`${styles.link}`}>Tips & Trick</a></p>

                        </div>
                    </div>
                    <div className={`${styles.wrapper}`}>
                        <h4 className={`${styles.title}`}>Contact</h4>
                        <div className={`${styles["item-wrapper"]}`}>
                            <p className={`${styles.item}`}> <a href="#recommendatio" className={`${styles.link}`}>New Article</a></p>
                            <p className={`${styles.item}`}>2464 Royal Ln. Mesa, New Jersey 45463</p>
                            <p className={`${styles.item}`}>(671) 555-0110</p>
                            <p className={`${styles.item}`}>info@hounter.com</p>
                        </div>

                    </div>
                </div >
            </div >
        </div >



    );
}

export default Footer;
