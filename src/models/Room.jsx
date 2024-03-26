import { FrontSide } from "three"


function Door({nodes, materials, ...props}) {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.door_left_body.geometry}
                material={materials["Material.002"]}
                position={[4.916, 0, -0.136]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                userData={{ name: "door_left_body" }}
            />
            <mesh
                geometry={nodes.door_right_body.geometry}
                material={materials["Material.002"]}
                position={[4.916, 0, -2.136]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                userData={{ name: "door_right_body" }}
            />
            <group
                position={[4.971, 1.138, -0.986]}
                rotation={[0, Math.PI / 2, 0]}
                userData={{ name: "door_left_in_handle" }}
            >
                <mesh
                    geometry={nodes.door_left_in_handle_1.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.door_left_in_handle_2.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.door_left_in_handle_3.geometry}
                    material={materials["Material.001"]}
                />
            </group>
            <group
                position={[4.971, 1.138, -1.286]}
                rotation={[0, Math.PI / 2, 0]}
                userData={{ name: "door_right_in_handle" }}
            >
                <mesh
                    geometry={nodes.door_right_in_handle_1.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.door_right_in_handle_2.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.door_right_in_handle_3.geometry}
                    material={materials["Material.001"]}
                />
            </group>
            <mesh
                geometry={nodes.door_frame.geometry}
                material={materials["Material.004"]}
                position={[4.941, 2.325, -1.136]}
                rotation={[0, Math.PI / 2, 0]}
                userData={{ name: "door_frame" }}
            />
            <group
                position={[4.911, 1.138, -0.986]}
                rotation={[0, -1.571, 0]}
                userData={{ name: "door_left_out_handle" }}
            >
                <mesh
                    geometry={nodes.door_left_out_handle_1.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.door_left_out_handle_2.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.door_left_out_handle_3.geometry}
                    material={materials["Material.001"]}
                />
            </group>
            <group
                position={[4.911, 1.138, -1.286]}
                rotation={[0, -1.571, 0]}
                userData={{ name: "door_right_out_handle" }}
            >
                <mesh
                    geometry={nodes.door_right_out_handle_1.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.door_right_out_handle_2.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.door_right_out_handle_3.geometry}
                    material={materials["Material.001"]}
                />
            </group>
        </group>
    )
}

export default function Room({nodes, materials, ...props}) {
    return (
        <group userData={{ name: "room" }} {...props}>
            <mesh
                geometry={nodes.room_1.geometry}
                material={materials.room_wall}
            />
            
            {materials.room_floor.side = FrontSide}
            <mesh
                geometry={nodes.room_2.geometry}
                material={materials["room light"]}
            >
            </mesh>
            
            <mesh
                geometry={nodes.room_3.geometry}
                material={materials.room_floor}
            />
            <mesh
                geometry={nodes.room_4.geometry}
                material={materials.room_ceiling}
            />
            <Door nodes={nodes} materials={materials} />
        </group>
    )
}