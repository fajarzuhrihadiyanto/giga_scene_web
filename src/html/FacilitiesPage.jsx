import { Html } from "@react-three/drei"

import styles from './styles/Facility.module.css'

const FacilitiesPage = () => {
    return (
        <Html
            transform occlude
            position={[0.01, .21, 0]} 
            scale={[.1, .1, .1]}
            rotation={[0, Math.PI / 2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>PC Client (Intel Core i7 Gen 12, Ram 32GB, SSD 1TB, Monitor 24″ Curved)</li>
                    <li>Oculus Rift Set (Game controller)</li>
                    <li>Oculus VR Development KIT DK-2-V51-BDL (Game controller)</li>
                    <li>HTC VIVE Virtual Reality (Game controller)</li>
                    <li>PC High End (Intel Core i9-12900K, 64GB DDR5, RTX 3080Ti 12GB)</li>
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage