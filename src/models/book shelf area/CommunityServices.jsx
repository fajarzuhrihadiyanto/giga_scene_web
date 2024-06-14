import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import Book from "./Book";

import Tooltip from "../../components/Tootlip";
import { FOCUS_BOOK_DETAIL, FOCUS_COMMUNITY_SERVICE } from "../../constants";
import useMainStore from "../../store/useMainStore";
import { CommunityServicePagesLeft } from "../../html/CommunityServicePages";
import { useResponsiveScreen } from "../../utils";
import useDataStore from "../../store/dataStore";

export default function CommunityServices({nodes, materials, ...props}) {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const communityServices = useDataStore.useCommunityServices()
    const { isMobile } = useResponsiveScreen()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // community service area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // community service area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // community service area click function
    const onClick = React.useCallback(() => {
        let cameraPosition = [-.95, 0.72, -3.25], controlsTargetOffset = [0,0,-.01]
        if (isMobile) {
            cameraPosition = [-1, 0.72, -1.5]
            controlsTargetOffset = [0,0,-.01]
        }

        // only rise click event while on main view
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_COMMUNITY_SERVICE)
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
        // only set hover state while on community service view
        if (focusTarget === FOCUS_COMMUNITY_SERVICE) {
            // stop propagation make sure only the first hit object will rise the event
            e.stopPropagation()
            setHoveredBookId(id)
        }
    }, [focusTarget])

    // book unhove function
    const onBookOut = React.useCallback(() => {
        // only set hover state while on community service view
        if (focusTarget === FOCUS_COMMUNITY_SERVICE) {
            setHoveredBookId(-1)
        }
    }, [focusTarget])

    // book click function
    const onBookClick = React.useCallback((e, id) => {
         // book only clickable while on community service view
        if (focusTarget === FOCUS_COMMUNITY_SERVICE) {
            e.stopPropagation()
            setFocusTarget(FOCUS_BOOK_DETAIL)

            if (isMobile) {
                const cameraPosition = [-.97, 0.72, -2.75], controlsTargetOffset = [0,0,-.01]
                
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
        setFocusTarget(FOCUS_COMMUNITY_SERVICE)

        if (isMobile) {
            const cameraPosition = [-1, 0.72, -1.5], controlsTargetOffset = [0,0,-.01]
            
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }

        setClickedBookId(-1)
    }, [])
    // =====| SINGLE BOOK AREA |=====

    // set cursor to pointer if either any or all subject books are hovered, and not focused on book detail
    useCursor((isHovered || hoveredBookId !== -1) && focusTarget !== FOCUS_BOOK_DETAIL)
    return (
        <>
            <Select enabled={isHovered && ![FOCUS_COMMUNITY_SERVICE, FOCUS_BOOK_DETAIL].includes(focusTarget)}>
                <group position={[-1.716, 0.72, -3.94]} {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                {communityServices.map((val, index) => {
                        // status hovered if the book is hovered and the focus target is on subject and no book is clicked
                        const hovered = hoveredBookId === index && focusTarget === FOCUS_COMMUNITY_SERVICE && clickedBookId === -1

                        // status shown if the book is clicked
                        const shown = clickedBookId === index
                        // console.log('book', shown)

                        return (
                            <>
                                <Select enabled={hovered} key={index}>
                                    <Book
                                        nodes={nodes}
                                        materials={materials}
                                        index={index}
                                        position={[index * .06 + 0,0,0]} 
                                        onPointerOver={(e) => {onBookOver(e, index)}}
                                        onPointerOut={onBookOut}
                                        onClick={(e) => {onBookClick(e, index)}}
                                        shown={shown}
                                    >
                                        <>
                                            {shown && <CommunityServicePagesLeft type={val.community_service_type} title={val.title} researcher={val.professor_fullname} year={val.year} backFn={back}/>}
                                        </>
                                    </Book>
                                </Select>
                                {focusTarget === FOCUS_COMMUNITY_SERVICE && <Tooltip position={[index * .06 + 0,.175,.01]} htmlProps={{scale: hovered ? [.1,.1,.1] : [0,0,0]}} scale={Number(hovered)} opacity={Number(hovered)}>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '8pt',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {val.title.slice(0, 20) + (val.title.length > 20 ? '...' : '')}
                                    </p>
                                </Tooltip>}
                            </>
                        )
                    })}
                </group>
            </Select>
            <Tooltip position={[-0.982, 1.2, -4.121]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Pengabdian Masyarakat</p>
            </Tooltip>
        </>
    )
}