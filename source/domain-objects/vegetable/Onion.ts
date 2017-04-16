import {IVegetable} from './IVegetable';

/**
 * @description Onion domain object
 */
export class Onion implements IVegetable {
	
	private name: string = 'Onion';
	
	public grow(): void {
		console.log(`I am growing as an ${this.name}`);
	}
	
	public canEatRootOrBulb(): boolean {
		return true;
	}
	
	public whoami(): void {
		console.log(`I am an ${this.name}`);
	}
}
