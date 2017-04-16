import {Carrot} from '../../../domain-objects/vegetable/Carrot';
import {Mushroom} from '../../../domain-objects/vegetable/Mushroom';
import {Potato} from '../../../domain-objects/vegetable/Potato';

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
