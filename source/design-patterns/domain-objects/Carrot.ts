import {IVegetable} from './IVegetable';

/**
 * @description Carrot domain object
 */
export class Carrot implements IVegetable {
	
	private name: string = 'Carrot';
	
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
