import {ISpice} from './ISpice';

/**
 * @description Ginger domain object
 */
export class Ginger implements ISpice {
	
	private name: string = 'Ginger';
	
	public needsDryout(): boolean {
		return false;
	}
	
	public usedForColor(): boolean {
		return false;
	}
	
	public usedForFlavour(): boolean {
		return true;
	}
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
