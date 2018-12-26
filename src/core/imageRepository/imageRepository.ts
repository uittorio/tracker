import * as config from '../../game/images.json';
import { Injectable } from "react.di";

type Images = {[key: string]: string | {[key: string]: string} };

@Injectable
export class ImageRepository {
	private readonly _images: Images;
	
	constructor() {
		this._images = config;
	}
	
	get(resource: string): string  {
		return this._images[resource] as string;
	}
	
	getNested(resource: string, state: string): string  {
		return this._images[resource][state];
	}
}