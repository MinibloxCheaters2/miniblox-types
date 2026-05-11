import { Group, Object3D, Mesh } from "three";
import { Model, BoxData } from "./Model";

export declare class ModelBiped extends Model {
	parts: Record<string, BoxData>;
	materialCache: Map<string, any>;
	skinLoaded: Promise<void>;
	skin: string;

	constructor(skeleton: any, skinName?: string);
	init(skeleton: any, skinName: string): Promise<void>;

	generateGeometry(
		h: string,
		p: any,
		g: number[],
		y: number[],
		x: number[],
		S: number[],
		b: number,
		v?: boolean,
	): void;

	initMesh(h: string): Mesh;

	initArmorMesh(h: string): Mesh;

	clearArmor(h: any): void;

	setArmor(h: any): void;

	applyArmorMaterial(h: any, p: any, g: string): void;

	getMaterialKey(h: any, p: string): string;

	createColoredMaterial(h: any, p: string): any;

	addHead(h: any): void;

	addTorso(h: any): void;

	addArms(h: any): void;

	addLegs(h: any): void;

	combineMeshes(h: any): void;

	combineMeshes2(h: any): void;

	assembleBody(h: any): void;

	addBodyParts(h: any): void;
}
