import styles from './Header.module.scss'

const Profile = () => {
    return (
        <div className={styles['profile-wrapper']}>
            <div className={styles.notification}>
                <i className="bx bxs-bell"></i>
                <span></span>
            </div>
            <div className={styles.profile}>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Profile;