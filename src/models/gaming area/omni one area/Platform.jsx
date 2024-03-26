const Platform = ({nodes, materials, ...props}) => {
    return (
        <mesh
            geometry={nodes.platform.geometry}
            material={materials.platform}
            position={[3.065, 0.05, 2.458]}
            scale={1.876}
            userData={{ name: "platform" }}
            {...props}
        />
    )
}

export default Platform