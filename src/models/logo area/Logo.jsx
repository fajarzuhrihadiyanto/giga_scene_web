const Logo = ({nodes, materials, ...props}) => {
    return (
        <mesh
            geometry={nodes.logo_neon.geometry}
            material={materials["logo_neon.001"]}
            userData={{ name: "logo_neon" }}
            {...props}
        />
    )
}

export default Logo