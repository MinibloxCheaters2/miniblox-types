import type { EntityPlayer } from "../entities/EntityPlayer";

declare class PlayerMovement extends EntityPlayer {
	flyToggleTimer: number;
	sprintToggleTimer: number;
	sprintingTicksLeft: number;
	currentInput: any | null; // SPacketPlayerInput
	inputSequenceNumber: number;
	pendingInputs: any[]; // SPacketPlayerInput[]
	serverDistance: number;
	/** **IMPORTANT**: USE DUMPS */
	moveStrafe: number;
	/** **IMPORTANT**: USE DUMPS */
	moveForward: number;
	jumping: boolean;
	constructor();
	reset(): void;
	updatePlayerMoveState(): void;
	reconcileServerPosition(serverPos: any): void; // CPacketPlayerReconciliation
	checkHeadInBlock(): void;
	getFovModifier(): number;
	fixedUpdate(): void;
}

export { PlayerMovement };