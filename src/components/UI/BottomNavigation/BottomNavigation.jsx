import styles from './BottomNavigation.module.scss'

const BottomNavigation = ({activeTab, setActiveTab}) => {
    return (
        <nav className={styles.nav}>
                <button 
                className={styles.active}
                onClick={() => setActiveTab(1)}>
                   Overview
                </button>

                <button 
                className={styles.active}
                onClick={() => setActiveTab(2)}>
                   Episodes
                </button>

                <button 
                className={styles.active}
                onClick={() => setActiveTab(3)}>
                   Details
                </button>
        
        </nav>
    )
}

export default BottomNavigation;