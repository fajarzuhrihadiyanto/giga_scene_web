import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

import { addVector3, useResponsiveScreen } from "../../utils"
import PictureDescription from "../../html/PictureDescription"

const Picture = ({nodes, materials, val, nextPic, prevPic, backFn, index, shown, ...props}) => {

    // load the picture texture
    const colorMap = useLoader(TextureLoader, val.photo_url)
    
    // responsive screen
    const { isMobile } = useResponsiveScreen()
    let position = [.1,0,-.7]
    if (isMobile) {
        position = [.1,-.6,0]
    }

    return (
        <>
            <group {...props} >
                <group
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.2, 1, 0.25]}
                    userData={{ name: "picture frame" }}
                >
                    <mesh
                        rotation={[0, Math.PI , 0]}
                        geometry={nodes.picture_frame_1.geometry}
                        material={materials["picture frame_base"]}
                    >
                        <meshStandardMaterial map={colorMap} />
                    </mesh>
                    <mesh
                        geometry={nodes.picture_frame_2.geometry}
                        material={materials["picture frame_frame"]}
                    />
                </group>
            </group>
            {shown &&
            <PictureDescription
                position={addVector3(props.position, position)}
                val={val}
                shown={shown}
                nextPic={nextPic}
                prevPic={prevPic}
                backFn={backFn}
            />}
            
        </>
    )
}

export default Picture