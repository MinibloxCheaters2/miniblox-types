import type { Group, Mesh, Object3D } from "three";
import type { RenderEntity } from "./RenderEntity";

declare class RenderLivingEntity extends RenderEntity {
	nameTag: Group;
	skeleton: Group;
	torso: Object3D;
	leftElbowJoint: Object3D;
	rightElbowJoint: Object3D;
	leftShoulder: Object3D;
	rightShoulder: Object3D;
	leftShoulderJoint: Object3D;
	rightShoulderJoint: Object3D;
	rightHand: Object3D;
	leftKneeJoint: Object3D;
	rightKneeJoint: Object3D;
	leftHip: Object3D;
	rightHip: Object3D;
	leftHipJoint: Object3D;
	rightHipJoint: Object3D;
	headPivot: Group;
	neck: Object3D;
	body: Group;
	armorMesh: Mesh;
	meshes: Mesh[];
	item: any;
	lastActiveItem: any;
	handMesh: Mesh;
	handTesr: any;
	prevCustomName: string;
}

export { RenderLivingEntity };