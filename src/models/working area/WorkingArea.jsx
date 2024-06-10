import React from "react";
import { useCursor } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";

import Computer from "./Computer";
import DigitalClock from "./DigitalClock";
import Keyboard from "./Keyboard";
import LabChair from "./LabChair";
import LabDesk from "./LabDesk";
import Monitor from "./Monitor";
import Mouse from "./Mouse";
import Tooltip from "../../components/Tootlip";
import useMainStore from "../../store/useMainStore";
import { FOCUS_FACILITIES } from "../../constants";
import { useResponsiveScreen } from "../../utils";

const WorkingArea = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const { isMobile } = useResponsiveScreen()

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

        let cameraPosition = [-2.7, 1.3, -2.5], controlsTargetOffset = [-0.1,-0.05,0]
        if (isMobile) {
            cameraPosition = [-2.65, 1.3, -2.55]
            controlsTargetOffset = [-0.1,-0.05,0]
        }
        
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_FACILITIES)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }
    }, [focusTarget])

    // set cursor to pointer if the area is hovered and the focus target is not the lounge area
    useCursor(isHovered && focusTarget !== FOCUS_FACILITIES)

    return (
        <>
        <Select enabled={isHovered}>
            <group {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                <LabDesk nodes={nodes} materials={materials} position={[-3.153, 0.8, -2.573]} rotation={[Math.PI, 0, Math.PI]} />
                <LabChair nodes={nodes} materials={materials} position={[-2.118, 0, -2.651]} rotation={[Math.PI, 0, Math.PI]} />
                <Monitor nodes={nodes} materials={materials} position={[-3.3, 0.8, -2.562]} />
                <Keyboard nodes={nodes} materials={materials} position={[-2.969, 0.815, -2.554]} />
                <Mouse nodes={nodes} materials={materials} position={[-2.97, 0.815, -2.944]} />
                <Computer nodes={nodes} materials={materials} position={[-3.3, 0.993, -3.031]} />
                <DigitalClock nodes={nodes} materials={materials} position={[-3.263, 0.849, -2.074]} />
            </group>
        </Select>
        <Tooltip position={[-3.153, 1.8, -2.573]} rotation={[0,Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
            <p style={{
                fontSize: '8pt',
                margin: 0
            }}>Fasilitas</p>
        </Tooltip>
        </>
    )
}

export default React.memo(WorkingArea)