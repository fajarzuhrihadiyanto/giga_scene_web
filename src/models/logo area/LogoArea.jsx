import React from "react";

import Logo from "./Logo";
import LogoText from "./LogoText";

const LogoArea = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <Logo nodes={nodes} materials={materials} position={[-2.023, 3.149, -4.388]} rotation={[Math.PI / 2, 0, 0]}/>
            <LogoText nodes={nodes} materials={materials} position={[-1.285, 3.273, -4.313]} scale={0.62}/>
        </group>
    )
}

export default React.memo(LogoArea)