import Button from '../button/button';
import styles from './header.module.css';
import logo from "../../assets/images/logo1.png"

function Header() {

    return (
        <div className={`${styles.container}`} >
            <div className={`${styles.logo}`}>
                <img src={logo} alt="" className={`${styles.pic}`} />
                <h4 className={`${styles.name}`}>Hounter</h4>
            </div>
            <div className={`${styles.buttons}`}>
                <div className={`${styles['nav-buttons']}`}>
                    <Button type={'one'}>About us</Button>
                    <Button type={'one'}>Article</Button>
                    <Button type={'one'}>Property</Button>
                </div>
                <Button type={"two"}>Sign Up!</Button>
            </div>

        </div>
    );
}

export default Header;
