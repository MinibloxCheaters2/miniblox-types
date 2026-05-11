import type { Group, Mesh, Quaternion } from "three";
import type { Entity } from "../entities/Entity";

declare class RenderEntity extends Group {
	rotYaw: Quaternion;
	rotPitch: Quaternion;
	entity: Entity;
	debugMesh: Mesh;
}

export { RenderEntity };
