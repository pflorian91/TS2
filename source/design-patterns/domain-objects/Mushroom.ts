import {IVegetable} from './IVegetable';

/**
 * @description Mushroom domain object
 */
export class Mushroom implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Mushroom');
	}
	
}
