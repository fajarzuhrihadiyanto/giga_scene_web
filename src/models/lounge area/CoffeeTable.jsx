const CoffeeTable = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.coffee_table_top.geometry}
                material={materials["coffee table_top"]}
                rotation={[0, -Math.PI / 2, 0]}
                userData={{ name: "coffee table_top" }}
            />
            <group
                rotation={[0, -Math.PI / 2, 0]}
                userData={{ name: "coffee table_structure" }}
            >
                <mesh
                    geometry={nodes.coffee_table_structure_1.geometry}
                    material={materials["coffee table_structure"]}
                />
                <mesh
                    geometry={nodes.coffee_table_structure_2.geometry}
                    material={materials["coffee table_structure"]}
                />
                <mesh
                    geometry={nodes.coffee_table_structure_3.geometry}
                    material={materials["coffee table_structure"]}
                />
            </group>
        </group>
    )
}

export default CoffeeTable