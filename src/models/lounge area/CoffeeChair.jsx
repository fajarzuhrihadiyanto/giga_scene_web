const CoffeeChair = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.coffee_chair_seat_base.geometry}
                material={materials["coffee chair_seat_base"]}
                position={[0, 0.41, 0]}
                userData={{ name: "coffee chair_seat_base" }}
            />
            <mesh
                geometry={nodes.coffee_chair_seat_pillow.geometry}
                material={materials["coffee chair_seat_pillow"]}
                position={[0, 0.415, 0]}
                userData={{ name: "coffee chair_seat_pillow" }}
            />
            <mesh
                geometry={nodes.coffee_chair_structure.geometry}
                material={materials["coffee chair_structure"]}
                userData={{ name: "coffee chair_structure" }}
            />
        </group>
    )
}

export default CoffeeChair