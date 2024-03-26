import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import Trophies from "./Trophies";
import TrophyCabinet from "./TrophyCabinet";
import Tooltip from "../../components/Tootlip";
import useMainStore from "../../store/useMainStore";
import { FOCUS_ACHIEVEMENTS, FOCUS_ACHIEVEMENTS_DETAIL } from "../../constants";

const TrophyArea = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // subject area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // subject area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // trophy area click function
    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_ACHIEVEMENTS)
            setCameraPosition([3, 1, -3.53])
            setControlsTargetOffset([0.01,0,0])
        }
    }, [focusTarget])

    // set cursor to pointer if either any or all subject books are hovered, and no book is clicked
    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered && focusTarget !== FOCUS_ACHIEVEMENTS}>
                <group {...props}>
                    <TrophyCabinet nodes={nodes} materials={materials} position={[4.563, 0, -3.53]} shown={[FOCUS_ACHIEVEMENTS, FOCUS_ACHIEVEMENTS_DETAIL].includes(focusTarget)}
                         onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}
                    />
                    <Trophies nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[4.563, 2.5, -3.53]} rotation={[0,-Math.PI/2,0]} opacity={Number(isHovered && focusTarget !== FOCUS_ACHIEVEMENTS)} scale={Number(isHovered && focusTarget !== FOCUS_ACHIEVEMENTS )}>
                <p style={{
                    fontSize: '8pt',
                    margin: 0
                }}>Pencapaian</p>
            </Tooltip>
        </>
    )
}

export default React.memo(TrophyArea);