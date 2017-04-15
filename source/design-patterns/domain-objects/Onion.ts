import {IVegetable} from './IVegetable';

/**
 * @description Onion domain object
 */
export class Onion implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Onion');
	}
	
}
