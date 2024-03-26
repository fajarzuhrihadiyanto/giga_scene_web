const LogoText = ({nodes, materials, ...props}) => {
    return (
        <mesh
            geometry={nodes.logo_neon_text.geometry}
            material={materials["logo_neon_text.001"]}
            userData={{ name: "logo_neon_text" }}
            {...props}
        />
    )
}

export default LogoText