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
                <span className={styles.limitAge}>{movie.limitAge}</span>
                <span>{movie.raiting}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.description}>
                {movie.episodes}
            </div>
            <div className={styles.arrow}>
            <svg fill="#9b9a97" height="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_103_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"></path> </g></svg>
            </div>
            </div>
            <Swiper
                spaceBetween={5}
                slidesPerView={4.5}
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