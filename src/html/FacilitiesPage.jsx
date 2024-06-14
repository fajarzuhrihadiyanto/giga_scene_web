import { Html } from "@react-three/drei"

import styles from './styles/Facility.module.css'
import useDataStore from "../store/dataStore"

const FacilitiesPage = () => {
    const facilities = useDataStore.useFacilities()
    return (
        <Html
            transform occlude
            position={[0.01, .21, 0]} 
            scale={[.1, .1, .1]}
            rotation={[0, Math.PI / 2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Fasilitas</h1>
                <ul className={styles.list}>
                    {facilities.map((facility, index) => <li key={index}>{facility.name}</li>)}
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage