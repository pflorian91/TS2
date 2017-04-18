import {IHerb} from './IHerb';

/**
 * @description Rosemary domain object
 */
export class Rosemary implements IHerb {
	
	private name: string = 'Rosemary';
	
	public makeSeeds(): boolean {
		return false;
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name} herb`);
	}
}
