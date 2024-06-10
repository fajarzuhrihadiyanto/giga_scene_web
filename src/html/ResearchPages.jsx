import { Html } from "@react-three/drei"
import React from "react"

import styles from "./styles/BookPages.module.css"
import buttonStyles from "./styles/Button.module.css";

export const ResearchPagesLeft = ({type, title, researcher, year, backFn}) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            // Page will show after book opened (1.5s)
            setTimeout(() => {
                htmlRef.current.scale.set(1,1,1)
            }, 1500)
        }
    }, [])
    return (
        <group ref={htmlRef} scale={[0,0,0]}>
            <Html
                transform occlude
                scale={[.02, .02, .02]}
                rotation={[0,-Math.PI/2,0]}
                position={[-0.0001,0.005,-0.15]}
                className={styles.html}
                >
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>tahun penelitian : {year}</p>
                    <p className={styles.description}>jenis penelitian : {type}</p>
                    <p className={styles.description}>peneliti : {researcher}</p>

                    <div className={buttonStyles.button_container_left}>
                        <button
                            className={buttonStyles.black_button}
                            onClick={backFn}
                            >Back</button>
                    </div>
                </div>
            </Html>
        </group>
    )
}