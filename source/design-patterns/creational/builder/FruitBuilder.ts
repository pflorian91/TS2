import {IFruit} from '../../domain-objects/IFruit';

export interface IFruitBuilder {
	build(): IFruit;
}

/**
 * @description Fruit builder
 */
class FruitBuilder implements IFruitBuilder {
	
	public build(): IFruit {
		return null;
	}
}
