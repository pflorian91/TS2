import {IFood} from '../../../domain-objects/IFood';
import {IFoodBuilder} from './IFoodBuilder';
import {Apple} from '../../../domain-objects/fruit/Apple';
import {IFruit} from '../../../domain-objects/fruit/IFruit';

/**
 * @description Apple builder
 */
export class AppleBuilder implements IFoodBuilder {
	
	private apple: IFruit;
	
	public createNewFood(): void {
		this.apple = new Apple();
	}
	
	public grow(): void {
		this.apple.grow();
		this.apple.flower();
	}
	
	public getFood(): IFood {
		return this.apple;
	}
}
