import React from "react"
import gsap from "gsap"

const TrophyCabinet = ({nodes, materials, shown, ...props}) => {

    // set the door reference
    const leftDoor = React.useRef()
    const rightDoor = React.useRef()

    React.useEffect(() => {
        // animate door open and close when focus is onto the trophy cabinet or away from it
        if (leftDoor.current && rightDoor.current) {
            if (shown) {
                gsap.to(leftDoor.current.rotation, {duration: 1, y: 2*Math.PI/3})
                gsap.to(rightDoor.current.rotation, {duration: 1, y: 2*Math.PI/3})
            } else {
                gsap.to(leftDoor.current.rotation, {duration: 1, y: 0})
                gsap.to(rightDoor.current.rotation, {duration: 1, y: 0})
            }
        }
    }, [shown, nodes.trophy_cabinet_door_left, nodes.trophy_cabinet_door_right])

    return (
        <group {...props}>
            <group
                rotation={[Math.PI, 0, Math.PI]}
                userData={{ name: "trophy cabinet_body" }}
            >
                <mesh
                    geometry={nodes.trophy_cabinet_body_1.geometry}
                    material={materials.Metal}
                />
                <mesh
                    geometry={nodes.trophy_cabinet_body_2.geometry}
                    material={materials["Black Matte"]}
                />
                <mesh
                    geometry={nodes.trophy_cabinet_body_3.geometry}
                    material={materials.Light}
                />
            </group>
            <group
                position={[0.001, 0.66, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                userData={{ name: "trophy cabinet_platform" }}
            >
                <mesh
                    geometry={nodes.trophy_cabinet_platform_1.geometry}
                    material={materials["Black Matte"]}
                />
                <mesh
                    geometry={nodes.trophy_cabinet_platform_2.geometry}
                    material={materials.Metal}
                />
                <mesh
                    geometry={nodes.trophy_cabinet_platform_3.geometry}
                    material={materials.Light}
                />
            </group>
            <mesh
                ref={leftDoor}
                geometry={nodes.trophy_cabinet_door_left.geometry}
                material={materials.Glass}
                position={[-0.3, 1, -0.55]}
                rotation={[Math.PI, 0, Math.PI]}
                userData={{ name: "trophy cabinet_door_left" }}
            />
            <mesh
                ref={rightDoor}
                geometry={nodes.trophy_cabinet_door_right.geometry}
                material={materials.Glass}
                position={[-0.29, 1, 0.55]}
                userData={{ name: "trophy cabinet_door_right" }}
            />
        </group>
    )
}

export default TrophyCabinet