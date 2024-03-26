import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import Vr from "./Vr";
import VrStanding from "./VrStanding";
import Tooltip from "../../../components/Tootlip";
import { FOCUS_VIRTUAL_REALITY } from "../../../constants";
import useMainStore from "../../../store/useMainStore";

const VrArea = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // vr area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // vr area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // vr area click function
    const onClick = React.useCallback(() => {
        // only set click state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_VIRTUAL_REALITY)
            setCameraPosition([-0.25, 1.75, 3])
            setControlsTargetOffset([0,-.005,.01])
        }
    }, [focusTarget])

    // set cursor to pointer while hovered
    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <VrStanding nodes={nodes} materials={materials} />
                    <Vr nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[-0.25, 1.75, 3.784]} rotation={[0,Math.PI,0]} opacity={Number(isHovered && focusTarget !== FOCUS_VIRTUAL_REALITY)} scale={Number(isHovered && focusTarget !== FOCUS_VIRTUAL_REALITY)}>
                <p style={{
                    fontSize: '8pt',
                    margin: 0,
                }}>Virtual Reality</p>
            </Tooltip>
        </>
    )
}

export default React.memo(VrArea)