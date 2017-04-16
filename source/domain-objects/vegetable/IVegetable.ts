import {IFood} from '../IFood';

/**
 * @description IVegetable interface
 */
export interface IVegetable extends IFood {
	canEatRootOrBulb(): boolean;
}
