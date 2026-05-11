import type { Vector3 } from "three";
import type { Entity } from "./Entity";
import type { EnumCreatureAttribute } from "../enums";
import type { AttributeMap, CombatTracker, Inventory, ItemStack, PotionEffect } from "../undefined";
import type World from "../world";

declare class EntityLivingBase extends Entity {
	activePotionsMap: Map<number, PotionEffect>;
	potionsNeedUpdate: boolean;
	absorptionAmount: number;
	health: number;
	maxHealth: number;
	attributeMap: AttributeMap;
	hurtTime: number;
	maxHurtTime: number;
	deathTime: number;
	revengeTimer: number;
	lastDamage: number;
	hurtResistantTime: number;
	maxHurtResistantTime: number;
	attackedAtYaw: number;
	attackingPlayer: any | null; // EntityPlayer
	recentlyHit: number;
	combatTracker: CombatTracker;
	landMovementFactor: number;
	jumpMovementFactor: number;
	limbSwingAmount: number;
	prevLimbSwingAmount: number;
	limbSwing: number;
	jumping: boolean;

	constructor(world: World);
	onKillCommand(): void;
	applyEntityAttributes(): void;
	getEntityAttribute(h: unknown): unknown;
	getAttributeMap(): AttributeMap;
	getCombatTracker(): unknown;
	lastDamager(): unknown;
	getHeldItem(): ItemStack | null;
	onEntityUpdate(): void;
	isChild(): boolean;
	isPlayer(): boolean;
	onDeathUpdate(): void;
	setOxygen(oxygen: number): void;
	getOxygen(): number;
	decreaseOxygenSupply(h: number): number;
	canBreatheUnderwater(): boolean;
	collideWithNearbyEntities(): void;
	canBePushed(): boolean;
	getAITarget(): unknown;
	getRevengeTimer(): number;
	setRevengeTarget(h: unknown): void;
	getLastAttacker(): unknown;
	getLastAttackerTime(): number;
	setLastAttacker(h: unknown): void;
	getAge(): number;
	collideWithEntity(e: Entity): void;
	setJumping(h: boolean): void;
	jump(): void;
	onItemPickup(h: unknown, p: unknown): void;
	canEntityBeSeen(e: Entity): boolean;
	isServerWorld(): boolean;
	isMovementBlocked(): boolean;
	updateEntityActionState(): void;
	renderBrokenItemStack(h: unknown): void;
	update(): void;
	dismountEntity(_: unknown): void;
	setPositionAndRotation2(
		x: number,
		y: number,
		z: number,
		yaw: number,
		pitch: number,
		S: unknown,
	): void;
	onLivingUpdate(): void;
	moveEntityWithHeading(strafe: number, forward: number): void;
	getAIMoveSpeed(): number;
	setAIMoveSpeed(speed: number): void;
	attackEntityAsMob(h: unknown): boolean;
	getEquipmentInSlot(h: unknown): void;
	getTotalArmorValue(): number;
	damageArmor(h: unknown): void;
	applyArmorCalculations(h: unknown, p: unknown): unknown;
	applyPotionDamageCalculations(h: unknown, p: unknown): unknown;
	damageEntity(h: Entity, p: unknown): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(h: number): void;
	knockback(
		_unused_1: unknown,
		_unused_2: unknown,
		xM: number,
		yM: number,
	): void;
	getCreatureAttribute(): EnumCreatureAttribute;
	setBeenAttacked(): void;
	hasInferniumArmor(): boolean;
	getSoundPitch(): number;
	getMaxHealth(): number;
	getHealth(): number;
	setHealth(health: number): void;
	getFallSoundString(
		h: unknown,
	): "game.player.hurt.fall.big" | "game.player.hurt.fall.small";
	getHurtSound(): string;
	getDeathSound(): string;
	addRandomDrop(): void;
	dropFewItems(h: unknown, p: unknown): void;
	canDropLoot(): boolean;
	getInventory(): Inventory;
	getSoundVolume(): number;
	kill(): void;
	handleStatusUpdate(h: unknown): void;
	updatePotionEffects(): void;
	updatePotionMetadata(): void;
	resetPotionEffectMetadata(): void;
	clearActivePotions(): void;
	getActivePotionEffects(): PotionEffect[];
	isPotionActive(pot: any): boolean; // Potion
	getActivePotionEffect(h: unknown): unknown;
	addPotionEffect(h: unknown): void;
	isPotionApplicable(h: unknown): boolean;
	isEntityUndead(): boolean;
	removePotionEffectClient(h: unknown): void;
	removePotionEffect(h: unknown): void;
	onNewPotionEffect(h: unknown): void;
	onChangedPotionEffect(h: unknown, p: unknown): void;
	onFinishedPotionEffect(h: unknown): void;
	heal(add: number): void;
	getEyePositionVector(): Vector3;
	sendEnterCombat(): void;
	sendEndCombat(): void;
}

export { EntityLivingBase };