import * as config from '../../game/images.json';

type Images = {[key: string]: string | {[key: string]: string} };

export class ImageRepository {
	private _images: Images;
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