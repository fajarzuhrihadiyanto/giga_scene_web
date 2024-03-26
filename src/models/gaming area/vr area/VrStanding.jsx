const VrStanding = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group
                position={[0.21, 0, 3.784]}
                rotation={[0, -Math.PI / 2, 0]}
                userData={{ name: "vr standing_base" }}
            >
                <mesh
                    geometry={nodes.vr_standing_base_1.geometry}
                    material={materials["vr standing_base_main"]}
                />
                <mesh
                    geometry={nodes.vr_standing_base_2.geometry}
                    material={materials["vr standing_base_light"]}
                />
            </group>
            <mesh
                geometry={nodes.vr_standing_dock.geometry}
                material={materials["vr standing_dock"]}
                position={[-0.249, 1.197, 3.784]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.106, 0.133, 0.08]}
                userData={{ name: "vr standing_dock" }}
            />
        </group>
    )
}

export default VrStanding