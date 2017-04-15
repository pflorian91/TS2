import {IVegetable} from './IVegetable';

/**
 * @description Potato
 */
export class Potato implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Potato');
	}
	
}
