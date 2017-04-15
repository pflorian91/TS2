import {IVegetable} from './IVegetable';

/**
 * @description Potato domain object
 */
export class Potato implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Potato');
	}
	
}
