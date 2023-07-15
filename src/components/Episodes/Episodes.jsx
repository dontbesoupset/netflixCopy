import styles from './Episodes.module.scss'

const Episodes = ({movie}) => {
    return (
        <div className={styles.episodes}>
            <img src={movie.logo} alt={movie.name} width="200px" />
        </div>
    )
}

export default Episodes;