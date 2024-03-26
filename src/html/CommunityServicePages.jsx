import { Html } from "@react-three/drei"
import React from "react"

import styles from "./styles/BookPages.module.css"
import buttonStyles from "./styles/Button.module.css";

export const CommunityServicePagesLeft = ({shown, type, title, researcher, year, backFn}) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            if(shown) {
                // Page will show after book opened (1.5s)
                setTimeout(() => {
                    htmlRef.current.style.opacity = 1
                }, 1500)
            } else {
                htmlRef.current.style.opacity = 0
            }
        }
    }, [shown])
    return (
        <Html ref={htmlRef}
            transform occlude
            scale={[.02, .02, .02]}
            rotation={[0,-Math.PI/2,0]}
            position={[-0.0001,0.005,-0.15]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>tahun pengabdian masyarakat : {year}</p>
                <p className={styles.description}>jenis pengabdian masyarakat : {type}</p>
                <p className={styles.description}>dosen : {researcher}</p>

                <div className={buttonStyles.button_container_left}>
                    <button
                        className={buttonStyles.black_button}
                        onClick={backFn}
                        >Back</button>
                </div>
            </div>
        </Html>
    )
}