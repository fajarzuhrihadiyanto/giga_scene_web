const LabChair = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.lab_chair_structure.geometry}
                material={materials["lab chair_structure"]}
                userData={{ name: "lab chair_structure" }}
            />
            <mesh
                geometry={nodes.lab_chair_seat_pillow.geometry}
                material={materials["lab chair_pillow"]}
                position={[0.203, 0.403, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.15, 1, 0.25]}
                userData={{ name: "lab chair_seat_pillow" }}
            />
            <mesh
                geometry={nodes.lab_chair_seat_base.geometry}
                material={materials["lab chair_base"]}
                position={[0.203, 0.399, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.15, 1, 0.25]}
                userData={{ name: "lab chair_seat_base" }}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_pillow.geometry}
                material={materials["lab chair_pillow"]}
                position={[0.005, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
                userData={{ name: "lab chair_backrest_pillow" }}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_base.geometry}
                material={materials["lab chair_base"]}
                position={[-0.009, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
                userData={{ name: "lab chair_backrest_base" }}
            />
        </group>
    )
}

export default LabChair