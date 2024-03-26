import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import CoffeeChair from "./CoffeeChair";
import CoffeeTable from "./CoffeeTable";
import Tv from "./Tv";

import Tooltip from "../../components/Tootlip";
import useMainStore from "../../store/useMainStore";
import { FOCUS_GENERAL_INFORMATION } from "../../constants";

const LoungeArea = ({nodes, materials, ...props}) => {
    
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // lounge area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // lounge area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // lounge area click function
    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition([1.85, 1.85, -3.75])
            setControlsTargetOffset([0,.01,-.04])
        }
    }, [focusTarget])

    // set cursor to pointer if the area is hovered and the focus target is not the lounge area
    useCursor(isHovered && focusTarget !== FOCUS_GENERAL_INFORMATION)

    return (
        <>
            <Select enabled={isHovered}>
                <group {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <CoffeeTable nodes={nodes} materials={materials} position={[1.745, 0, -4.017]}/>
                    <CoffeeChair nodes={nodes} materials={materials} position={[1.745, 0, -4.017]} rotation={[0, -Math.PI / 2, 0]}/>
                    <CoffeeChair nodes={nodes} materials={materials} position={[1.245, 0, -4.017]} rotation={[0, Math.PI / 6, 0]}/>
                    <CoffeeChair nodes={nodes} materials={materials} position={[2.245, 0, -4.017]} rotation={[0, 5 * Math.PI / 6, 0]}/>
                    <Tv nodes={nodes} materials={materials} position={[1.85, 2.001, -4.316]} rotation={[0.262, -Math.PI / 2, 0]}/>
                </group>
            </Select>
            <Tooltip position={[1.745, 1.25, -4.017]} rotation={[0,0,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '8pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>
        </>
    )
}

export default React.memo(LoungeArea)