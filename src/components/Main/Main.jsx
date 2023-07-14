import { useState } from 'react'

import styles from './Main.module.scss'
import Information from './Information'
import Sidebar from '../UI/Sidebar/Sidebar'
import { DATA } from '../../data'
import BottomNavigation from '../UI/BottomNavigation/BottomNavigation'

const Main = () => {
    const [isSideBarShowed,setIsSideBarShowed] = useState(false)
    
    return (
        <div className={styles.wrapper}>

            <Sidebar 
                isSideBarShowed={isSideBarShowed}
                setIsSideBarShowed={setIsSideBarShowed}/>
            <div 
            className={styles.main}
            style={{backgroundImage: `url(${DATA[0].mainImage})`,
             width: isSideBarShowed ? '85%' : '90%'}}>
                <Information movie={DATA[0]}/>
                <BottomNavigation />
            </div>

        </div>
    )
}

export default Main