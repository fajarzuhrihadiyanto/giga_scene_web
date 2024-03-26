import React from "react";
import { Select } from "@react-three/postprocessing";
import { useCursor } from "@react-three/drei";

import { ACHIEVEMENTS } from "../../data/achievements";
import BronzeTrophy from "./BronzeTrophy";
import GoldTrophy from "./GoldTrophy";
import SilverTrophy from "./SilverTrophy";
import Tooltip from "../../components/Tootlip";
import { addVector3 } from "../../utils";
import useMainStore from "../../store/useMainStore";
import { FOCUS_ACHIEVEMENTS, FOCUS_ACHIEVEMENTS_DETAIL } from "../../constants";
import TrophyDescription from "../../html/TrophyDescription";

const Trophy = ({nodes, materials, rank, ...props}) => {

    // return gold trophy for rank 1
    if (rank === 1) return <GoldTrophy nodes={nodes} materials={materials} {...props} />

    // return silver trophy for rank 2
    else if (rank === 2) return <SilverTrophy nodes={nodes} materials={materials} {...props} />

    // return bronze trophy otherwise
    return <BronzeTrophy nodes={nodes} materials={materials} {...props} />
}

const Trophies = ({nodes, materials, ...props}) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // count the total number of achievements
    const totalAchievements = ACHIEVEMENTS.length

    // set trophies per row
    const trophiesPerRow = 3

    // =====| TROPHY AREA |=====
    // State wether the trophy is hovered or not, and wether the trophy is clicked or not
    const [hoveredTrophyId, setHoveredTrophyId] = React.useState(-1)
    const [clickedTrophyId, setClickedTrophyId] = React.useState(-1)

    // trophy hover function
    const onPointerOver = (index) => {
        if (focusTarget === FOCUS_ACHIEVEMENTS) {
            setHoveredTrophyId(index)
        }
    }
    
    // trophy unhove function
    const onPointerOut = () => {
        if (focusTarget === FOCUS_ACHIEVEMENTS) {
            setHoveredTrophyId(-1)
        }
    }
    // =====| TROPHY AREA |=====

    // go back to main view
    const backFn = () => {
        setClickedTrophyId(-1)
    }

    // set cursor to pointer if either any or all subject books are hovered, and no book is clicked
    useCursor(hoveredTrophyId !== -1)

    React.useEffect(() => {
        if (focusTarget === FOCUS_ACHIEVEMENTS_DETAIL) {
            if (clickedTrophyId !== -1) {

                // set trophy row
                const row = Math.floor(clickedTrophyId / trophiesPerRow)

                // set trophy column
                const col = clickedTrophyId % trophiesPerRow

                // set trophy position
                const position = [0, -row * .7 + (row === 2 && .07), col * .365]

                setFocusTarget(FOCUS_ACHIEVEMENTS_DETAIL)
                setCameraPosition(addVector3(position, [4, 1.6, -3.9]))
                setControlsTargetOffset([.01,0,0])
            } else {
                setFocusTarget(FOCUS_ACHIEVEMENTS)
                setCameraPosition([3, 1, -3.53])
                setControlsTargetOffset([0.01,0,0])
            }
        }
    }, [clickedTrophyId, focusTarget])

    return (
        <group {...props}>
            <group position={[4.519, 1.445, -3.899]}>
                {ACHIEVEMENTS.map((val, index) => {
                    
                    // set trophy row
                    const row = Math.floor(index / trophiesPerRow)

                    // set trophy column
                    const col = index % trophiesPerRow

                    // set trophy position
                    const position = [0, -row * .7 + (row === 2 && .07), col * .365]

                    // set click function
                    const onClick = (index) => {
                        if (focusTarget === FOCUS_ACHIEVEMENTS) {
                            setFocusTarget(FOCUS_ACHIEVEMENTS_DETAIL)
                            setClickedTrophyId(index)
                        }
                    }

                    // set next function
                    const nextFn = () => {
                        setClickedTrophyId((index + 1) % totalAchievements)
                    }

                    // set previous function
                    const prevFn = () => {
                        setClickedTrophyId((index - 1 + totalAchievements) % totalAchievements)
                    }

                    return (
                        <Select key={index} enabled={hoveredTrophyId === index} >
                            <Trophy nodes={nodes} materials={materials} rank={val.rank} position={position} onPointerOver={() => {onPointerOver(index)}} onPointerOut={onPointerOut} onClick={() => {onClick(index)}} />
                            <Tooltip position={position} opacity={Number(hoveredTrophyId === index && focusTarget === FOCUS_ACHIEVEMENTS)} htmlProps={{scale: hoveredTrophyId === index ? [.15,.15,.15] : [0,0,0]}} rotation={[0,-Math.PI/2,0]}>
                                <p style={{margin: 0, textAlign: 'center'}}>{val.title.slice(0, 20) + (val.title.length > 20 ? '...' : '')}</p>
                            </Tooltip>
                            {clickedTrophyId === index &&
                            <TrophyDescription position={addVector3(position, [-.3, .15, col !== 2 ? .2 : -.2])} val={val} shown={clickedTrophyId === index} backFn={backFn} nextFn={nextFn} prevFn={prevFn}/>
                            }
                        </Select>
                    )
                })}
            </group>
        </group>
    )
}

export default Trophies;