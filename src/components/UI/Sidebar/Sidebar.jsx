import styles from './Sidebar.module.scss'

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSideBarShowed, setIsSideBarShowed}) => {
    return (
        <div className={styles.sidebar}
            style={{width: isSideBarShowed ? '15%' : '10%'}}>
            <button onClick={() => setIsSideBarShowed(!isSideBarShowed)}>
                <i className={`bx bx-${isSideBarShowed ? 'x' : 'align-left'}`}
                style={{marginLeft: '30px'}}></i>
            </button>
            <ul className={isSideBarShowed ? styles.show : ''}>
                {menu.map(item => <li key={menu.indexOf(item)}><a href="/">{item}</a></li>)}
            </ul>
        </div>
    )
}

export default Sidebar;