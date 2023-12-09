import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                Profile
            </div>
            <div className={styles.item}>
                Messages
            </div>
            <div>
                News
            </div>
            <div>

            </div>
        </nav>
    )
}

export default Nav