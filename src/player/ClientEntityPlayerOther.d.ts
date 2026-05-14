import type { Vector3 } from "three";
import type { EntityPlayer } from "../entities/EntityPlayer";

export declare class ClientEntityPlayerOther extends EntityPlayer {
	otherPlayerMPPosRotationIncrements: number;
	otherPlayerPos: Vector3;
	otherPlayerYaw: number;
	otherPlayerPitch: number;
	isItemInUse: boolean;
}

export { ClientEntityPlayerOther };
