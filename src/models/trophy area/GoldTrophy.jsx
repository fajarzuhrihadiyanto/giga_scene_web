const GoldTrophy = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group
                scale={[0.075, 0.05, 0.075]}
                userData={{ name: "trophy_gold_base" }}
            >
                <mesh
                    geometry={nodes.trophy_gold_base_1.geometry}
                    material={materials.trophy_base}
                />
                <mesh
                    geometry={nodes.trophy_gold_base_2.geometry}
                    material={materials.trophy_notes}
                />
            </group>
            <mesh
                geometry={nodes.trophy_gold_cup.geometry}
                material={materials.trophy_gold_cup}
                position={[0, 0.11, 0]}
                scale={-0.05}
                userData={{ name: "trophy_gold_cup" }}
            />
        </group>
    )
}

export default GoldTrophy