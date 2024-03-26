const Mouse = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.mouse_body.geometry}
                material={materials.mouse_body}
                userData={{ name: "mouse_body" }}
            />
            <mesh
                geometry={nodes.mouse_scroll_button.geometry}
                material={materials["mouse_scroll button"]}
                position={[-0.022, 0.003, 0]}
                userData={{ name: "mouse_scroll button" }}
            />
        </group>
    )
}

export default Mouse