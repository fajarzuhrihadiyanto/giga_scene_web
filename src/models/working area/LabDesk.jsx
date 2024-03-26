const LabDesk = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.lab_desk_bottom.geometry}
                material={materials["lab desk_bottom"]}
                userData={{ name: "lab desk_bottom" }}
            />
            <mesh
                geometry={nodes.lab_desk_top.geometry}
                material={materials["lab desk_top"]}
                userData={{ name: "lab desk_top" }}
            />
        </group>
    )
}

export default LabDesk