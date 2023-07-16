import styles from './Details.module.scss'

const Details = ({movie}) => {
    return (
        <div className={styles.details}>
            <img src={movie.logo} alt={movie.name} width="200px" />
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span className={styles.limitAge}>{movie.limitAge}</span>
                <span>{movie.raiting}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.details__list}>
                <div><span>STARS: </span><p>{movie.stars.join(', ')}</p></div>
                <div><span>DIRECTOR: </span><p>{movie.director}</p></div>
                <div><span>WRITERS: </span><p>{movie.writers.join(', ')}</p></div>
            </div>
        </div>
    )
}

export default Details;