import type { Box3Helper, Vector3 } from "three";
import type { BlockPos } from "../blockpos";
import type { Block } from "../blocks";
import type { Game } from "../game";
import type { Inventory } from "../undefined";
import type { PlayerMovement } from "./PlayerMovement";

declare enum Perspective {
	FIRST_PERSON,
	THIRD_PERSON,
	THIRD_PERSON_FRONT,
}

declare class ClientEntityPlayer extends PlayerMovement {
	perspective: Perspective;
	deltaFov: number;
	selectBox: Box3Helper;
	headInBlock: Block | null;
	lastHeadInBlock: Block | null;
	biome: string;
	lastReportedPos: Vector3;
	/** **IMPORTANT**: USE DUMPS */
	lastReportedYaw: number;
	lastReportedPitch: number;
	serverSneakState: boolean;
	serverSprintState: boolean;
	serverPunchState: boolean;
	serverBlockState: boolean;
	serverFlyState: boolean;
	serverMoveStrafe: number;
	serverMoveForward: number;
	lastItemUseTime: number;
	showDeathScreen: boolean;
	currentTile: BlockPos; //? is it a BlockPos
	prevInventory: Inventory;
	prevDefencePoints: number;
	game: Game;
	positionUpdateTicks: number;
	lastjump: number;
	constructor();
	init(socketId: string, p: any): void; // Profile
	checkInventoryChange(h?: boolean): void;
	resetPositionToBB(h?: boolean): void;
	addSelectBox(): void;
	respawn(packet?: any): void; // CPacketRespawn
	sendRespawnPacket(): void;
	renderCameraFOV(): void;
	renderCamera(dt: number): void;
	toggleCameraPerspective(): void;
	updatePlayerMesh(): void;
	sendPositionAndRotation(): void;
	sendActions(): void;
	sendAbilities(): void;
	onUpdateWalkingPlayer(): void;
	getMoveDirection(h: number): Vector3;
	updateClient(dt: number): void;
	updateSoundOrientation(): void;
	resetInventory(): void;
	onEnchantmentCritical(e: any): void; // Entity
	setXPStats(xp: number, total: number, level: number): void;
	openShop(): void;
	getClientModel(): any; // CommandBlockLogic
}

export { ClientEntityPlayer, Perspective };