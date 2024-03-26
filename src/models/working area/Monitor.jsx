import { FOCUS_FACILITIES } from "../../constants";
import FacilitiesPage from "../../html/FacilitiesPage";
import useMainStore from "../../store/useMainStore";

const Monitor = ({nodes, materials, ...props}) => {
    const focusTarget = useMainStore.useFocusTarget()
    return (
        <group {...props}>
            <mesh
                geometry={nodes.monitor_base.geometry}
                material={materials.monitor_base}
                userData={{ name: "monitor_base" }}
            />
            <mesh
                geometry={nodes.monitor_pole.geometry}
                material={materials.monitor_base}
                position={[-0.034, 0.08, 0]}
                userData={{ name: "monitor_pole" }}
            />
            <group
                position={[0, .211, 0]}
                userData={{ name: "monitor_screen" }}
            >
                <mesh
                    geometry={nodes.monitor_screen_1.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    geometry={nodes.monitor_screen_2.geometry}
                    material={materials.monitor_light}
                />
            </group>
            {focusTarget === FOCUS_FACILITIES && <FacilitiesPage />}
        </group>
    )
}

export default Monitor