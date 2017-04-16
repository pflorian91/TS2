import {IFood} from '../../domain-objects/IFood';
import {Mushroom} from '../../domain-objects/Mushroom';
import {IFoodBuilder} from './IFoodBuilder';
import {IVegetable} from '../../domain-objects/IVegetable';

/**
 * @description Mushroom builder
 */
export class MushroomBuilder implements IFoodBuilder {
	
	private mushroom: IVegetable;
	
	public createNewFood(): void {
		this.mushroom = new Mushroom();
	}
	
	public grow(): void {
		this.mushroom.grow();
	}
	
	public getFood(): IFood {
		return this.mushroom;
	}
}
