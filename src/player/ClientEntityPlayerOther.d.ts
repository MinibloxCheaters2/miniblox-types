import type { Vector3 } from "three";
import type { EntityPlayer } from "../entities/EntityPlayer";

declare class ClientEntityPlayerOther extends EntityPlayer {
	otherPlayerMPPosRotationIncrements: any;
	otherPlayerPos: Vector3;
	otherPlayerYaw: number;
	otherPlayerPitch: number;
	isItemInUse: boolean;
}

export { ClientEntityPlayerOther };