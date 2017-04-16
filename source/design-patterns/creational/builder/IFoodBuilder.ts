import {IFood} from '../../domain-objects/IFood';

/**
 * @description FoodBuilder interface
 */
export interface IFoodBuilder {
	createNewFood(): void;
	grow(): void;
	getFood(): IFood;
}
