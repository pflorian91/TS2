import {IVegetable} from './IVegetable';

/**
 * @description Potato domain object
 */
export class Potato implements IVegetable {
	
	private name: string = 'Potato';
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public canEatRootOrBulb(): boolean {
		return true;
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
