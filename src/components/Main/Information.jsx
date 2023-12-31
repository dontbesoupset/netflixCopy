import { useState } from 'react'
import styles from './Main.module.scss'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'

const Information = ({movie}) => {

    const [modalActive, setModalActive] = useState(false)

    // const addToFavorites = (movieName) => {
    //     let favorites = localStorage.getItem('favMovies')
    //     if (favorites) {
    //         favorites = JSON.parse(favorites)
    //         localStorage.setItem('favMovies', [...favorites, movieName])
    //         alert('Добавлено в избранное')
    //     }
    // }

    return (
        <div className={styles.info}>
            <img src={movie.logo} alt={movie.name} width="200px" />
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span className={styles.limitAge}>{movie.limitAge}</span>
                <span>{movie.raiting}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.description}>
                {movie.description}
            </div>

            <div className={styles.buttons}>
                <Button cb={() => setModalActive(true)}>
                    <i className="bx bx-play" style={{color: '#c62e21'}}></i>
                    <span>Play</span>
                </Button>

                <Button>
                    <i className="bx bx-plus" style={{color: '#c62e21'}}></i>
                    <span>My list</span>
                </Button>
            </div>
            <Modal active={modalActive} setActive={setModalActive} movie={movie}/>
        </div>
    )
}

export default Information