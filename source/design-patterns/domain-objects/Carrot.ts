import {IVegetable} from './IVegetable';

/**
 * @description Carrot domain object
 */
export class Carrot implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Carrot');
	}
	
}
