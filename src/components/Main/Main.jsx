import { useState } from 'react'

import styles from './Main.module.scss'
import Information from './Information'
import Sidebar from '../UI/Sidebar/Sidebar'
import { DATA } from '../../data'
import BottomNavigation from '../UI/BottomNavigation/BottomNavigation'
import Episodes from '../Episodes/Episodes'
import Details from '../Details/Details'

const Main = () => {
    const [isSideBarShowed,setIsSideBarShowed] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    let tabContent = <Information movie={DATA[0]}/>;

    switch(activeTab) {
        case 1:
            tabContent = <Information movie={DATA[0]}/>
            break;
        case 2:
            tabContent =  <Episodes slides={DATA[0].photos} movie={DATA[0]} />
            break;
        case 3 :
            tabContent = <Details movie={DATA[0]} />
            break;
        default:
            tabContent = <Information movie={DATA[0]}/>
    }
    
    return (
        <div className={styles.wrapper}>

            <Sidebar 
                isSideBarShowed={isSideBarShowed}
                setIsSideBarShowed={setIsSideBarShowed}/>
            <div 
            className={styles.main}
            style={{backgroundImage: `url(${DATA[0].mainImage})`,
             width: isSideBarShowed ? '85%' : '90%'}}>
            
            {tabContent}

            </div>
            <BottomNavigation setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
    )
}

export default Main