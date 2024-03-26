const DigitalClock = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.digital_clock_body.geometry}
                material={materials["digital clock_body"]}
                userData={{ name: "digital clock_body" }}
            />
            <mesh
                geometry={nodes.digital_clock_glass_front.geometry}
                material={materials["digital clock_glass"]}
                userData={{ name: "digital clock_glass front" }}
            />
            <mesh
                geometry={nodes.digital_clock_glass_rear.geometry}
                material={materials["digital clock_glass"]}
                position={[-.010, 0, 0]}
                userData={{ name: "digital clock_glass rear" }}
            />
            <mesh
                geometry={nodes.digital_clock_time.geometry}
                material={materials["digital clock_light"]}
                position={[0.05, 0, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.08}
                userData={{ name: "digital clock_time" }}
            />
        </group>
    )
}

export default DigitalClock