/**
 * Carrot created on 4/15/17 3:31 PM.
 *
 * @description Carrot
 */

import {IVegetable} from './IVegetable';

export class Carrot implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Carrot');
	}
	
}
