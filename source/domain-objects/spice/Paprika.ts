import {ISpice} from './ISpice';

/**
 * @description Paprika domain object
 */
export class Paprika implements ISpice {

	private name: string = 'Apple';
	
	public needsDryout(): boolean {
		return true;
	}
	
	public usedForColor(): boolean {
		return true;
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
