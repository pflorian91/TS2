import {IFood} from '../IFood';

/**
 * @description Vegetable interface
 */
export interface IVegetable extends IFood {
	canEatRootOrBulb(): boolean;
}
