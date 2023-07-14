import { useState } from 'react'

import styles from './Main.module.scss'
import Information from './Information'
import Sidebar from '../UI/Sidebar/Sidebar'
import { DATA } from '../../data'
import BottomNavigation from '../UI/BottomNavigation/BottomNavigation'
import Episodes from '../Episodes/Episodes'

const Main = () => {
    const [isSideBarShowed,setIsSideBarShowed] = useState(false)
    const [activeTab, setActiveTab] = useState(false)
    
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
            {/* {activeTab === 1 ? <Information movie={DATA[0]}/> : activeTab === 2 && <Episodes/>} */}
            </div>
            <BottomNavigation setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
    )
}

export default Main