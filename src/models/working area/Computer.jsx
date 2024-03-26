const Computer = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group
                rotation={[0, -Math.PI/2, 0]}
                userData={{ name: "pc_body" }}
            >
                <mesh
                    geometry={nodes.pc_body_1.geometry}
                    material={materials.pc_body_main}
                />
                <mesh
                    geometry={nodes.pc_body_2.geometry}
                    material={materials.pc_body_rear}
                />
            </group>
            <mesh
                geometry={nodes.pc_front.geometry}
                material={materials.pc_front}
                position={[0.143, 0.003, 0]}
                rotation={[0, -Math.PI/2, 0]}
                userData={{ name: "pc_front" }}
            />

        </group>
    )
}

export default Computer