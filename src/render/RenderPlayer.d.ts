import type { RenderLivingEntity } from "./RenderLivingEntity";

declare class RenderPlayer extends RenderLivingEntity {
	model: any; // ModelPlayer
	capeMesh: any;
	hatMesh: any;
	punchingT: any;
	canvas: HTMLCanvasElement;
}

export { RenderPlayer };