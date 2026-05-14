import type { Mesh } from "three";
import type { BoxData, Model } from "./Model";

export declare class ModelBiped extends Model {
	parts: Record<string, BoxData>;
	materialCache: Map<string, unknown>;
	skinLoaded: Promise<void>;
	skin: string;

	constructor(skeleton: unknown, skinName?: string);
	init(skeleton: unknown, skinName: string): Promise<void>;

	generateGeometry(
		h: string,
		p: unknown,
		g: number[],
		y: number[],
		x: number[],
		S: number[],
		b: number,
		v?: boolean,
	): void;

	initMesh(h: string): Mesh;

	initArmorMesh(h: string): Mesh;

	clearArmor(h: unknown): void;

	setArmor(h: unknown): void;

	applyArmorMaterial(h: unknown, p: unknown, g: string): void;

	getMaterialKey(h: unknown, p: string): string;

	createColoredMaterial(h: unknown, p: string): unknown;

	addHead(h: unknown): void;

	addTorso(h: unknown): void;

	addArms(h: unknown): void;

	addLegs(h: unknown): void;

	combineMeshes(h: unknown): void;

	combineMeshes2(h: unknown): void;

	assembleBody(h: unknown): void;

	addBodyParts(h: unknown): void;
}
