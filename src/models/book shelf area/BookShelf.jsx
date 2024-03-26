export default function BookShelf({nodes, materials, ...props}) {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.book_case_inner_structure.geometry}
                material={materials["book case_matte"]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.3, 1, 0.8]}
                userData={{ name: "book case_inner structure" }}
            />
            <mesh
                geometry={nodes.book_case_outer_structure.geometry}
                material={materials["book case_metal"]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.3, 1, 0.8]}
                userData={{ name: "book case_outer structure" }}
            />
            <group
                position={[0,0.5,-.047]}
                rotation={[0, -Math.PI / 2, 0]}
                userData={{ name: "book case_platform" }}
            >
                <mesh
                    geometry={nodes.book_case_platform_1.geometry}
                    material={materials["book case_matte"]}
                />
                <mesh
                    geometry={nodes.book_case_platform_2.geometry}
                    material={materials["book case_metal"]}
                />
            </group>
        </group>
    )
}