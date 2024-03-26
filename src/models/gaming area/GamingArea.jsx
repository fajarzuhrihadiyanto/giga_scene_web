import React from "react";

import ArcadeMachine from "./arcade machine area/ArcadeMachine";
import OmniOneArea from "./omni one area/OmniOneArea";
import VrArea from "./vr area/VrArea";

const GamingArea = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <OmniOneArea nodes={nodes} materials={materials} />
            <VrArea nodes={nodes} materials={materials} />
            <ArcadeMachine nodes={nodes} materials={materials} />
        </group>
    )
}

export default React.memo(GamingArea)