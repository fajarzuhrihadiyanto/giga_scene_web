import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import Tooltip from "../../../components/Tootlip"
import useMainStore from "../../../store/useMainStore"
import { FOCUS_OMNIDIRECTIONAL_THREADMILL } from "../../../constants"

const OmniOne = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // omni one area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // omni one area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // omni one area click function
    const onClick = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_OMNIDIRECTIONAL_THREADMILL)
            setCameraPosition([3.064, 1, 1.25])
            setControlsTargetOffset([0,0,1.25])
        }
    }, [focusTarget])

    // set cursor to pointer while hovered
    useCursor(isHovered && focusTarget !== FOCUS_OMNIDIRECTIONAL_THREADMILL)

    return (
        <>
            <Select enabled={isHovered && focusTarget !== FOCUS_OMNIDIRECTIONAL_THREADMILL}>
                <group {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <group
                        position={[3.065, 0.291, 3.165]}
                        rotation={[Math.PI / 2, 0, 0]}
                        userData={{ name: "omni_pole" }}
                    >
                        <mesh
                        geometry={nodes.omni_pole_1.geometry}
                        material={materials.omni_pole}
                        />
                        <mesh
                        geometry={nodes.omni_pole_2.geometry}
                        material={materials.omni_pole_metal}
                        />
                    </group>
                    <mesh
                        geometry={nodes.omni_pole_arm_1.geometry}
                        material={materials.omni_pole_metal}
                        position={[3.065, 1.141, 3.142]}
                        rotation={[0.93, 0, 0]}
                        scale={[0.85, 0.85, 1.35]}
                        userData={{ name: "omni_pole_arm_1" }}
                    />
                    <mesh
                        geometry={nodes.omni_pole_arm_2.geometry}
                        material={materials.omni_pole_metal}
                        position={[3.065, 1.351, 2.977]}
                        scale={[0.632, 0.632, 1.003]}
                        userData={{ name: "omni_pole_arm_2" }}
                    />
                    <mesh
                        geometry={nodes.omni_pole_base.geometry}
                        material={materials.omni_pole_metal}
                        position={[3.064, 0.056, 4.048]}
                        userData={{ name: "omni_pole_base" }}
                    />
                    <mesh
                        geometry={nodes.omni_pole_joints_1.geometry}
                        material={materials.omni_pole_joints_base}
                        position={[3.065, 1.141, 3.141]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.054, 0.055, 0.054]}
                        userData={{ name: "omni_pole_joints_1" }}
                    />
                    <mesh
                        geometry={nodes.omni_pole_joints_2.geometry}
                        material={materials.omni_pole_joints_base}
                        position={[3.065, 1.353, 2.98]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.054, 0.055, 0.054]}
                        userData={{ name: "omni_pole_joints_2" }}
                    />
                    <mesh
                        geometry={nodes.omni_pole_joints_3.geometry}
                        material={materials.omni_pole_joints_base}
                        position={[3.065, 1.353, 2.773]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.042, 0.043, 0.042]}
                        userData={{ name: "omni_pole_joints_3" }}
                    />
                    <group position={[3.065, 0.05, 2.531]} userData={{ name: "omni_base" }}>
                        <mesh
                        geometry={nodes.omni_base_1.geometry}
                        material={materials.omni_base}
                        />
                        <mesh
                        geometry={nodes.omni_base_2.geometry}
                        material={materials.omni_base_light}
                        />
                        <mesh
                        geometry={nodes.omni_base_3.geometry}
                        material={materials.omni_base_edge}
                        />
                        <mesh
                        geometry={nodes.omni_base_4.geometry}
                        material={materials.omni_base_pad}
                        />
                    </group>
                    <group
                        position={[3.122, 1.582, 2.641]}
                        rotation={[0.331, 0, 0]}
                        userData={{ name: "omni_mounting_top" }}
                    >
                        <mesh
                        geometry={nodes.omni_mounting_top_1.geometry}
                        material={materials.omni_mounting_top_edge}
                        />
                        <mesh
                        geometry={nodes.omni_mounting_top_2.geometry}
                        material={materials.omni_mounting_top_base}
                        />
                    </group>
                    <mesh
                        geometry={nodes.omni_mounting_bottom.geometry}
                        material={materials.omni_mounting_top_edge}
                        position={[3.181, 1.318, 2.547]}
                        userData={{ name: "omni_mounting_bottom" }}
                    />
                    <mesh
                        geometry={nodes.omni_mounting_base.geometry}
                        material={materials.omni_mounting_base}
                        position={[3.065, 1.35, 2.731]}
                        rotation={[1.515, 0, 0]}
                        scale={[0.035, 0.172, 0.172]}
                        userData={{ name: "omni_mounting_base" }}
                    />
                    <group
                        position={[3.065, 1.491, 2.427]}
                        rotation={[1.532, 0, 0]}
                        userData={{ name: "omni_mounting_top_belt" }}
                    >
                        <mesh
                        geometry={nodes.omni_mounting_top_belt_1.geometry}
                        material={materials.omni_mounting_top_belt_base}
                        />
                        <mesh
                        geometry={nodes.omni_mounting_top_belt_2.geometry}
                        material={materials.omni_mounting_top_belt}
                        />
                    </group>
                    <mesh
                        geometry={nodes.omni_mounting_waist_base.geometry}
                        material={materials.omni_mounting_base_pad}
                        position={[3.065, 1.204, 2.724]}
                        rotation={[1.559, 0, 0]}
                        scale={[0.114, 0.102, 0.064]}
                        userData={{ name: "omni_mounting_waist_base" }}
                    />
                    <group
                        position={[3.065, 1.203, 2.594]}
                        userData={{ name: "omni_mounting_waist_belt" }}
                    >
                        <mesh
                        geometry={nodes.omni_mounting_waist_belt_1.geometry}
                        material={materials.omni_mounting_waist_belt_base}
                        />
                        <mesh
                        geometry={nodes.omni_mounting_waist_belt_2.geometry}
                        material={materials.omni_mounting_waist_belt}
                        />
                    </group>
                    <mesh
                        geometry={nodes.omni_mounting_waist_pillow.geometry}
                        material={materials.omni_mounting_pillow}
                        position={[3.065, 1.204, 2.714]}
                        rotation={[1.559, 0, 0]}
                        scale={[0.114, 0.102, 0.064]}
                        userData={{ name: "omni_mounting_waist_pillow" }}
                    />
                    <mesh
                        geometry={nodes.omni_mounting_spine_base.geometry}
                        material={materials.omni_mounting_base_pad}
                        position={[3.065, 1.508, 2.709]}
                        rotation={[1.445, 0, 0]}
                        scale={[0.1, 0.102, 0.05]}
                        userData={{ name: "omni_mounting_spine_base" }}
                    />
                    <mesh
                        geometry={nodes.omni_mounting_spine_pillow.geometry}
                        material={materials.omni_mounting_pillow}
                        position={[3.065, 1.507, 2.699]}
                        rotation={[1.445, 0, 0]}
                        scale={[0.1, 0.102, 0.05]}
                        userData={{ name: "omni_mounting_spine_pillow" }}
                    />
                </group>
            </Select>
            <Tooltip position={[3.064, 2, 2.5]} rotation={[0,Math.PI,0]} opacity={Number(isHovered && focusTarget !== FOCUS_OMNIDIRECTIONAL_THREADMILL)} scale={Number(isHovered && focusTarget !== FOCUS_OMNIDIRECTIONAL_THREADMILL)}>
                <p style={{
                    fontSize: '8pt',
                    margin: 0,
                    textAlign: 'center'
                }}>Omnidirectional Threadmill</p>
            </Tooltip>
        </>
    )
}

export default React.memo(OmniOne)