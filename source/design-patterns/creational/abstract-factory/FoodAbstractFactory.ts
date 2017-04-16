import {Apple} from '../../domain-objects/Apple';
import {Carrot} from '../../domain-objects/Carrot';
import {Cherry} from '../../domain-objects/Cherry';
import {IFruit} from '../../domain-objects/IFruit';
import {IVegetable} from '../../domain-objects/IVegetable';

export interface IFoodAbstractFactory {
	makeFruit(sweet?: boolean): IFruit;
	makeVegetable(): IVegetable;
}

/**
 * @description AbstractFactory for making food
 */
export class FoodAbstractFactory implements IFoodAbstractFactory {
	
	public makeFruit(sweet?: boolean): IFruit {
		if (sweet) {
			return new Cherry();
		} else {
			return new Apple();
		}
	}
	
	public makeVegetable(): IVegetable {
		return new Carrot();
	}
}
