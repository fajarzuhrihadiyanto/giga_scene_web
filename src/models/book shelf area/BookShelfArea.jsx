import React from "react";

import BookShelf from "./BookShelf";
import Books from "./Books";
import CommunityServices from "./CommunityServices";
import Research from "./Research";
import Subjects from "./Subjects";

export default function BookShelfArea({nodes, materials, ...props}) {
    return (
        <>
            <group {...props}>
                <BookShelf nodes={nodes} materials={materials} position={[-0.982, 0, -4.121]}/>

                <Subjects nodes={nodes} materials={materials} />
                <Research nodes={nodes} materials={materials} />
                <CommunityServices nodes={nodes} materials={materials} />
                <Books nodes={nodes} materials={materials} />
            </group>
        </>
    )
}