/**
 * Mushroom created on 4/15/17 3:31 PM.
 *
 * @description Mushroom
 */

import {IVegetable} from './IVegetable';

export class Mushroom implements IVegetable {
	
	public grow(): void {
		console.log('I am growing as a Mushroom');
	}
	
}
