import styles from './Episodes.module.scss'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Episodes = ({slides, movie}) => {
    
    return (
        <div className="episodes-wrapper">
            <div className={styles.info}>
            <img src={movie.logo} alt={movie.name} width="200px" />
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span>{movie.limitAge}</span>
                <span>{movie.raiting}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.description}>
                {movie.episodes}
            </div>
            </div>
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {slides.map((item, i) => (
                <SwiperSlide key={i}><img src={item} className={styles.episodesPics} alt="Episode" /></SwiperSlide>
            ))}
            <SwiperSlide></SwiperSlide>

        </Swiper>
        </div>

    )
}

export default Episodes;