import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";


const navActive = navData => navData.isActive ? styles.active : ''

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' className={navActive}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/messages' className={navActive}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' className={navActive}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' className={navActive}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' className={navActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav