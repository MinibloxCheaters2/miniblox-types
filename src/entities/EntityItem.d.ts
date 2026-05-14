import type { Vector3 } from "three";
import type { ItemStack } from "../items";
import type { World } from "../world";
import type { Entity } from "./Entity";
import type { EntityName } from "./EntityArrow";

export declare class EntityItem extends Entity {
	identifier: EntityName.ITEM; // EntityName.ITEM
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
