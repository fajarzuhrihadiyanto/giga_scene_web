import React from "react";

import { Html } from "@react-three/drei";

import styles from "./styles/BookPages.module.css";
import buttonStyles from "./styles/Button.module.css";

export const SubjectPagesLeft = ({shown, title, description, mandatory}) => {
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
        <Html
            ref={htmlRef}
            className={styles.html}
            transform occlude
            scale={[.02, .02, .02]}
            rotation={[0,-Math.PI/2,0]}
            position={[-0.0001,0,-0.15]}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p style={{margin: 0}}>Mata kuliah {mandatory ? 'wajib' : 'pilihan'}</p>
                <div>
                    <h3>Deskripsi Mata Kuliah</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </Html>
    )
}



export const SubjectPagesRight = ({ shown, objective, backFn }) => {
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
        <Html
            ref={htmlRef}
            transform occlude
            scale={[.02, .02, .02]}
            rotation={[0,-Math.PI/2,Math.PI]}
            position={[-0.0001,0,-0.15]}
            className={styles.html}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>Capaian Pembelajaran Mata Kuliah</h1>
                    <ul className={styles.list}>
                        {objective.map((val, index) => {
                            return (
                                <li key={index} className={styles.list_item}>{val}</li>
                            )
                        })}
                    </ul>
                </div>
                <div
                    className={buttonStyles.button_container}
                    >
                        <button
                            className={buttonStyles.black_button}
                            onClick={backFn}
                            >Back</button>
                        <a
                            href='https://www.its.ac.id/informatika/id/akademik/kurikulum-silabus-s1/'
                            target="_blank"
                            rel="noreferrer"
                            className={buttonStyles.link_button}
                            >More</a>
                </div>
            </div>
        </Html>
    )
}