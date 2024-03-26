import React from "react"
import gsap from "gsap"

import { FOCUS_VIRTUAL_REALITY } from "../../../constants"
import useMainStore from "../../../store/useMainStore"

const Vr = ({nodes, materials, ...props}) => {
    const focusTarget = useMainStore.useFocusTarget()

    const ref = React.useRef()

    // animate the model to the focus target
    React.useEffect(() => {
        if (ref.current) {
            if (focusTarget === FOCUS_VIRTUAL_REALITY) {
                gsap.to(ref.current.position, {duration: .5, delay: .5, y: 1.5, z: 3.5})
            } else {
                gsap.to(ref.current.position, {duration: .5, y: 1.138, z: 3.653})
            }
        }
    }, [focusTarget])
    return (
        <group
            ref={ref}
            position={[-0.249, 1.138, 3.653]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            userData={{ name: "Sketchfab_model" }}
            {...props}
        >
            <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.001}
            userData={{ name: "RootNode" }}
            >
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
                userData={{ name: "Controllers" }}
            >
                <mesh
                    geometry={nodes.Controllers_Controllers_0.geometry}
                    material={materials.Controllers}
                    position={[-1.763, 1.322, -0.014]}
                    rotation={[-0.992, 0, 0]}
                    userData={{ name: "Controllers_Controllers_0" }}
                />
            </group>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
                userData={{ name: "Controllers.001" }}
            >
                <mesh
                    geometry={nodes.Controllers001_Controllers_0.geometry}
                    material={materials.Controllers}
                    position={[1.763, 1.322, -0.014]}
                    rotation={[-0.992, 0, 0]}
                    userData={{ name: "Controllers.001_Controllers_0" }}
                />
            </group>
            <group
                position={[0, 53.434, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
                userData={{ name: "Oculus Headset" }}
            >
                <mesh
                    geometry={nodes.Oculus_Headset_Headset_0.geometry}
                    material={materials.Headset}
                    userData={{ name: "Oculus Headset_Headset_0" }}
                />
                <mesh
                    geometry={nodes.Oculus_Headset_Headset_0001.geometry}
                    material={materials.Headset}
                    userData={{ name: "Oculus Headset_Headset_0.001" }}
                />
                <mesh
                    geometry={nodes.Oculus_Headset_Headset_0002.geometry}
                    material={materials.Headset}
                    userData={{ name: "Oculus Headset_Headset_0.002" }}
                />
            </group>
            </group>
        </group>
    )
}

export default Vr