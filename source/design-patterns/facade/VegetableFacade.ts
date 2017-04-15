/**
 * VegetableFacade created on 4/15/17 3:30 PM.
 *
 * @description [To be completed]
 */

import {Carrot} from '../Carrot';
import {Mushroom} from '../Mushroom';
import {Potato} from '../Potato';

export interface IVegetableFacade {
	growVegetables(): void;
}

export class VegetableFacade implements IVegetableFacade {
	
	private carrot: Carrot = new Carrot();
	private mushroom: Mushroom = new Mushroom();
	private potato: Potato = new Potato();
	
	public growVegetables(): void {
		this.carrot.grow();
		this.mushroom.grow();
		this.potato.grow();
	}
}
