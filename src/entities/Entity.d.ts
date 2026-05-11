import type { Box3, Vector3 } from "three";
import type { EnumFacing } from "../math/facing";
import type World from "../world";
import type { BlockPos } from "../world/blockpos";
import type { Block } from "../world/blocks";
import type { DamageSource } from "../world/damageSource";
import type { RenderPlayer } from "../render";
import type { DataWatcher, Profile } from "../undefined";
import type { BlockState } from "../world";

declare class Entity {
	static nextEntityID: number;
	mesh: RenderPlayer;
	id: number;
	world: World;
	pos: Vector3;
	prevPos: Vector3;
	serverPos: Vector3;
	noPhysics: boolean;
	yaw: number;
	pitch: number;
	prevYaw: number;
	prevPitch: number;
	ticksExisted: number;
	dead: boolean;
	width: number;
	height: number;
	boundingBox: Box3;
	isAirborne: boolean;
	inWeb: boolean;
	inWater: boolean;
	inLava: boolean;
	inCloud: boolean;
	fire: number;
	fireResistance: number;
	immuneToFire: boolean;
	onGround: boolean;
	isCollided: boolean;
	isCollidedVertically: boolean;
	isCollidedHorizontally: boolean;
	stepHeight: number;
	fallDistance: number;
	sneak: boolean;
	riddenByEntity: Entity | null;
	ridingEntity: Entity | null;
	inPortal: boolean;
	velocityChanged: boolean;
	timeUntilPortal: number;
	dataWatcher: DataWatcher;
	invulnerable: boolean;
	dimension: number;
	motion: Vector3;
	nextStepDistance: number;
	distanceWalkedModified: number;
	distanceWalkedOnStepModified: number;
	portalCounter: number;
	portalBlock: BlockPos | null;
	lastUpdate: number;
	constructor(world: World, profile?: Profile);
	onKillCommand(): void;
	getDisplayName(): string;
	getName(): string;
	isInWater(): boolean;
	isInLava(): boolean;
	isEating(): boolean;
	setEating(eating: boolean): void;
	entityInit(): void;
	getDataWatcher(): DataWatcher;
	dwReadB(id: number): boolean;
	dwSetB(id: number, state: boolean): void;
	getCustomNameTag(): string;
	setCustomNameTag(v: string): void;
	getAlwaysRenderNameTag(): boolean;
	setAlwaysRenderNameTag(v: boolean): void;
	onDataWatcherUpdate(id: number): void;
	equals(other: unknown): boolean;
	getEntityBoundingBox(): Box3;
	getRotationYawHead(): number;
	setSize(width: number, height: number): void;
	setVelocity(x: number, y: number, z: number): void;
	setPositionAndUpdate(x: number, y: number, z: number): void;
	setPosition(vec: Vector3): void;
	setPosition(x: number, y: number, z: number): void;
	setPositionAndRotation(
		x: number,
		y: number,
		z: number,
		yaw: number,
		pitch: number,
	): void;
	setPositionAndRotation2(
		x: number,
		y: number,
		z: number,
		yaw: number,
		pitch: number,
		_: unknown,
		S?: boolean,
	): void;
	setRotation(yaw: number, pitch: number): void;
	setLocationAndAngles(
		x: number,
		y: number,
		z: number,
		yaw?: number,
		pitch?: number,
	): void;
	offsetBBox(offset: Vector3): this["boundingBox"];
	setEntityBoundingBox(box: Box3): void;
	resetPositionToBB(): void;
	getEyeHeight(): number;
	getPartialTicks(): number;
	update(): void;
	kill(): void;
	preparePlayerToSpawn(): void;
	getMaxInPortalTime(): number;
	setWorld(world: World): void;
	travelToDimension(dimension: string): void;
	copyDataFromOld(oldEntity: Entity): void;
	onEntityUpdate(): void;
	setCurrentItemOrArmor(i: number, v: ItemStack | null): void;
	isBurning(): boolean;
	/**
	 * returns null if this isn't a {@linkcode EntityLivingBase}
	 */
	getInventory(): Inventory | null;
	toJSON(): {
		id: number;
		pos: Vector3;
		onGround: boolean;
	};
	fromJSON(data: { id: number; pos: Vector3; onGround: boolean }): void;
	testSneaking(u: unknown, h: unknown): void;
	testStepUp(u: unknown, h: unknown, p: unknown): boolean;
	handleWaterMovement(): boolean;
	fall(distance: number, damageMultiplier: number): void;
	updateFallState(
		y: number,
		onGround: boolean,
		block: Block | null,
		pos: BlockPos,
	): void;
	handleStatusUpdate(u: unknown): void;
	canBePushed(): boolean;
	isSilent(): boolean;
	isOnLadder(): boolean;
	getLadderSpeed(): 0.2 | 0.3;
	canTriggerWalking(): boolean;
	isOffsetPositionInLiquid(u: unknown, h: unknown, p: unknown): boolean;
	isLiquidPresentInAABB(u: Box3): boolean;
	moveFlying(dX: number, dY: number, dZ: number): void;
	moveEntity(dX: number, dY: number, dZ: number): void;
	playSound(x: number, y: number, z: number): void;
	applyEntityCollision(entity: Entity): void;
	addVelocity(x: number, y: number, z: number): void;
	dealFireDamage(damage: number): void;
	setFire(ticks: number): void;
	doBlockCollisions(): void;
	isOpenBlockSpace(u: Vector3): boolean;
	isEntityInsideOpaqueBlock(): boolean;
	isInsideOfMaterial(u: unknown): boolean;
	pushOutOfBlocks(x: number, y: number, z: number): boolean;
	canBeCollidedWith(): boolean;
	onCollideWithPlayer(u: unknown): void;
	getLook(): unknown;
	canCommandSenderUseCommand(u: unknown, h: unknown): boolean;
	getEyePos(): Vector3;
	canAttackWithItem(): boolean;
	hitByEntity(u: unknown): boolean;
	attackEntityFrom(source: DamageSource, amount: number): boolean;
	setBeenAttacked(): void;
	isEntityInvulnerable(u: unknown): boolean;
	onKillEntity(u: unknown): void;
	setOnFireFromLava(): void;
	setDead(): void;
	isEntityAlive(): boolean;
	setEntityState(u: unknown, h: unknown): void;
	onChunkLoad(): void;
	dropItem2(u: unknown, h: unknown): unknown;
	dropItemWithOffset(u: unknown, h: unknown, p: number): unknown;
	getDistanceSqToEntity(u: Entity): number;
	setSprinting(sprinting: boolean): void;
	isSprinting(): boolean;
	isInvisible(): boolean;
	/**
	 * Checks if this entity is invisible to the {@link player}
	 * @param player the player to check if this entity is invisible to
	 */
	isInvisibleTo(player: Entity): boolean;
	setInvisible(invisible: boolean): void;
	entityDropItem(stack: ItemStack, offsetY: number): EntityItem;
	doesEntityNotTriggerPressurePlate(): boolean;
	getHorizontalFacing(): EnumFacing;
	/** gets the **BLOCK** position of the player. */
	getPosition(): BlockPos;
	getExplosionResistance(
		explosion: Explosion,
		world: World,
		pos: BlockPos,
		blockState: BlockState,
	): float;
	verifyExplosion(
		explosion: Explosion,
		worldObj: World,
		x: number,
		y: number,
		z: number,
	): boolean;
	isImmuneToExplosions(): boolean;
	getDistance(x: number, y: number, z: number): number;
	resetHeight(): void;
	getMaxFallHeight(): number;
	writeEntityToNBT(nbt: unknown): void;
	readEntityFromNBT(nbt: unknown): void;
	writeToNBT(u: unknown): void;
	getCollisionBorderSize(): number;
	readFromNBT(u: unknown): void;
	isOverworld(): boolean;
	interactFirst(player: Entity): boolean;
	applyEnchantments(u: unknown, h: unknown): void;
	isRiding(): boolean;
	getYOffset(): number;
	getMountedYOffset(): number;
	updateRiderPosition(): void;
	updateRidden(): void;
	mountEntity(e: Entity | null): void;
	updatePortal(u: unknown): void;
	getPortalCooldown(): number;
}
