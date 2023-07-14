import styles from './Sidebar.module.scss'

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSideBarShowed, setIsSideBarShowed}) => {
    return (
        <div className={styles.sidebar}
            style={{width: isSideBarShowed ? '30%' : '15%'}}>
            <button onClick={() => setIsSideBarShowed(!isSideBarShowed)}>
                <i className={`bx bx-${isSideBarShowed ? 'x' : 'align-left'}`}></i>
            </button>
            <ul className={isSideBarShowed ? styles.show : ''}>
                {menu.map(item => <li key={menu.indexOf(item)}><a href="/">{item}</a></li>)}
            </ul>
        </div>
    )
}

export default Sidebar;