import React from "react"

const ArcadeMachine = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group
                position={[-2.534, 0.5, 3.803]}
                rotation={[0, -1.571, 0]}
                scale={0.5}
                userData={{ name: "arcade machine_body" }}
            >
                <mesh
                geometry={nodes.arcade_machine_body_1.geometry}
                material={materials["arcade machine_body_base"]}
                />
                <mesh
                geometry={nodes.arcade_machine_body_2.geometry}
                material={materials.arcade_machine_body_light}
                />
                <mesh
                geometry={nodes.arcade_machine_body_3.geometry}
                material={materials["arcade machine_body_front"]}
                />
                <mesh
                geometry={nodes.arcade_machine_body_4.geometry}
                material={materials["arcade machine_body_screen"]}
                />
            </group>
            <group
                position={[-2.202, 0.929, 3.148]}
                rotation={[-0.431, 0, 0]}
                scale={0.025}
                userData={{ name: "arcade machine_buttons" }}
            >
                <mesh
                geometry={nodes.arcade_machine_buttons_1.geometry}
                material={materials["arcade machine_buttons_purple"]}
                />
                <mesh
                geometry={nodes.arcade_machine_buttons_2.geometry}
                material={materials["arcade machine_buttons_light"]}
                />
                <mesh
                geometry={nodes.arcade_machine_buttons_3.geometry}
                material={materials["arcade machine_buttons_red"]}
                />
                <mesh
                geometry={nodes.arcade_machine_buttons_4.geometry}
                material={materials["arcade machine_buttons_aqua"]}
                />
                <mesh
                geometry={nodes.arcade_machine_buttons_5.geometry}
                material={materials["arcade machine_buttons_lime"]}
                />
            </group>
            <group
                position={[-2.783, 0.931, 3.15]}
                rotation={[-0.423, Math.PI / 2, 0]}
                scale={[-0.041, -0.003, -0.041]}
                userData={{ name: "arcade machine_joystick" }}
            >
                <mesh
                geometry={nodes.arcade_machine_joystick_1.geometry}
                material={materials["arcade machine_joystick_base"]}
                />
                <mesh
                geometry={nodes.arcade_machine_joystick_2.geometry}
                material={materials["arcade machine_joystick_light"]}
                />
                <mesh
                geometry={nodes.arcade_machine_joystick_3.geometry}
                material={materials["arcade machine_joystick_ball"]}
                />
            </group>
        </group>
    )
}

export default React.memo(ArcadeMachine)