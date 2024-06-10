import React from "react"
import useMainStore from "../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_FACILITIES, FOCUS_GENERAL_INFORMATION, FOCUS_OMNIDIRECTIONAL_THREADMILL, FOCUS_RESEARCH, FOCUS_SUBJECT, FOCUS_VIRTUAL_REALITY } from "../constants"

const BackButton = () => {
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const back = () => {
        let cameraPosition = [0,2,0], controlsTargetOffset = [0,0,-.01]
        
        if ([FOCUS_OMNIDIRECTIONAL_THREADMILL, FOCUS_VIRTUAL_REALITY].includes(focusTarget)) {
            controlsTargetOffset = [0,0,.01]
        }

        if ([FOCUS_FACILITIES].includes(focusTarget)) {
            controlsTargetOffset = [-.01,0,0]
        }

        console.log(controlsTargetOffset)
        setFocusTarget(null)
        setCameraPosition(cameraPosition)
        setControlsTargetOffset(controlsTargetOffset)
    }
    
    const ref = React.useRef()

    const isShown = [
        FOCUS_SUBJECT,
        FOCUS_RESEARCH,
        FOCUS_COMMUNITY_SERVICE,
        FOCUS_BOOKS,
        FOCUS_GENERAL_INFORMATION,
        FOCUS_FACILITIES,
        FOCUS_VIRTUAL_REALITY,
        FOCUS_OMNIDIRECTIONAL_THREADMILL
    ].includes(focusTarget)

    React.useEffect(() => {
        if (ref.current) {
            if (isShown) {
                // wait 1s until camera animation is complete to show the button
                setTimeout(() => {
                    ref.current.style.opacity = 1
                    ref.current.style.visibility = 'visible'
                }, 1000)
            } else {
                // immediate fading but wait 300ms until completely hidden to set visibility to hidden
                ref.current.style.opacity = 0
                setTimeout(() => {
                    ref.current.style.visibility = 'hidden'
                }, 300)
            }
        }
    }, [isShown])
    return (
        <button
            ref={ref}
            onClick={back}
            style={{
                // position to top right
                position: 'absolute',
                top: 48,
                right: 48,

                // style
                padding: '16px 32px',
                backgroundColor: 'black',
                color: 'white',
                border: '2px solid white',
                borderRadius: 8,
                fontSize: 24,

                // visibility
                cursor: 'pointer',
                opacity: 0,
                transition: 'opacity .3s'
            }}
            >Back</button>
    )
}

export default BackButton