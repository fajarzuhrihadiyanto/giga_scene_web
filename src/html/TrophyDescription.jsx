import { Html } from "@react-three/drei"
import gsap from "gsap"
import React from "react"

const TrophyDescription = ({shown, val, backFn, nextFn, prevFn, ...props}) => {

    const ref = React.useRef()

    // RESIZE DESCRIPTION SCREEN USING GSAP JUST FOR THE DELAY FEATURE, UNLESS JUST SET SCALE DIRECTLY
    React.useEffect(() => {
        if (ref.current) {
            if (shown) {
                gsap.to(ref.current.scale, {duration: 0, x: .025, y: .025, z: .025})
            } else {    
                gsap.to(ref.current.scale, {duration: 0, delay: .2, x: 0, y: 0, z: 0})
            }
        }
    }, [shown])

    return (
        <group
            ref={ref}
            scale={[0,0,0]}
            rotation={[0, -Math.PI/2, 0]}
            {...props}
        >
            <Html
                transform occlude
                style={{
                    backgroundColor: 'white',
                    opacity: shown ? 0.95 : 0,
                    transition: 'all .2s',
                    width: '300px',
                    height: '300px',
                    borderRadius: '16px'
                }}>
                <div style={{
                    padding: '32px',
                }}>
                    <h1>{val.title}</h1>
                    <p>Tahun perolehan : {val.year}</p>
                    <p>Posisi : Juara {val.rank}</p>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 32,
                            display: 'flex',
                            justifyContent: 'space-between',
                            left: 32,
                            right: 32
                        }}
                    >
                        <button
                            onClick={prevFn}
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                cursor: 'pointer',
                            }}
                        >prev</button>
                        <button
                            onClick={nextFn}
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                cursor: 'pointer',
                            }}
                        >next</button>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            right: 32,
                            top: 32,
                        }}
                    >
                        <button
                            onClick={(backFn)}
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                cursor: 'pointer',
                            }}
                        >
                            back
                        </button>
                    </div>
                </div>
            </Html>

        </group>
    )
}

export default TrophyDescription