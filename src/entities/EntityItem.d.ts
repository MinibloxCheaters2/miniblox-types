import type { Vector3 } from "three";
import type { Entity } from "./Entity";
import type { ItemStack } from "../undefined";
import type World from "../world";

declare class EntityItem extends Entity {
	identifier: any; // EntityName.ITEM
	age: number;
	delayBeforeCanPickup: number;
	health: number;
	constructor(world: World, stack?: ItemStack, pos?: Vector3);
	setEntityItemStack(stack: ItemStack): void;
	canTriggerWalking(): false;
	setPickupDelay(delay: number): void;
	setDefaultPickupDelay(): void;
}

export { EntityItem };