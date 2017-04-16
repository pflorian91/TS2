import {Apple} from '../../../domain-objects/fruit/Apple';
import {Carrot} from '../../../domain-objects/vegetable/Carrot';
import {Cherry} from '../../../domain-objects/fruit/Cherry';
import {IFruit} from '../../../domain-objects/fruit/IFruit';
import {IVegetable} from '../../../domain-objects/vegetable/IVegetable';

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
