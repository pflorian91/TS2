import {IHerb} from './IHerb';

/**
 * @description Basil domain object
 */
export class Basil implements IHerb {
	
	private name: string = 'Basil';
	
	public makeSeeds(): boolean {
		return false;
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
