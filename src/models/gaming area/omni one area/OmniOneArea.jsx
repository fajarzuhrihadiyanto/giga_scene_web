import React from "react";

import OmniOne from "./OmniOne";
import Platform from "./Platform";

const OmniOneArea = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <Platform nodes={nodes} materials={materials} />
            <OmniOne nodes={nodes} materials={materials} />
        </group>
    )
}

export default React.memo(OmniOneArea)