import React from "react";
import { Html } from "@react-three/drei";

import useMainStore from "../../store/useMainStore";
import { FOCUS_GENERAL_INFORMATION } from "../../constants";
import GeneralInformationPage from "../../html/GeneralInformation";

const Tv = ({nodes, materials, ...props}) => {
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_GENERAL_INFORMATION) {
                screenRef.current.scale.set(.05, .05, .05)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [focusTarget])

    return (
        <group {...props}>
            <group userData={{ name: "tv" }}>
                <mesh
                    geometry={nodes.tv_1.geometry}
                    material={materials.tv_body}
                />
                <mesh
                    geometry={nodes.tv_2.geometry}
                    material={materials.tv_screen}
                />
                <group
                    ref={screenRef}
                    position={[.02, 0, 0]}
                    scale={[0, 0, 0]}>
                    <Html
                        transform occlude
                        rotation={[0, Math.PI / 2, 0]}
                        style={{
                            width: '960px',
                            height: '546px',
                            transition: 'all .2s',
                            opacity: Number(focusTarget === FOCUS_GENERAL_INFORMATION),
                        }}
                    >
                        <GeneralInformationPage />
                    </Html>
                </group>
            </group>
        </group>
    )
}

export default Tv