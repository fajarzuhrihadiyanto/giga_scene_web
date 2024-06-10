import React from "react";
import { useCursor } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";

import Picture from "./Picture";
import useMainStore from "../../store/useMainStore";
import { addVector3, useResponsiveScreen } from "../../utils";
import { FOCUS_LECTURER } from "../../constants";
import { LECTURERS } from "../../data/lecturers";
import Tooltip from "../../components/Tootlip";

const PictureArea = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const { isMobile } = useResponsiveScreen()

    const [hoveredPictureId, setHoveredPictureId] = React.useState(-1)
    const [clickedPictureId, setClickedPictureId] = React.useState(-1)

    // go back to main view
    const back = React.useCallback(() => {
        setFocusTarget(null)
        setClickedPictureId(-1)
        setCameraPosition([0,2,0])
        setControlsTargetOffset([-.01,0,0])
    }, [])

    // picture hover function
    const onPictureOver = React.useCallback(index => {
        if (focusTarget === null) {
            setHoveredPictureId(index)
        }
    }, [focusTarget])

    // picture unhove function
    const onPictureOut = React.useCallback(() => {
        if (focusTarget === null) {
            setHoveredPictureId(-1)
        }
    }, [focusTarget])

    // count total picture
    const totalPicture = LECTURERS.length

    // define how many picture per row
    const picturePerRow = 4

    // get picture position
    const getPicturePosition = React.useCallback((row, col) => {
        return [-3.553, 1.816 - (row*.6), 0.847 - (col*.5)]
    }, [])

    // set cursor to pointer if any picture is hovered
    useCursor(hoveredPictureId !== -1)

    return (
        <group {...props}>
            {LECTURERS.map((val, index) => {
                // get each picture position
                const row = Math.floor(index / picturePerRow)
                const col = index % picturePerRow
                const position = getPicturePosition(row, col)

                // picture click function
                const onClick = () => {
                    // dont set clicked picture if the focus target is already at the picture
                    if (focusTarget === FOCUS_LECTURER) return

                    let cameraPositionOffset = [0.5, 0, -0.5], controlsTargetOffset = [-.01, 0, 0]
                    if (isMobile) {
                        cameraPositionOffset = [1.1, -.4, 0]
                    }

                    // reset hovered picture id
                    setHoveredPictureId(-1)

                    setFocusTarget(FOCUS_LECTURER)
                    setClickedPictureId(index)
                    setCameraPosition(addVector3(position, cameraPositionOffset))
                    setControlsTargetOffset(controlsTargetOffset)
                }

                // get next picture position respectively
                const next = {
                    row: Math.floor(((index + 1) % totalPicture) / picturePerRow),
                    col: ((index + 1) % totalPicture) % picturePerRow
                }
                const nextPosition = getPicturePosition(next.row, next.col)

                // get previous picture position respectively
                const prev = {
                    row: Math.floor(((index - 1 + totalPicture) % totalPicture) / picturePerRow),
                    col: ((index - 1 + totalPicture) % totalPicture) % picturePerRow
                }
                const prevPosition = getPicturePosition(prev.row, prev.col)
            
                // go to next picture
                const nextPic = () => {
                    let cameraPositionOffset = [0.5, 0, -0.5], controlsTargetOffset = [-.01, 0, 0]
                    if (isMobile) {
                        cameraPositionOffset = [1.1, -.4, 0]
                    }
                    setClickedPictureId((index + 1) % totalPicture)
                    setCameraPosition(addVector3(nextPosition, cameraPositionOffset))
                    setControlsTargetOffset(controlsTargetOffset)
                }
            
                // go to previous picture
                const prevPic = () => {
                    let cameraPositionOffset = [0.5, 0, -0.5], controlsTargetOffset = [-.01, 0, 0]
                    if (isMobile) {
                        cameraPositionOffset = [1.1, -.4, 0]
                    }
                    setClickedPictureId((index - 1 + totalPicture) % totalPicture)
                    setCameraPosition(addVector3(prevPosition, cameraPositionOffset))
                    setControlsTargetOffset(controlsTargetOffset)
                }

                // set hovered status
                const hovered = hoveredPictureId === index

                // setting tooltip position based on the picture position
                const tooltip_position = addVector3(position, [.01, .5, 0])

                
                return (
                    <Select enabled={hovered}>
                        <Picture
                            key={index}
                            nodes={nodes}
                            materials={materials}
                            position={position}
                            shown={clickedPictureId === index}
                            onClick={onClick}
                            onPointerOver={() => onPictureOver(index)}
                            onPointerOut={onPictureOut}
                            index={index}
                            nextPic={nextPic}
                            prevPic={prevPic}
                            backFn={back}
                            val={val}
                            />
                        <Tooltip position={tooltip_position} rotation={[0,Math.PI/2,0]} opacity={Number(hovered)} scale={hovered}>
                            <p style={{
                                fontSize: '4pt',
                                margin: 0,
                                textAlign: 'center'
                            }}>{val.name}</p>
                        </Tooltip>
                    </Select>
                )
            })}
        </group>
    )
}

export default React.memo(PictureArea)