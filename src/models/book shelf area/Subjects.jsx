import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import Book from "./Book";

import Tooltip from "../../components/Tootlip";
import useMainStore from "../../store/useMainStore";
import { FOCUS_BOOK_DETAIL, FOCUS_SUBJECT } from "../../constants";
import { SubjectPagesLeft, SubjectPagesRight } from "../../html/SubjectPages";
import { useResponsiveScreen } from "../../utils";
import useDataStore from "../../store/dataStore";

const Subjects = ({nodes, materials, ...props}) => {
    
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const subjects = useDataStore.useSubjects()
    const { isMobile } = useResponsiveScreen()

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

    // subject area click function
    const onClick = React.useCallback(() => {
        let cameraPosition = [-.95, 1.72, -3.25], controlsTargetOffset = [0,0,-.01]
        if (isMobile) {
            cameraPosition = [-1, 1.72, -1.5]
            controlsTargetOffset = [0,0,-.01]
        }

        // only rise click event while on main view
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_SUBJECT)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }
    }, [focusTarget])

    // =====| SINGLE BOOK AREA |=====
    // State wether the book is hovered or not, and wether the book is clicked or not
    const [hoveredBookId, setHoveredBookId] = React.useState(-1)
    const [clickedBookId, setClickedBookId] = React.useState(-1)

    // book hover function
    const onBookOver = React.useCallback((e, id) => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            // stop propagation make sure only the first hit object will rise the event
            e.stopPropagation()
            setHoveredBookId(id)
        }
    }, [focusTarget])

    // book unhove function
    const onBookOut = React.useCallback(() => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            setHoveredBookId(-1)
        }
    }, [focusTarget])

    // book click function
    const onBookClick = React.useCallback((e, id) => {
        // book only clickable while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            e.stopPropagation()
            setFocusTarget(FOCUS_BOOK_DETAIL)

            if (isMobile) {
                const cameraPosition = [-.97, 1.72, -2.75], controlsTargetOffset = [0,0,-.01]
                
                setCameraPosition(cameraPosition)
                setControlsTargetOffset(controlsTargetOffset)
            }

            // reset hovered book id
            setHoveredBookId(-1)

            // prevent bug when other book can be clicked while on a book view
            if (clickedBookId === -1) setClickedBookId(id)
        }
    }, [focusTarget, clickedBookId])

    const back = React.useCallback(() => {
        // set focus back to subject
        setFocusTarget(FOCUS_SUBJECT)

        if (isMobile) {
            const cameraPosition = [-1, 1.72, -1.5], controlsTargetOffset = [0,0,-.01]
            
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }
        
        // reset clicked book id
        setClickedBookId(-1)
    }, [])
    // =====| SINGLE BOOK AREA |=====

    // set cursor to pointer if either any or all subject books are hovered, and not focused on book detail
    useCursor((isHovered || hoveredBookId !== -1) && focusTarget !== FOCUS_BOOK_DETAIL)

    return (
        <>
            <Select enabled={isHovered && ![FOCUS_SUBJECT, FOCUS_BOOK_DETAIL].includes(focusTarget)}>
                <group position={[-1.716, 1.72, -3.94]} {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {subjects.map((val, index) => {

                        // status hovered if the book is hovered and the focus target is on subject and no book is clicked
                        const hovered = hoveredBookId === index && focusTarget === FOCUS_SUBJECT && clickedBookId === -1

                        // status shown if the book is clicked
                        const shown = clickedBookId === index

                        return (
                        <>
                        <Select enabled={hovered} key={index}>
                            <Book
                                key={index}
                                nodes={nodes}
                                materials={materials}
                                index={index}
                                position={[index * .06 + 0,0,0]} 
                                onPointerOver={(e) => {onBookOver(e, index)}}
                                onPointerOut={onBookOut}
                                onClick={(e) => {onBookClick(e, index)}}
                                shown={shown}
                            >
                                {shown && (
                                    <>
                                        <SubjectPagesLeft title={val.name} description={val.description} mandatory={val.is_compulsory}/>
                                        <SubjectPagesRight objective={val.objective} backFn={back} />
                                    </>
                                )}
                            </Book>
                        </Select>
                        {focusTarget === FOCUS_SUBJECT && <Tooltip position={[index * .06 + 0,.175,.01]} htmlProps={{scale: hovered ? [.1,.1,.1] : [0,0,0]}} scale={Number(hovered)} opacity={Number(hovered)}>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '8pt',
                                    textAlign: 'center'
                                }}
                            >
                                {val.name}
                            </p>
                        </Tooltip>}
                        </>
                    )})}
                </group>
            </Select>
            <Tooltip position={[-0.982, 2.2, -4.121]} rotation={[0,0,0]} opacity={Number(isHovered)} scale={[1,1,1]} shown={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Mata Kuliah</p>
            </Tooltip>
        </>
    )
}

export default React.memo(Subjects)