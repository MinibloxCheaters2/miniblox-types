import type { Mesh } from "three";
import type { RenderLivingEntity } from "./RenderLivingEntity";

declare class RenderPlayer extends RenderLivingEntity {
	model: ModelPlayer; // ModelPlayer
	capeMesh: Mesh;
	hatMesh: Mesh;
	punchingT: number;
	canvas: HTMLCanvasElement;
}

export { RenderPlayer };
