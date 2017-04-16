import {IFood} from '../../../domain-objects/IFood';
import {IFoodBuilder} from './IFoodBuilder';

export interface IFoodMaker {
	getFood(): IFood;
	setFoodBuilder(foodBuilder: IFoodBuilder): void;
	createNewFood(): void;
}

/**
 * @description [To be completed]
 */
export class FoodMaker implements IFoodMaker {
	
	private foodBuilder: IFoodBuilder;
	
	public getFood(): IFood {
		return this.foodBuilder.getFood();
	}
	
	public setFoodBuilder(foodBuilder: IFoodBuilder): void {
		this.foodBuilder = foodBuilder;
	}
	
	public createNewFood(): void {
		this.foodBuilder.createNewFood();
		this.foodBuilder.grow();
	}
}
