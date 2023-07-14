import styles from './BottomNavigation.module.scss'

const BottomNavigation = ({activeTab, setActiveTab}) => {
    return (
        <nav className={styles.nav}>
                <button 
                className={activeTab === 1 ? styles.acyive : ''}
                onClick={() => setActiveTab(1)}>
                   Overview
                </button>

                <button 
                className={activeTab === 2 ? styles.acyive : ''}
                onClick={() => setActiveTab(2)}>
                   Episodes
                </button>

                <button 
                className={activeTab === 3 ? styles.acyive : ''}
                onClick={() => setActiveTab(3)}>
                   Details
                </button>
        
        </nav>
    )
}

export default BottomNavigation;