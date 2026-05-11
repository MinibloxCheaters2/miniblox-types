import type { Entity } from "../entities";

// biome-ignore lint/complexity/noStaticOnlyClass: Miniblox's code, can't fix ts.
export declare class Potions {
	static readonly moveSpeed: Potion;
	static readonly moveSlowdown: Potion;
	static readonly digSpeed: Potion;
	static readonly digSlowdown: Potion;
	static readonly damageBoost: Potion;
	static readonly heal: Potion;
	static readonly harm: Potion;
	static readonly jump: Potion;
	static readonly confusion: Potion;
	static readonly regeneration: Potion;
	static readonly resistance: Potion;
	static readonly fireResistance: Potion;
	static readonly waterBreathing: Potion;
	static readonly invisibility: Potion;
	static readonly blindness: Potion;
	static readonly nightVision: Potion;
	static readonly hunger: Potion;
	static readonly weakness: Potion;
	static readonly poison: Potion;
	static readonly wither: Potion;
	static readonly healthBoost: Potion;
	static readonly absorption: Potion;
	static readonly saturation: Potion;
}

export declare class Potion {
	static potionTypes: Potion[];
	static potionMap: Map;
	id: number;
	attributeModifierMap: Map<unknown, AttributeModifier>;
	isBadEffect: boolean;
	liquidColor: unknown;
	name: string;
	statusIconIndex: number;
	effectiveness: number;
	usable: boolean;

	getLiquidColor(): this["liquidColor"];
	getName(): this["name"];
	setPotionName(name: string): this;
	hasStatusIcon(): boolean;
	getStatusIconIndex(): this["statusIconIndex"];
	getDurationString(): string | undefined;
	getEffectiveness(): this["effectiveness"];
	setEffectiveness(effectiveness: number): this;
	isUsable(): this["usable"];
	registerPotionAttributeModifier(u, h, p, g): this;
	getAttributeModifierMap(): this["attributeModifierMap"];
	removeAttributesModifiersFromEntity(u, entity: Entity, p): void;
	applyAttributesModifiersToEntity(u, entity: Entity, p): void;
	getAttributeModifierAmount(amplifier: number, modifier: AttributeModifier);
}
