import {Carrot} from '../domain-objects/Carrot';
import {Mushroom} from '../domain-objects/Mushroom';
import {Potato} from '../domain-objects/Potato';

export interface IVegetableFacade {
	growVegetables(): void;
}

/**
 * @description Facade for growing vegetables
 */
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
