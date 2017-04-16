import {IVegetable} from './IVegetable';

/**
 * @description Mushroom domain object
 */
export class Mushroom implements IVegetable {
	
	private name: string = 'Mushroom';
	
	public grow(): void {
		console.log(`I am growing as a ${this.name}`);
	}
	
	public canEatRootOrBulb(): boolean {
		return false;
	}
	
	public whoami(): void {
		console.log(`I am a ${this.name}`);
	}
}
