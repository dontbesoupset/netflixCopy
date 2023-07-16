import './Modal.scss'

const Modal = ({active, setActive, movie}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <div className="modal__title">{movie.name}</div>
        <div className="modal__text-under">~watch trailer</div>
        <div className="modal__text">From YouTube ↓</div>
        <div className="modal__video">
        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Modal;