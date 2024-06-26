/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function OmniTest(props) {
  const { nodes, materials } = useGLTF("/models/omni one.glb");
  return (
    <group {...props} dispose={null} position={[0,0,2]}>
      <group position={[0, 0.241, 0.635]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.omni_pole_1.geometry}
          material={materials.omni_pole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.omni_pole_2.geometry}
          material={materials.omni_pole_metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_arm_1.geometry}
        material={materials.omni_pole_metal}
        position={[0, 1.091, 0.611]}
        rotation={[0.93, 0, 0]}
        scale={[0.85, 0.85, 1.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_arm_2.geometry}
        material={materials.omni_pole_metal}
        position={[0, 1.301, 0.447]}
        scale={[0.632, 0.632, 1.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_base.geometry}
        material={materials.omni_pole_metal}
        position={[-0.001, 0.006, 1.517]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_joints_1.geometry}
        material={materials.omni_pole_joints_base}
        position={[0, 1.091, 0.611]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.054, 0.055, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_joints_2.geometry}
        material={materials.omni_pole_joints_base}
        position={[0, 1.303, 0.45]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.054, 0.055, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_pole_joints_3.geometry}
        material={materials.omni_pole_joints_base}
        position={[0, 1.303, 0.242]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.042, 0.043, 0.042]}
      />
      <group position={[0.057, 1.532, 0.11]} rotation={[0.331, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials.omni_mounting_top_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_10.geometry}
          material={materials.omni_mounting_top_base}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_mounting_bottom.geometry}
        material={materials.omni_mounting_top_edge}
        position={[0.116, 1.268, 0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.test_1.geometry}
        material={materials.omni_mounting_base}
        position={[0, 1.3, 0.201]}
        rotation={[1.515, 0, 0]}
        scale={[0.035, 0.172, 0.172]}
      />
      <group
        position={[0, 1.441, -0.104]}
        rotation={[1.532, 0, 0]}
        scale={[0.09, 0.129, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_13.geometry}
          material={materials.omni_mounting_top_belt_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_14.geometry}
          material={materials.omni_mounting_top_belt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_mounting_waist_base.geometry}
        material={materials.omni_mounting_base_pad}
        position={[0, 1.154, 0.193]}
        rotation={[1.559, 0, 0]}
        scale={[0.114, 0.102, 0.064]}
      />
      <group position={[0, 1.153, 0.063]} scale={[1, 1.217, 0.594]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11.geometry}
          material={materials.omni_mounting_waist_belt_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_12.geometry}
          material={materials.omni_mounting_waist_belt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_mounting_waist_pillow.geometry}
        material={materials.omni_mounting_pillow}
        position={[0, 1.154, 0.183]}
        rotation={[1.559, 0, 0]}
        scale={[0.114, 0.102, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_mounting_spine_base.geometry}
        material={materials.omni_mounting_base_pad}
        position={[0, 1.458, 0.178]}
        rotation={[1.445, 0, 0]}
        scale={[0.1, 0.102, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.omni_mounting_spine_pillow.geometry}
        material={materials.omni_mounting_pillow}
        position={[0, 1.457, 0.168]}
        rotation={[1.445, 0, 0]}
        scale={[0.1, 0.102, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Human.geometry}
        material={materials["Default OBJ"]}
        position={[0, 0.191, 0.06]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={3.182}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.omni_base}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials.omni_base_light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_2.geometry}
        material={materials.omni_base_edge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_3.geometry}
        material={materials.omni_base_pad}
      />
    </group>
  );
}

useGLTF.preload("/models/omni one.glb");