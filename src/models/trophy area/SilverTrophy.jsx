const SilverTrophy = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group
                scale={[0.075, 0.05, 0.075]}
                userData={{ name: "trophy_silver_base" }}
            >
                <mesh
                    geometry={nodes.trophy_silver_base_1.geometry}
                    material={materials.trophy_base}
                />
                <mesh
                    geometry={nodes.trophy_silver_base_2.geometry}
                    material={materials.trophy_notes}
                />
            </group>
            <mesh
                geometry={nodes.trophy_silver_cup.geometry}
                material={materials.trophy_silver_cup}
                position={[0, 0.11, 0]}
                scale={-0.05}
                userData={{ name: "trophy_silver_cup" }}
            />
        </group>
    )
}

export default SilverTrophy