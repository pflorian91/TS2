import {ISpice} from './ISpice';

/**
 * @description Cinnamon domain object
 */
export class Cinnamon implements ISpice {
	
	private name: string = 'Cinnamon';
	
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
