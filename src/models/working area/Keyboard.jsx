const Keyboard = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.keyboard_base.geometry}
                material={materials.keyboard_base}
                rotation={[0, Math.PI / 2, 0]}
                userData={{ name: "keyboard_base" }}
            />
            <mesh
                geometry={nodes.keyboard_buttons.geometry}
                material={materials.keyboard_buttons}
                position={[0.058, 0.005, -0.172]}
                rotation={[0, Math.PI / 2, 0]}
                userData={{ name: "keyboard_buttons" }}
            />
        </group>
    )
}

export default Keyboard