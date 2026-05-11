import type { Vector3 } from "three";
import type { EntityLivingBase } from "./EntityLivingBase";
import type { BlockPos } from "../blockpos";
import type { Block, BlockChest } from "../blocks";
import type { Container, ContainerPlayer } from "../container";
import type { EnumFacing } from "../math/facing";
import type { Abilities, GameMode } from "../gamemode";
import type { InventoryPlayer, InventoryEnderChest, ItemStack, EffectsManager, FoodStats, GameProfile, Profile, TileEntitySign, CommandBlockLogic } from "../undefined";
import type { Team } from "../team";
import type World from "../world";

declare interface IInterface {
	getGuiID(): string;
}

declare class EntityPlayer extends EntityLivingBase {
	socketId: string | null;
	mode: GameMode;
	inventory: InventoryPlayer;
	inventoryEnderChest: InventoryEnderChest;
	abilities: Abilities;
	inventoryContainer: ContainerPlayer;
	openContainer: Container;
	punching: boolean;
	flySpeed: number;
	speedInAir: number;
	name: string;
	operator: boolean;
	effects: EffectsManager | null;
	foodStats: FoodStats;
	team: Team | undefined;
	actualName: string;
	experienceLevel: number;
	lastXPSound: number;
	experienceTotal: number;
	experience: number;
	xpSeed: number;
	itemInUse: ItemStack | null;
	itemInUseCount: number;
	type: string;
	identifier: string;
	sleeping: boolean;
	sleepTimer: number;
	playerLocation: BlockPos | null;
	spawnChunk: BlockPos | null;
	spawnForced: boolean;
	home: unknown | undefined;
	xpCooldown: number;
	profile: GameProfile;
	kills: number;
	deaths: number;
	inventoryManager: unknown;
	fireTick: number;
	constructor(profile: Profile, world: World);
	isAdmin(): boolean;
	getItemInUse(): ItemStack;
	getItemInUseCount(): number;
	isUsingItem(): boolean;
	getItemInUseDuration(): number;
	stopUsingItem(): void;
	clearItemInUse(): void;
	isBlocking(): boolean;
	getHorizontalDirection(): EnumFacing;
	getEyeHeight(): number;
	canPlayerEdit(_?: unknown, __?: unknown, ___?: unknown): boolean;
	getActiveItemStack(): ItemStack;
	getInventoryEnderChest(): InventoryEnderChest;
	getEquipmentInSlot(h: unknown): unknown;
	onDeath(attackingPlayer: EntityPlayer): void;
	isSprinting(): boolean;
	/** **IMPORTANT**: USE DUMPS */
	attack(e: EntityLivingBase): void;
	hasInferniumArmor(): boolean;
	onCriticalHit(entity: EntityLivingBase): void;
	getJumpMovementFactor(): number;
	onPlayerUpdate(): void;
	checkCollisionWithEntities(): void;
	applyInput(input: any, _unused?: boolean): void; // SPacketPlayerInput
	addStat(h: unknown, p: unknown): void;
	addMovementStat(h: unknown, p: unknown, g: unknown): void;
	updateItemInUse(): void;
	/**
	 * gets the experience points of this entity
	 * @param _unused unused, this is called with `attackingPlayer` by EntityLivingBase#onDeath
	 */
	getExperiencePoints(_unused?: EntityPlayer): number;
	addExperience(xp: number): void;
	setExperience(h: unknown, p: unknown): void;
	xpBarCap(): number;
	removeExperienceLevel(h: unknown): void;
	addExperienceLevel(h: unknown): void;
	update(): void;
	setCurrentItemOrArmor(h: unknown, p: unknown): void;
	preparePlayerToSpawn(): void;
	setGamemode(gameMode: GameMode): boolean;
	displayGUIChest(chest: BlockChest): void;
	displayGui(h: IInterface): void;
	openEditSign(sign: TileEntitySign): void;
	closeScreen(): void;
	openEditCommandBlock(h: CommandBlockLogic): void;
	dropItemForPlayer(h: unknown, p?: boolean): unknown;
	dropItem(h: unknown, p: unknown, g: unknown, y?: boolean): unknown;
	joinEntityItemWithWorld(e: any): void; // Entity
	canHarvestBlock(h: Block): boolean;
	getToolDigEfficiency(h: unknown): unknown;
	addExhaustion(h: unknown): void;
	getFoodStats(): FoodStats;
	canEat(h: unknown): boolean;
	shouldHeal(): boolean;
	setItemInUse(h: unknown, p: unknown): void;
	isInBed(): boolean;
	static getBedSpawnLocation(
		h: unknown,
		p: unknown,
		g: unknown,
	): Promise<Vector3>;
	updateItemUse(h: unknown, p: unknown): void;
	destroyCurrentEquippedItem(): void;
	onItemUseFinish(): void;
	handleStatusUpdate(h: unknown): void;
	setAbsorptionAmount(h: unknown): void;
	sendMessage(h: unknown, p: unknown): void;
	isPlayerSleeping(): boolean;
	isPlayerFullyAsleep(): boolean;
	getSleepTimer(): number;
	getBedLocation(): Vector3;
	isSpawnForced(): boolean;
	setSpawnPoint(h: unknown, p: unknown): void;
	wakeUpPlayer(h: unknown, p: unknown, g: unknown): void;
	trySleep(h: unknown): 0 | 4 | 3 | 2 | 5;
	isSpectator(): boolean;
	getCurrentEquippedItem(): ItemStack | null;
	interactFirst(h: unknown): boolean;
	interactWith(h: unknown): boolean;
	onTeamChanged(): void;
}

export { EntityPlayer, IInterface };